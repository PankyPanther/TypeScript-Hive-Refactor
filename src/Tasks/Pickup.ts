import { Task } from "definitions";
import goTo from "./goTo";

const pickup: Task = {
    name: 'pickup',
    run: function(room, target, creep) {
        creep.say('Picking')
        if (target){
            let source = Game.getObjectById(target) as Resource<ResourceConstant>
            if (source){
                if (creep.pickup(source) === ERR_NOT_IN_RANGE){
                    creep.memory.tasks.unshift(goTo.name)
                    return
                }
            }
    
            if (creep.store.getFreeCapacity() == 0) {
                creep.memory.tasks.shift()
                creep.memory.target = ''
            }
        }
    },

    getTarget: function(room){
        // i need dynamic source assignment
        return room.find(FIND_DROPPED_RESOURCES)[0].id
    }
};

export default pickup