
import harvest from "Tasks/harvest"
import { creepFinder } from "./TaskLogistics/creepFinder"
import { TaskLookup } from "definitions"
import supply from "Tasks/supply"
import drop from "Tasks/drop"
import pickup from "Tasks/pickup"
import upgrade from "Tasks/upgrade"
import build from "Tasks/build"
import harvestBoot from "Overlords/Situational/BootStrap/bootstrapHarvest"
import repair from "Tasks/repair"
import signController from "Tasks/sgnCtrllor"
import withdraw from "Tasks/withdraw"
import transfer from "Tasks/transfer"

const TLookup: TaskLookup = {
    'harvest': harvest,
    'harvestBoot': harvestBoot,
    'supply': supply,
    'drop': drop,
    'pickup': pickup,
    'upgrade': upgrade,
    'build': build,
    'repair': repair,
    'signController': signController,
    'withdraw': withdraw,
    'transfer': transfer
}

export function runOverLordCreeps(creepJob: string, overLord: string, defaultTasks: string[], room: Room): void {
    for (const creepName of creepFinder(creepJob, overLord)){
        const creep = Game.creeps[creepName]
        let Tasks = creep.memory.tasks
        if (!Memory.creeps[creepName].tasks.length){
            for (let task of defaultTasks){
                creep.memory.tasks.push(task)
            }
        } else {
            TLookup[Tasks[0]].run(room, creep.memory.target, creep)
        }
    }
}