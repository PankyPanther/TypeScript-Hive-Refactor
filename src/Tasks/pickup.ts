import { Task } from "definitions";


export const pickup: Task = {
    name: 'pickup',
    run: function(room, target, creep) {
        creep.say('pickup')
        
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
        }
    }, 
    getTarget: function(room){
        if (room.find(FIND_DROPPED_RESOURCES).length){
            return room.find(FIND_DROPPED_RESOURCES)[0].id
        }
        return ''
    }
};

export default pickup