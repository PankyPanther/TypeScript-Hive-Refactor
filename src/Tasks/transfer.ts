import { Task } from "definitions";


export const transfer: Task = {
    name: 'transfer',
    run: function(room, target, creep) {
        let TPOS = Game.getObjectById(target) as StructureContainer || StructureStorage
        if (TPOS){
            if (creep.transfer(TPOS, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                creep.moveTo(TPOS)
            }
    
            creep.transfer(TPOS, RESOURCE_ENERGY)
        } 

        if (creep.store.getFreeCapacity() == 0){
            creep.memory.tasks.shift()
            creep.memory.target = ''
            return
        }
    
        if (!creep.memory.target || TPOS === null){
            let fetchedTarget = this.getTarget!(room)
            if (fetchedTarget){
                creep.memory.target = fetchedTarget
            }
        }
        

    }, 

    getTarget: function(room){
        let containers = room.find(FIND_STRUCTURES).filter((struct) => {
            return struct.structureType === STRUCTURE_CONTAINER && struct.store[RESOURCE_ENERGY] > 0
        }) as StructureContainer[]

        console.log(containers)
        if (containers.length){
            return containers.sort((a, b) => b.store[RESOURCE_ENERGY] - a.store[RESOURCE_ENERGY])[0].id
        }

        return ''
    }
};

export default transfer