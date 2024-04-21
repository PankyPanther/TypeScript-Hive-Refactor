import { Task } from "definitions";

import goTo from "./goTo";

export const supply: Task = {
    name: 'supply',
    run: function(room, target, creep) {
        creep.say('supply')

        if (!creep.memory.target){
            let fetchedTarget = this.getTarget!(room)
            if (fetchedTarget){
                creep.memory.target = fetchedTarget
            }
        }
        
        let TPOS = Game.getObjectById<Structure>(target)
        if (TPOS){
            if (creep.transfer(TPOS, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                creep.memory.tasks.unshift(goTo.name)
                return
            }
    
            creep.transfer(TPOS, RESOURCE_ENERGY)
        }

        if (creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.tasks.shift()
            creep.memory.target = ''
        }
    }, 
    getTarget: function(room){
        return room.find(FIND_MY_SPAWNS)[0].id
    }
};

export default supply