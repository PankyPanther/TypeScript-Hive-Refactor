import { OverLord } from "definitions";
import drop from "Tasks/drop";
import { creepFinder } from "Overlords/TaskLogistics/creepFinder";
import { runOverLordCreeps } from "Overlords/runOverLordCreeps";
import harvest from "Tasks/harvest";
import { spawnCreep } from "Utils/spawnCreep";
import pickup from "Tasks/pickup";
import upgrade from "Tasks/upgrade";
import MiningSite from "Hive Clusters/MiningSite";
import supply from "Tasks/supply";
import build from "Tasks/build";
import repair from "Tasks/repair";
import { pick } from "lodash";
import transfer from "Tasks/transfer";
import withdraw from "Tasks/withdraw";

const roleCore: OverLord = {
    init: function(room) {
        room.memory.overLordData!['Core'] = {
            'Hauler': {
                targetAmount: 0
            },
            'Worker': {
                targetAmount: 5
            },
            'Upgrader': {
                targetAmount: 6
            }
        }
    },
    name: 'Core',
    run: function(room) {
        const overLordData = room.memory.overLordData![roleCore.name]

        if(!room.memory.overLordData!['Core']){
            roleCore.init(room)
        }

        const MinerTasks = [harvest.name, drop.name]
        const HaulerTasks = []
        const SupplierTasks = [supply.name]
        const WorkerTasks = []
        const UpgraderTasks = [upgrade.name]


        if (room.find(FIND_STRUCTURES).filter((struct) => struct.structureType === STRUCTURE_CONTAINER).length){
            if (room.find(FIND_DROPPED_RESOURCES).length){
                SupplierTasks.push(pickup.name)
            }else {
                SupplierTasks.push(withdraw.name)
            }
            WorkerTasks.push(withdraw.name)
            UpgraderTasks.push(withdraw.name)
        } else {
             SupplierTasks.push(pickup.name)
             WorkerTasks.push(pickup.name)
             UpgraderTasks.push(pickup.name)
        }

        const minerAmount = creepFinder('Miner', roleCore.name)
        const haulerAmount = creepFinder('Hauler', roleCore.name)
        const supplierAmount = creepFinder('Supplier', roleCore.name)
        const workerAmount = creepFinder('Worker', roleCore.name)
        const upgraderAmount = creepFinder('Upgrader', roleCore.name)

        if (supplierAmount.length < minerAmount.length){
            spawnCreep([MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY], `KIPS${Game.time}`, 
                {role: 'Supplier', overLord: roleCore.name, workRoom: room, homeRoom: room.name, tasks: [], target: '', colony: room.memory.name}, room)
        }

        else if (MiningSite.isOpenSource(room)){
            spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE], `KIPSM${Game.time}`, 
                {role: 'Miner', overLord: roleCore.name, workRoom: room, homeRoom: room.name, tasks: [], target: '', colony: room.memory.name}, room)
        }

        else if (upgraderAmount.length < overLordData['Upgrader'].targetAmount){
            spawnCreep([MOVE, MOVE, CARRY, CARRY, WORK, WORK, WORK, MOVE], `KIPU${Game.time}`, 
                {role: 'Upgrader', overLord: roleCore.name, workRoom: room, homeRoom: room.name, tasks: [], target: '', colony: room.memory.name}, room)
        }

        else if (workerAmount.length < overLordData['Worker'].targetAmount){
            spawnCreep([MOVE, MOVE, CARRY, CARRY, WORK, WORK, WORK, MOVE], `KIPW${Game.time}`, 
                {role: 'Worker', overLord: roleCore.name, workRoom: room, homeRoom: room.name, tasks: [], target: '', colony: room.memory.name}, room)
        }



        if (minerAmount){
            runOverLordCreeps('Miner', 'Core', MinerTasks, room)
        }
        // if (haulerAmount){
            
        // }
        if (supplierAmount){
            runOverLordCreeps('Supplier', 'Core', SupplierTasks, room)
        }
        if (workerAmount){
            if (room.find(FIND_CONSTRUCTION_SITES).length){
                WorkerTasks.push(build.name)
                overLordData['Worker'].targetAmount = 5

            } else {
                WorkerTasks.push(repair.name)
                overLordData['Worker'].targetAmount = 2
            }

            runOverLordCreeps('Worker', 'Core', WorkerTasks, room)
        }
        if (upgraderAmount){
            runOverLordCreeps('Upgrader', 'Core', UpgraderTasks, room)
        }
    }
};


export default roleCore