import { runOverLordCreeps } from "Overlords/runOverLordCreeps";
import roleBootSrap from "../roleBootStrap";

export function bootStrapWorker(room: Room, creepsName: string[], tasks: string[]){
    for (let creepName of creepsName){
        const creep = Game.creeps[creepName]
        if (room.find(FIND_CONSTRUCTION_SITES).length){
            runOverLordCreeps(creep.memory.role, creep.memory.overLord, tasks, room)
        } else {
            creep.memory.role = 'Upgrader'
            creep.memory.tasks = []
            room.memory.overLordData![roleBootSrap.name]['Worker'].targetAmount = 0
        }
    }
}