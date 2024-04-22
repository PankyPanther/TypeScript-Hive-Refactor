import { runOverLordCreeps } from "Overlords/TaskLogistics/runOverLordCreeps";

export function bootStrapMiner(room: Room, creepsName: string[], tasks: string[]){
    for (let creepName of creepsName){
        const creep = Game.creeps[creepName]
        runOverLordCreeps(creep.memory.role, creep.memory.overLord, tasks, room)
    }
}