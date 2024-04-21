import { Task } from "definitions";

import goTo from "./goTo";

export const harvest: Task = {
    name: 'harvest',
    run: function(room, target, creep) {
        let TPOS = Game.getObjectById<Source>(target)
        if (TPOS){
            if (creep.harvest(TPOS) === ERR_NOT_IN_RANGE){
                creep.memory.tasks.unshift(goTo.name)
                return
            }
    
            creep.harvest(TPOS)
        }
    }, 
    getTarget: function(room){
        return room.find(FIND_SOURCES)[0].id
    }
};

export default harvest