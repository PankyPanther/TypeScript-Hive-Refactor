import { OverLord } from "definitions";
import drop from "Tasks/drop";
import { creepFinder } from "Overlords/TaskLogistics/creepFinder";
import { runOverLordCreeps } from "Overlords/runOverLordCreeps";
import { spawnCreep } from "Utils/spawnCreep";
import { getBody } from "Utils/getBody";
import harvest from "Tasks/harvest";
import goToRoom from "Tasks/goToRoom";
import scout from "Tasks/scout";


const roleColinazation: OverLord = {
    init: function(room) {
        room.memory.overLordData![roleColinazation.name] = {
            'Scouts': {
                targetAmount: 1
            },
            'Claimers': {
                targetAmount: 0
            },
            'Pioneers': {
                targetAmount: 0
            }
        }
    },
    name: 'Colinazation',
    run: function(room) {
        const overLordData = room.memory.overLordData![roleColinazation.name]
        const roomCapacity = room.energyCapacityAvailable

        if(!room.memory.overLordData![roleColinazation.name]){
            roleColinazation.init(room)
        }

        const ScoutTasks = [scout.name]
        const scoutAmount = creepFinder('Scouts', roleColinazation.name)



        if (scoutAmount.length < overLordData['Scouts'].targetAmount){
            spawnCreep([MOVE], `KIPSss${Game.time}`, 
                {role: 'Scouts', overLord: roleColinazation.name, workRoom: '', homeRoom: room.name, tasks: [], target: '', colony: room.memory.name}, room)
        }


        if (scoutAmount){
            runOverLordCreeps('Scouts', roleColinazation.name, ScoutTasks, room)
        }
    }
};


export default roleColinazation