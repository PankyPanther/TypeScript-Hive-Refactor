import { runOverLordCreeps } from "Overlords/TaskLogistics/runOverLordCreeps";
import { harvest } from "Tasks/harvest";

export function bootStrapMiner(room: Room, creepsName: string[]){
    for (let creepName of creepsName){
        const creep = Game.creeps[creepName]
        runOverLordCreeps(creep.memory.role, creep.memory.overLord, [harvest.name], room)
    }
}