import { Task } from "definitions";

import { OverLord } from "definitions";
import { spawnCreep } from "Utils/spawnCreep";
import { creepFinder } from "Overlords/TaskLogistics/creepFinder";
import { bootStrapMiner } from "./BootStrap/bootStrapMiner";
import { bootStrapFiller } from "./BootStrap/bootStrapFiller";

import harvest from "Tasks/harvest";
import drop from "Tasks/drop";
import supply from "Tasks/supply";
import pickup from "Tasks/pickup";

const roleBootSrap: OverLord = {
    name: 'BootStrap',
    run: function(room) {
        const MinerTasks = [harvest.name]
        const FillerTasks = [pickup.name, supply.name]


        const overLordData = room.memory.overLordData![roleBootSrap.name]
        const minerAmount = creepFinder('Miner', roleBootSrap.name)
        const fillerAmount = creepFinder('Filler', roleBootSrap.name)

        if (minerAmount.length < overLordData['Miner'].targetAmount){
            spawnCreep([MOVE, CARRY, WORK, WORK], `KIPM${Game.time}`, 
                {role: 'Miner', overLord: roleBootSrap.name, workRoom: room, homeRoom: room.name, tasks: [], target: ''}, room)
        }
        else if (fillerAmount.length < overLordData['Filler'].targetAmount){
            spawnCreep([MOVE,MOVE,MOVE, CARRY, CARRY, CARRY], `KIPF${Game.time}`, 
                {role: 'Filler', overLord: roleBootSrap.name, workRoom: room, homeRoom: room.name, tasks: [], target: ''}, room)
        }
        else {

        }

        if(fillerAmount){
            bootStrapFiller(room, fillerAmount, FillerTasks)
        }

        if(minerAmount){
            if (fillerAmount.length){
                MinerTasks.push(drop.name)
            } else {
                MinerTasks.push(supply.name)
            }

            bootStrapMiner(room, minerAmount, MinerTasks)
        }
    }
};


export default roleBootSrap