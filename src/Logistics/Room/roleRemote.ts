import { RoomRole } from "definitions";
import MiningSite from "Hive Clusters/MiningSite";
import { getOutpostRoomplan } from "RoomPlanner/OutPostPlanner/getOutpostPlan";
import { visualizeSetup } from "RoomPlanner/visualizeSetup";

const roleRemote: RoomRole = {
    run: function(room) {
        
        if (!room.memory.roomPlan){
            let CM = getOutpostRoomplan(room)
            visualizeSetup(CM, room.name)
            MiningSite.init(room)
        }
    }
};


export default roleRemote