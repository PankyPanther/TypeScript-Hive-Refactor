import { Task } from "definitions";
import goTo from "./goTo";

const deposite: Task = {
    name: 'deposite',
    run: function(room, target, creep) {
        let targetPos = Game.getObjectById<Structure>(target)
        if (targetPos){
            if (creep.transfer(targetPos, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                creep.memory.tasks.unshift(goTo.name)
                return
            }
        }

        if (creep.store[RESOURCE_ENERGY] === 0) {
            creep.memory.tasks.shift()
            creep.memory.target = ''
        }
    },

    getTarget: function(room){
        return room.find(FIND_MY_SPAWNS)[0].id
    }
};

export default deposite