import { RoomRole } from "definitions";

import { storeRoomPlanInMem } from "RoomPlanner/StoreRoomInMem";
import { getRoomPlan } from "RoomPlanner/getRoomPlan";
import { visualizeSetup } from "RoomPlanner/visualizeSetup";

const roleHome: RoomRole = {
    run: function(room) {
        let CM = getRoomPlan(room)
        visualizeSetup(CM, room.name)
    }
};


export default roleHome