import { Task } from "definitions";


export const supply: Task = {
    name: 'supply',
    run: function(room, target, creep) {
        creep.say('supply')
        
        let TPOS = Game.getObjectById<Structure>(target) as StructureSpawn | StructureExtension

        if (TPOS){
            if (creep.transfer(TPOS, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                creep.moveTo(TPOS)
            }
    
            creep.transfer(TPOS, RESOURCE_ENERGY)
        }

        if (creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.tasks.shift()
            creep.memory.target = ''
            return
        }

        if (!creep.memory.target || TPOS === null || TPOS.store.getFreeCapacity(RESOURCE_ENERGY)! === 0){
            let fetchedTarget = this.getTarget!(room)
            if (fetchedTarget){
                creep.memory.target = fetchedTarget
            }
        }
    }, 

    getTarget: function(room){
        let extensions = room.find(FIND_STRUCTURES).filter((extension) => {
            return (extension.structureType === STRUCTURE_EXTENSION || extension.structureType === STRUCTURE_TOWER) && extension.store.getFreeCapacity(RESOURCE_ENERGY) > 0
        });
        if (extensions.length){
            return extensions[0].id
        }
    

        let spawn = room.find(FIND_MY_SPAWNS)[0];
        if (spawn && spawn.store.energy < 300) {
            return room.find(FIND_MY_SPAWNS)[0].id
        }
        return ''
    }
};

export default supply