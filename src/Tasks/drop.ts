import { Task } from "definitions";

export const drop: Task = {
    name: 'drop',
    run: function(room, target, creep) {
        // creep.say('drop')
        creep.drop(RESOURCE_ENERGY)
        creep.memory.tasks.shift()
    }
};

export default drop