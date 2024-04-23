import { Task } from "definitions";

import { OverLord } from "definitions";
import { spawnCreep } from "Utils/spawnCreep";
import { creepFinder } from "Overlords/TaskLogistics/creepFinder";

import { bootStrapMiner } from "./BootStrap/bootStrapMiner";
import { bootStrapFiller } from "./BootStrap/bootStrapFiller";


import drop from "Tasks/drop";
import supply from "Tasks/supply";
import pickup from "Tasks/pickup";
import upgrade from "Tasks/upgrade";
import { bootStrapUpgrader } from "./BootStrap/bootStrapUpgrader";
import build from "Tasks/build";
import harvestBoot from "./BootStrap/bootstrapHarvest";
import MiningSite from "Hive Clusters/MiningSite";

const roleBootSrap: OverLord = {
    init: function(room) {
        room.memory.OverLord = ['']
        room.memory.OverLord!.push('BootStrap')
        room.memory.overLordData = {
            'BootStrap': {
                'Miner': {
                    targetAmount: 2
                },
                'Filler': {
                    targetAmount: 1
                },
                'Upgrader': {
                    targetAmount: 2
                },
                'Worker': {
                    targetAmount: 0
                }
            }
        }
        room.memory.OverLord.shift()
    },
    name: 'BootStrap',
    run: function(room) {
        const MinerTasks = [harvestBoot.name]
        const FillerTasks = [pickup.name, supply.name]
        const UpgraderTasks = [pickup.name, upgrade.name]
        const WorkerTasks = [pickup.name, build.name]

        const overLordData = room.memory.overLordData![roleBootSrap.name]
        const minerAmount = creepFinder('Miner', roleBootSrap.name)
        const fillerAmount = creepFinder('Filler', roleBootSrap.name)
        const upgraderAmount = creepFinder('Upgrader', roleBootSrap.name)
        const workerAmount = creepFinder('Worker', roleBootSrap.name)

        if (minerAmount.length < overLordData['Miner'].targetAmount){
            spawnCreep([MOVE, CARRY, WORK, WORK], `KIPM${Game.time}`, 
                {role: 'Miner', overLord: roleBootSrap.name, workRoom: room, homeRoom: room.name, tasks: [], target: ''}, room)
        }
        else if (fillerAmount.length < overLordData['Filler'].targetAmount){
            spawnCreep([MOVE,MOVE,MOVE, CARRY, CARRY, CARRY], `KIPF${Game.time}`, 
                {role: 'Filler', overLord: roleBootSrap.name, workRoom: room, homeRoom: room.name, tasks: [], target: ''}, room)
        }
        else if (upgraderAmount.length < overLordData['Upgrader'].targetAmount){
            spawnCreep([MOVE, CARRY, WORK, WORK], `KIPU${Game.time}`, 
                {role: 'Upgrader', overLord: roleBootSrap.name, workRoom: room, homeRoom: room.name, tasks: [], target: ''}, room)
        }
        else if (workerAmount.length < overLordData['Worker'].targetAmount){
            spawnCreep([MOVE, CARRY, WORK, WORK], `KIPW${Game.time}`, 
                {role: 'Worker', overLord: roleBootSrap.name, workRoom: room, homeRoom: room.name, tasks: [], target: ''}, room)
        }


        if(fillerAmount){
            bootStrapFiller(room, fillerAmount, FillerTasks)
        }

        if(workerAmount){
            bootStrapFiller(room, workerAmount, WorkerTasks)
        }

        if(upgraderAmount){
            bootStrapUpgrader(room, upgraderAmount, UpgraderTasks)
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