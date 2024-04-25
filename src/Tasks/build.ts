import { Task } from "definitions";


export const build: Task = {
    name: 'build',
    run: function(room, target, creep) {
        // creep.say('build')

        if (!creep.memory.target){
            let fetchedTarget = this.getTarget!(room)
            if (fetchedTarget){
                creep.memory.target = fetchedTarget
            }
        }
        
        let TPOS = Game.getObjectById(target) as ConstructionSite<BuildableStructureConstant>
        if (TPOS){
            if (creep.build(TPOS) === ERR_NOT_IN_RANGE){
                creep.moveTo(TPOS)
                return
            }
    
            creep.build(TPOS)
        }

        if (creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.tasks.shift()
            creep.memory.target = ''
            return
        }

        if (!creep.memory.target || TPOS === null || !room.find(FIND_CONSTRUCTION_SITES).length){
            let fetchedTarget = this.getTarget!(room)
            if (fetchedTarget){
                creep.memory.target = fetchedTarget
            }
        }
    }, 
    getTarget: function(room){
        let sites = room.find(FIND_CONSTRUCTION_SITES)

        if (sites.length){
            return sites[0].id
        }

        return ''
    }
};

export default build