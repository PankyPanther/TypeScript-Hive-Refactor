import { OverLord } from "definitions";
import { creepFinder } from "Overlords/TaskLogistics/creepFinder";
import { spawnCreep } from "Utils/spawnCreep";

const roleCore: OverLord = {
    init: function(room) {

    },
    name: 'Core',
    run: function(room) {
        const overLordData = room.memory.overLordData![roleCore.name]
        const minerAmount = creepFinder('Miner', roleCore.name)
        const fillerAmount = creepFinder('Filler', roleCore.name)
        const upgraderAmount = creepFinder('Upgrader', roleCore.name)
        const workerAmount = creepFinder('Worker', roleCore.name)

        if (minerAmount.length < overLordData['Miner'].targetAmount){
            spawnCreep([MOVE, CARRY, WORK, WORK], `KIPM${Game.time}`, 
                {role: 'Miner', overLord: roleCore.name, workRoom: room, homeRoom: room.name, tasks: [], target: ''}, room)
        }
        else if (fillerAmount.length < overLordData['Filler'].targetAmount){
            spawnCreep([MOVE,MOVE,MOVE, CARRY, CARRY, CARRY], `KIPF${Game.time}`, 
                {role: 'Filler', overLord: roleCore.name, workRoom: room, homeRoom: room.name, tasks: [], target: ''}, room)
        }
        else if (upgraderAmount.length < overLordData['Upgrader'].targetAmount){
            spawnCreep([MOVE, CARRY, WORK, WORK], `KIPU${Game.time}`, 
                {role: 'Upgrader', overLord: roleCore.name, workRoom: room, homeRoom: room.name, tasks: [], target: ''}, room)
        }
        else if (workerAmount.length < overLordData['Worker'].targetAmount){
            spawnCreep([MOVE, CARRY, WORK, WORK], `KIPW${Game.time}`, 
                {role: 'Worker', overLord: roleCore.name, workRoom: room, homeRoom: room.name, tasks: [], target: ''}, room)
        }
    }
};


export default roleCore