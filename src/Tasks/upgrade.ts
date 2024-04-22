import { Task } from "definitions";

import goTo from "./goTo";

export const upgrade: Task = {
    name: 'upgrade',
    run: function(room, target, creep) {
        creep.say('upgrade')
        
        if (!creep.memory.target){
            creep.memory.target = creep.room.controller!.id
        }

        let TPOS = creep.room.controller
        if (TPOS){
            if (creep.upgradeController(TPOS) === ERR_NOT_IN_RANGE){
                creep.memory.tasks.unshift(goTo.name)
                return
            }
    
            creep.upgradeController(TPOS)
        }

        if (creep.store.getFreeCapacity() == 0){
            creep.memory.tasks.shift()
            creep.memory.target = ''
        }
    }
};

export default upgrade