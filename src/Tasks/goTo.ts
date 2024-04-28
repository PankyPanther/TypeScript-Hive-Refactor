import { Task } from "definitions";
import { range } from "lodash";

export const goTo: Task = {
    name: 'goTo',
    run: function(room, target, creep) {
        creep.say('goTo')
        let TPOS = Game.getObjectById<Source | Structure>(target)

        if (!creep.memory.target || TPOS === null){
            creep.memory.target = ''
            creep.memory.tasks.shift()
            return
        }

        if(TPOS){
            if(creep.memory.tasks[1] === 'upgrade'){
                if (creep.pos.inRangeTo(TPOS, 3)){
                    creep.memory.tasks.shift()
                    return
                }
            }
            if (creep.pos.isNearTo(TPOS)){
                creep.memory.tasks.shift()
                return
            }
    
            creep.moveTo(TPOS)
        } 

    }
};

export default goTo