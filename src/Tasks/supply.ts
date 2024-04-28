import { Task } from "definitions";
import { create } from "lodash";


export const supply: Task = {
    name: 'supply',
    run: function(room, target, creep) {
        // creep.say('supply')
        
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
            let fetchedTarget = this.getTarget!(room, creep)
            if (fetchedTarget){
                creep.memory.target = fetchedTarget
            }
        }
    }, 

    getTarget: function(room, creep){
        let extensions = room.find(FIND_STRUCTURES).filter((extension) => {
            return (extension.structureType === STRUCTURE_EXTENSION) && extension.store.getFreeCapacity(RESOURCE_ENERGY) > 0
        });

        if (extensions.length){
            return creep!.pos.findClosestByRange(extensions)!.id
        }

        let spawn = room.find(FIND_MY_SPAWNS)[0];
        if (spawn && spawn.store.energy < 300) {
            return room.find(FIND_MY_SPAWNS)[0].id
        }

        let towers = room.find(FIND_STRUCTURES).filter((extension) => {
            return (extension.structureType === STRUCTURE_TOWER) && extension.store.getFreeCapacity(RESOURCE_ENERGY) > 0
        });

        if (towers.length){
            return towers[0].id
        }
    
        return ''
    }
};

export default supply