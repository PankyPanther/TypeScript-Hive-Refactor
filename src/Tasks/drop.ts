import { Task } from "definitions";

const drop: Task = {
    name: 'drop',
    run: function(room, target, creep) {
        creep.say('dropping')
        creep.drop(RESOURCE_ENERGY)
    }
};

export default drop