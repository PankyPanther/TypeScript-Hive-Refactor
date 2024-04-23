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

const roleCore: OverLord = {
    init: function(room) {

    },
    name: 'Core',
    run: function(room) {
        const overLordData = room.memory.overLordData![roleCore.name]

        const MinerTasks = [harvest.name, drop.name]
        const HaulerTasks = []
        const SupplierTasks = [pickup.name]
        const WorkerTasks = [pickup.name]
        const UpgraderTasks = [pickup.name, upgrade.name]

        const minerAmount = creepFinder('Miner', roleCore.name)
        const haulerAmount = creepFinder('Hauler', roleCore.name)
        const supplierAmount = creepFinder('Supplier', roleCore.name)
        const workerAmount = creepFinder('Worker', roleCore.name)
        const upgraderAmount = creepFinder('Upgrader', roleCore.name)


        if (MiningSite.isOpenSource(room)){
            spawnCreep([WORK, WORK, WORK, WORK, WORK, MOVE], `KIPSM${Game.time}`, 
                {role: 'Miner', overLord: roleCore.name, workRoom: room, homeRoom: room.name, tasks: [], target: ''}, room)
        }


        if (minerAmount){
            runOverLordCreeps('Miner', 'Core', MinerTasks, room)
        }
        // if (haulerAmount){
            
        // }
        // if (supplierAmount){
            
        // }
        // if (workerAmount){
            
        // }
        // if (upgraderAmount){
            
        // }
    }
};


export default roleCore