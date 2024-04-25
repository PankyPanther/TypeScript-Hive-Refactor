import { Task } from "definitions";


export const repair: Task = {
    name: 'repair',
    run: function(room, target, creep) {
        creep.say('repair')

        let TPOS = Game.getObjectById<Structure>(target) as StructureRoad | StructureContainer

        if (TPOS){
            if (creep.repair(TPOS) === ERR_NOT_IN_RANGE){
                creep.moveTo(TPOS)
            }
    
            creep.repair(TPOS)
        }

        if (creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.tasks.shift()
            creep.memory.target = ''
            return
        }

        if (!creep.memory.target || TPOS === null || TPOS.hits === TPOS.hitsMax){
            let fetchedTarget = this.getTarget!(room)
            if (fetchedTarget){
                creep.memory.target = fetchedTarget
            }
        }

    }, 

    getTarget: function(room){
        let structure = room.find(FIND_STRUCTURES)
            .filter((struct) => {
                return struct.hits < struct.hitsMax && (struct.structureType == STRUCTURE_CONTAINER || struct.structureType == STRUCTURE_ROAD) 
            })
            .sort((a, b) => (a.hits / a.hitsMax) - (b.hits / b.hitsMax))

        if (structure.length){
            return structure[0].id
        }
        return ''
    }
};

export default repair