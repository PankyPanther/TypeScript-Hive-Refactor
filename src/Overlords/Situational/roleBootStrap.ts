import { Task } from "definitions";

import { OverLord } from "definitions";
import { spawnCreep } from "Utils/spawnCreep";
import { runOverLordCreeps } from "Overlords/TaskLogistics/runOverLordCreeps";
import { creepFinder } from "Overlords/TaskLogistics/creepFinder";
import { bootStrapMiner } from "./BootStrap/bootStrapMiner";
import { bootStrapFiller } from "./BootStrap/bootStrapFiller";


interface RoleTaskLookUp {
    [roleName: string]: string[] 
}

const TASKS: RoleTaskLookUp = {
    // 'Miner': [harvest.name],
    // 'Filler': [pickup.name, deposite.name]
}


const roleBootSrap: OverLord = {
    name: 'BootStrap',
    run: function(room) {
        const overLordData = room.memory.overLordData![roleBootSrap.name]
        const minerAmount = creepFinder('Miner', roleBootSrap.name)
        const fillerAmount = creepFinder('Filler', roleBootSrap.name)

        if (minerAmount.length < overLordData['Miner'].targetAmount){
            spawnCreep([MOVE,MOVE,MOVE, CARRY, CARRY, CARRY], `KIPM${Game.time}`, 
                {role: 'Miner', overLord: roleBootSrap.name, workRoom: room, homeRoom: room.name, tasks: [], target: undefined}, room)
        }
        else if (fillerAmount.length < overLordData['Filler'].targetAmount){
            spawnCreep([MOVE,MOVE,MOVE, CARRY, CARRY, CARRY], `KIPF${Game.time}`, 
                {role: 'Filler', overLord: roleBootSrap.name, workRoom: room, homeRoom: room.name, tasks: [], target: undefined}, room)
        }
        else {

        }


        if(minerAmount){
            bootStrapMiner(room, minerAmount)
        }
        if(fillerAmount){
            bootStrapFiller(room, fillerAmount)
        }
    }
};


export default roleBootSrap