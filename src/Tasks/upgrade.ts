import { Task } from "definitions";


export const upgrade: Task = {
    name: 'upgrade',
    run: function(room, target, creep) {
        creep.say('upgrade')
        
        if (!creep.memory.target){
            creep.memory.target = creep.room.controller!.id
        }

        let TPOS = creep.room.controller
        if (TPOS){
            if (creep.upgradeController(TPOS) === ERR_NOT_IN_RANGE){
                creep.moveTo(TPOS)
            }
    
            creep.upgradeController(TPOS)
        }

        if (creep.store[RESOURCE_ENERGY] == 0){
            creep.memory.tasks.shift()
            creep.memory.target = ''
            return
        }
    }
};

export default upgrade