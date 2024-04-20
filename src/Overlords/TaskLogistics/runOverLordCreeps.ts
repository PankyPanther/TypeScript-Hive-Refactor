
import { creepFinder } from "./creepFinder"
import { TaskLookup } from "definitions"
import deposite from "Tasks/Deposit"
import goTo from "Tasks/goTo"
import harvest from "Tasks/Harvest"
import pickup from "Tasks/Pickup"
import drop from "Tasks/drop"

const TLookup: TaskLookup = {
    'harvest': harvest,
    'goTo': goTo,
    'deposite': deposite,
    'pickup': pickup,
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
            if (!creep.memory.target){
                const task = Tasks[0]; // Assuming Tasks is an array
                const taskLookup = TLookup[task];
                
                if (task && taskLookup && typeof taskLookup.getTarget === 'function') {
                    const target = taskLookup.getTarget(room);
                    creep.memory.target = target !== undefined ? target : undefined;
                } else {
                    creep.memory.target = undefined;
                }

            }

            if (creep.memory.target){
                TLookup[Tasks[0]].run(room, creep.memory.target, creep)
            }

        }
    }
}