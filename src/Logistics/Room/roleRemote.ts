import { RoomRole } from "definitions";
import { getOutpostRoomplan } from "RoomPlanner/OutPostPlanner/getOutpostPlan";
import { visualizeSetup } from "RoomPlanner/visualizeSetup";

const roleRemote: RoomRole = {
    run: function(room) {
        let CM = getOutpostRoomplan(room)
        visualizeSetup(CM, room.name)
        
    }
};


export default roleRemote