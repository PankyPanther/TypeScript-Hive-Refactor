import { RoomRole } from "definitions";
import MiningSite from "Hive Clusters/MiningSite";


const roleExplored: RoomRole = {
    run: function(room) {
        if (!room.memory.sourceCount){
            room.memory.sourceCount = room.find(FIND_SOURCES).length
        }

        let hostile = room.find(FIND_HOSTILE_CREEPS && FIND_HOSTILE_POWER_CREEPS && FIND_HOSTILE_STRUCTURES)

        if (hostile.length){
            room.memory.status = 'hostile'
        }

        if (!room.memory.parentRoom){
            room.memory.parentRoom = room.find(FIND_MY_CREEPS)[0].memory.homeRoom
        }
        
    }
};


export default roleExplored