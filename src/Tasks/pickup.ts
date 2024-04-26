import { Task } from "definitions";

export const pickup: Task = {
    name: 'pickup',
    run: function(room, target, creep) {
        // creep.say('pickup')
        
        let TPOS = Game.getObjectById(target) as Resource<ResourceConstant>
        if (TPOS){
            if (creep.pickup(TPOS) === ERR_NOT_IN_RANGE){
                creep.moveTo(TPOS)
            }
    
            creep.pickup(TPOS)
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
            if (room.find(FIND_STRUCTURES).filter((struct)=> struct.structureType === STRUCTURE_CONTAINER).length && !fetchedTarget){
                creep.memory.tasks.shift()
            }
        }
    }, 
    getTarget: function(room){
        let droppedSource = room.find(FIND_DROPPED_RESOURCES).sort((a, b) => b.amount - a.amount)

        if (droppedSource.length){
            return droppedSource[0].id
        }

        return ''
    }
};

export default pickup