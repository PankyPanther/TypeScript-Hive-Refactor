import { Task } from "definitions";

export const goTo: Task = {
    name: 'goTo',
    run: function(room, target, creep) {
        creep.say('goTo')
        let TPOS = Game.getObjectById<Source | Structure>(target)
        if(TPOS){
            if (creep.pos.isNearTo(TPOS)){
                creep.memory.tasks.shift()
                return
            }
    
            creep.moveTo(TPOS)
        }
    }
};

export default goTo