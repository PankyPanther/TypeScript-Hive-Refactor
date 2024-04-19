import { Task } from "definitions";

const goTo: Task = {
    name: 'goTo',
    run: function(room, target, creep) {
        let targetPos = Game.getObjectById<Source>(target)
        if (targetPos){
            creep.moveTo(targetPos)
            
            if(creep.pos.isNearTo(targetPos)){
                creep.memory.tasks.shift()
            }
        }
    }
};

export default goTo