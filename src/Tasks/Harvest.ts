import { Task } from "definitions";
import goTo from "./goTo";

const harvest: Task = {
    name: 'harvest',
    run: function(room, target, creep) {
        creep.say('Harvesting')
        let source = Game.getObjectById<Source>(target)
        if (source){
            if (creep.harvest(source) === ERR_NOT_IN_RANGE){
                creep.memory.tasks.unshift(goTo.name)
                return
            }
        }

        if (creep.store.getFreeCapacity() == 0) {
            creep.memory.tasks.shift()
            creep.memory.target = ''
        }
    },

    getTarget: function(room){
        // i need dynamic source assignment
        return room.find(FIND_SOURCES)[0].id
    }
};

export default harvest