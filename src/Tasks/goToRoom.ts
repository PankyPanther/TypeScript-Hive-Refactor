import { Task } from "definitions";

export const goToRoom: Task = {
    name: 'goToRoom',
    run: function(room, target, creep) { 
        if (creep.memory.workRoom) {
            let flag = Game.flags[creep.memory.workRoom]
            creep.moveTo(flag)
        } 

        if (creep.room.name === creep.memory.workRoom){
            creep.memory.tasks.shift()
            creep.memory.target = ''
            return
        }

        if (!creep.memory.target || target === null){
            let fetchedTarget = this.getTarget!(room)
            if (fetchedTarget){
                creep.memory.target = fetchedTarget
            }
            
        }
    }, 
    getTarget: function(room){

        return ''
    }
};

export default goToRoom