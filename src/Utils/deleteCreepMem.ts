import { create } from "lodash";

export function deleteCreepMemory(creep: CreepMemory){
    let target = creep.target
    for (let flag of creep.workRoom.find(FIND_FLAGS)){
        if (target === flag.name){
            creep.workRoom.memory.miningSites![flag.name].creepName = ''
        }
    }
}