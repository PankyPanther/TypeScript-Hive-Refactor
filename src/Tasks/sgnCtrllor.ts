import { Task } from "definitions";
import { controllerSign } from "definitions";

export const signController: Task = {
    name: 'signController',
    run: function(room, target, creep) {
        if (!creep.memory.target){
            creep.memory.target = creep.room.controller!.id
        }

        let TPOS = creep.room.controller
        if (TPOS){
            if (creep.signController(TPOS, controllerSign) === ERR_NOT_IN_RANGE){
                creep.moveTo(TPOS)
            }
    
            creep.signController(TPOS, controllerSign)
        }

        if (TPOS?.sign?.text === controllerSign){
            creep.memory.tasks.shift()
            return
        }
    }
};

export default signController