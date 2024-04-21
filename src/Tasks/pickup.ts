import { Task } from "definitions";

import goTo from "./goTo";

export const pickup: Task = {
    name: 'pickup',
    run: function(room, target, creep) {
        creep.say('pickup')

        if (!creep.memory.target){
            let fetchedTarget = this.getTarget!(room)
            if (fetchedTarget){
                creep.memory.target = fetchedTarget
            }
        }
        
        let TPOS = Game.getObjectById(target) as Resource<ResourceConstant>
        if (TPOS){
            if (creep.pickup(TPOS) === ERR_NOT_IN_RANGE){
                creep.memory.tasks.unshift(goTo.name)
                return
            }
    
            creep.pickup(TPOS)
        }

        if (creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.tasks.shift()
            creep.memory.target = ''
        }
    }, 
    getTarget: function(room){
        return room.find(FIND_DROPPED_RESOURCES)[0].id
    }
};

export default pickup