import { Task } from "definitions";
import goTo from "./goTo";
import drop from "./drop";
import deposite from "./Deposit";

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

            for (let creepName in Memory.creeps){
                if (Game.creeps[creepName].memory.role === 'Filler'){
                    creep.memory.tasks.unshift(drop.name)
                    return
                }
            }

            // creep.memory.tasks.unshift(deposite.name)
        }
    },

    getTarget: function(room){
        // i need dynamic source assignment
        return room.find(FIND_SOURCES)[0].id
    }
};

export default harvest