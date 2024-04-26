import { RoomRole } from "definitions";

import { storeRoomPlanInMem } from "RoomPlanner/StoreRoomInMem";
import { getRoomPlan } from "RoomPlanner/getRoomPlan";
import { visualizeSetup } from "RoomPlanner/visualizeSetup";
import { runOverLords } from "Overlords/OverSeer";
import { DirectiveMain } from "Directives/DirectiveMain";
import { roomEconomyScorer } from "Logistics/roomEconomyScore";
import { getBody } from "Utils/getBody";

const roleColony: RoomRole = {
    run: function(room) {
        // let CM = getRoomPlan(room)
        // visualizeSetup(CM, room.name)
        roomEconomyScorer(room)

        DirectiveMain(room)
        runOverLords(room)
    }
};


export default roleColony