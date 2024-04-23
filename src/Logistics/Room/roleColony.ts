import { RoomRole } from "definitions";

import { storeRoomPlanInMem } from "RoomPlanner/StoreRoomInMem";
import { getRoomPlan } from "RoomPlanner/getRoomPlan";
import { visualizeSetup } from "RoomPlanner/visualizeSetup";
import { runOverLords } from "Overlords/OverSeer";
import { DirectiveMain } from "Directives/DirectiveMain";

const roleColony: RoomRole = {
    run: function(room) {
        // let CM = getRoomPlan(room)
        // visualizeSetup(CM, room.name)

        for(let flag of room.find(FIND_FLAGS)){
            console.log(flag.name)
        }

        DirectiveMain(room)
        runOverLords(room)
    }
};


export default roleColony