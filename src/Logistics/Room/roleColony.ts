import { RoomRole } from "definitions";

import { storeRoomPlanInMem } from "RoomPlanner/StoreRoomInMem";
import { getRoomPlan } from "RoomPlanner/getRoomPlan";
import { visualizeSetup } from "RoomPlanner/visualizeSetup";
import { runOverLords } from "Overlords/OverSeer";

const roleColony: RoomRole = {
    run: function(room) {
        let CM = getRoomPlan(room)
        visualizeSetup(CM, room.name)

        runOverLords(room)
    }
};


export default roleColony