import { Task } from "definitions";

import { OverLord } from "definitions";
import { spawnCreep } from "Utils/spawnCreep";
import { runOverLordCreeps } from "Overlords/TaskLogistics/runOverLordCreeps";
import { creepFinder } from "Overlords/TaskLogistics/creepFinder";


interface RoleTaskLookUp {
    [roleName: string]: string[] 
}

const TASKS: RoleTaskLookUp = {
    // 'Miner': [harvest.name],
    // 'Filler': [pickup.name, deposite.name]
}


const roleBootSrap: OverLord = {
    run: function(room) {
        runOverLordCreeps('Miner', 'BootStrap', TASKS['Miner'], room)
        runOverLordCreeps('Filler', 'BootStrap', TASKS['Filler'], room)
    }
};


export default roleBootSrap