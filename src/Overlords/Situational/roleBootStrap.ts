import { Task } from "definitions";

import goTo from "Tasks/goTo";

import { OverLord } from "definitions";
import { creepFinder } from "Overlords/creepFinder";
import { assignTasks } from "Overlords/TaskAssignment/assignTasks";
import { createPrivateKey } from "crypto";
import harvest from "Tasks/Harvest";

interface TaskLookUp {
    [roleName: string]: string[]
}

const TASKS: TaskLookUp = {
    'Miner': ['goTo', 'harvest']
}

const roleBootSrap: OverLord = {
    run: function(room) {
        const spawns = room.find(FIND_MY_SPAWNS);
        const newName =  `Kipper Spawn: M${Game.time}`;
        spawns[0].spawnCreep([WORK,WORK,MOVE,CARRY], newName, {memory: {role: 'Miner', overLord: 'BootStrap', workRoom: room, homeRoom: room.name, tasks: []}}) 
        
        for (const creepName of creepFinder('Miner', 'BootStrap')){
            const creep = Game.creeps[creepName]
            if (!Memory.creeps[creepName].tasks.length){
                console.log(creep)
                for (let task of TASKS['Miner']){
                    Memory.creeps[creepName].tasks.push(task)
                }
            }
        }
    }
};


export default roleBootSrap