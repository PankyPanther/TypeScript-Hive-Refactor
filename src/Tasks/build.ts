import { Task } from "definitions";

import goTo from "./goTo";

export const build: Task = {
    name: 'build',
    run: function(room, target, creep) {
        creep.say('build')

        if (!creep.memory.target){
            let fetchedTarget = this.getTarget!(room)
            if (fetchedTarget){
                creep.memory.target = fetchedTarget
            }
        }
        
        let TPOS = Game.getObjectById(target) as ConstructionSite<BuildableStructureConstant>
        if (TPOS){
            if (creep.build(TPOS) === ERR_NOT_IN_RANGE){
                creep.memory.tasks.unshift(goTo.name)
                return
            }
    
            creep.build(TPOS)
        }

        if (creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.tasks.shift()
            creep.memory.target = ''
        }
    }, 
    getTarget: function(room){
        return room.find(FIND_CONSTRUCTION_SITES)[0].id
    }
};

export default build