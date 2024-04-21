import { Task } from "definitions";

export const goTo: Task = {
    name: 'goTo',
    run: function(room, target, creep) {
        let TPOS = Game.getObjectById<Source | Structure>(target)
        if(TPOS){
            if (!creep.pos.isNearTo(TPOS)){
                creep.memory.tasks.unshift(goTo.name)
                return
            }
    
            creep.moveTo(TPOS)
        }
    }
};

export default goTo