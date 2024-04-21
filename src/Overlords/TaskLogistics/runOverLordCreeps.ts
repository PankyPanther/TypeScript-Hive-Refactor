
import harvest from "Tasks/harvest"
import { creepFinder } from "./creepFinder"
import { TaskLookup } from "definitions"
import goTo from "Tasks/goTo"
import supply from "Tasks/supply"
import drop from "Tasks/drop"

const TLookup: TaskLookup = {
    'harvest': harvest,
    'goTo': goTo,
    'supply': supply,
    'drop': drop
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