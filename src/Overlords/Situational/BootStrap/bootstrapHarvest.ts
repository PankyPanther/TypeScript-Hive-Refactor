import { Task } from "definitions";


export const harvestBoot: Task = {
    name: 'harvestBoot',
    run: function(room, target, creep) {
        creep.say('harvest')
        
        if (!creep.memory.target){
            let fetchedTarget = this.getTarget!(room)
            if (fetchedTarget){
                creep.memory.target = fetchedTarget
            }
        }

        let TPOS = Game.getObjectById<Source>(target)
        if (TPOS){
            if (creep.harvest(TPOS) === ERR_NOT_IN_RANGE){
                creep.moveTo(TPOS)
                return
            }
    
            creep.harvest(TPOS)
        }

        if (creep.store.getFreeCapacity() == 0){
            creep.memory.tasks.shift()
            creep.memory.target = ''
        }
    }, 
    getTarget: function(room){
        return room.find(FIND_SOURCES)[0].id
    }
};

export default harvestBoot