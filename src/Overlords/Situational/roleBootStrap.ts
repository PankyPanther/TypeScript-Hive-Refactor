import { Task } from "definitions";

import deposite from "Tasks/Deposit";
import harvest from "Tasks/Harvest";
import pickup from "Tasks/Pickup";

import { OverLord } from "definitions";
import { spawnCreep } from "Utils/spawnCreep";
import { runOverLordCreeps } from "Overlords/TaskLogistics/runOverLordCreeps";
import { creepFinder } from "Overlords/TaskLogistics/creepFinder";


interface RoleTaskLookUp {
    [roleName: string]: string[] 
}

const TASKS: RoleTaskLookUp = {
    'Miner': [harvest.name],
    'Filler': [pickup.name, deposite.name]
}


const roleBootSrap: OverLord = {
    run: function(room) {
        if (creepFinder('Miner', 'BootStrap').length < 2){
            spawnCreep([WORK,WORK,MOVE,CARRY], `Kipper Spawn: M${Game.time}`, {role: 'Miner', overLord: 'BootStrap', workRoom: room, homeRoom: room.name, tasks: [], target: ''}, room)
        }
        else if (creepFinder('Filler', 'BootStrap').length < 1) {
            spawnCreep([MOVE,MOVE,MOVE,CARRY, CARRY, CARRY], `Kipper Spawn: F${Game.time}`, {role: 'Filler', overLord: 'BootStrap', workRoom: room, homeRoom: room.name, tasks: [], target: ''}, room)
        }

        runOverLordCreeps('Miner', 'BootStrap', TASKS['Miner'], room)
        runOverLordCreeps('Filler', 'BootStrap', TASKS['Filler'], room)
    }
};


export default roleBootSrap