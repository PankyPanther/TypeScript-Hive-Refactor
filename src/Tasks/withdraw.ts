import { Task } from "definitions";

export const withdraw: Task = {
    name: 'withdraw',
    run: function(room, target, creep) {
        let TPOS = Game.getObjectById<Structure>(target) as StructureSpawn | StructureExtension

        if (TPOS){
            if (creep.withdraw(TPOS, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                creep.moveTo(TPOS)
            }
    
            creep.withdraw(TPOS, RESOURCE_ENERGY)
        }

        if (creep.store.getFreeCapacity() == 0){
            creep.memory.tasks.shift()
            creep.memory.target = ''
            return
        }

        if (!creep.memory.target || TPOS === null || TPOS.store[RESOURCE_ENERGY] === 0){
            let fetchedTarget = this.getTarget!(room)
            if (fetchedTarget){
                creep.memory.target = fetchedTarget
            }
        }
    }, 
    getTarget: function(room){
        let containers = room.find(FIND_STRUCTURES).filter((container) => {
            return (container.structureType === STRUCTURE_CONTAINER)
        }) as StructureContainer[]

        if (containers.length){
            let container = containers.sort((a, b) => b.store[RESOURCE_ENERGY] - a.store[RESOURCE_ENERGY])[0]
            return container.id
        }

        return ''
    }
};

export default withdraw