import { OverLord } from "definitions";
import drop from "Tasks/drop";
import { creepFinder } from "Overlords/TaskLogistics/creepFinder";
import { runOverLordCreeps } from "Overlords/TaskLogistics/runOverLordCreeps";
import harvest from "Tasks/harvest";
import { spawnCreep } from "Utils/spawnCreep";
import pickup from "Tasks/pickup";
import { pick } from "lodash";
import upgrade from "Tasks/upgrade";
import MiningSite from "Hive Clusters/MiningSite";
import supply from "Tasks/supply";

const roleCore: OverLord = {
    init: function(room) {
        room.memory.overLordData!['Core'] = {
            'Hauler': {
                targetAmount: 0
            },
            'Worker': {
                targetAmount: 0
            },
            'Upgrader': {
                targetAmount: 3
            }
        }
    },
    name: 'Core',
    run: function(room) {
        const overLordData = room.memory.overLordData![roleCore.name]

        // if(!room.memory.overLordData!['Core']){
            roleCore.init(room)
        // }

        const MinerTasks = [harvest.name, drop.name]
        const HaulerTasks = []
        const SupplierTasks = [pickup.name, supply.name]
        const WorkerTasks = [pickup.name]
        const UpgraderTasks = [pickup.name, upgrade.name]

        const minerAmount = creepFinder('Miner', roleCore.name)
        const haulerAmount = creepFinder('Hauler', roleCore.name)
        const supplierAmount = creepFinder('Supplier', roleCore.name)
        const workerAmount = creepFinder('Worker', roleCore.name)
        const upgraderAmount = creepFinder('Upgrader', roleCore.name)

        if (supplierAmount.length < minerAmount.length){
            spawnCreep([MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY], `KIPS${Game.time}`, 
                {role: 'Supplier', overLord: roleCore.name, workRoom: room, homeRoom: room.name, tasks: [], target: ''}, room)
        }

        if (MiningSite.isOpenSource(room)){
            spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE], `KIPSM${Game.time}`, 
                {role: 'Miner', overLord: roleCore.name, workRoom: room, homeRoom: room.name, tasks: [], target: ''}, room)
        }

        if (upgraderAmount.length < overLordData['Upgrader'].targetAmount){
            spawnCreep([MOVE, MOVE, CARRY, CARRY, WORK, WORK, WORK, MOVE], `KIPU${Game.time}`, 
                {role: 'Upgrader', overLord: roleCore.name, workRoom: room, homeRoom: room.name, tasks: [], target: ''}, room)
        }



        if (minerAmount){
            runOverLordCreeps('Miner', 'Core', MinerTasks, room)
        }
        // if (haulerAmount){
            
        // }
        if (supplierAmount){
            runOverLordCreeps('Supplier', 'Core', SupplierTasks, room)
        }
        // if (workerAmount){
            
        // }
        if (upgraderAmount){
            runOverLordCreeps('Upgrader', 'Core', UpgraderTasks, room)
        }
    }
};


export default roleCore