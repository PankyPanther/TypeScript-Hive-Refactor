import { Task } from "definitions";

import deposite from "Tasks/Deposit";
import harvest from "Tasks/Harvest";

import { OverLord } from "definitions";
import { spawnCreep } from "Utils/spawnCreep";
import { runOverLordCreeps } from "Overlords/TaskLogistics/runOverLordCreeps";


interface RoleTaskLookUp {
    [roleName: string]: string[] 
}

const TASKS: RoleTaskLookUp = {
    'Miner': [harvest.name, deposite.name]
}


const roleBootSrap: OverLord = {
    run: function(room) {
        spawnCreep([WORK,WORK,MOVE,CARRY], `Kipper Spawn: M${Game.time}`, {role: 'Miner', overLord: 'BootStrap', workRoom: room, homeRoom: room.name, tasks: [], target: ''}, room)
        runOverLordCreeps('Miner', 'BootStrap', TASKS['Miner'], room)
    }
};


export default roleBootSrap