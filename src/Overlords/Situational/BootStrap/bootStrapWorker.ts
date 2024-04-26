import { runOverLordCreeps } from "Overlords/runOverLordCreeps";

export function bootStrapWorker(room: Room, creepsName: string[], tasks: string[]){
    for (let creepName of creepsName){
        const creep = Game.creeps[creepName]
        runOverLordCreeps(creep.memory.role, creep.memory.overLord, tasks, room)
    }
}