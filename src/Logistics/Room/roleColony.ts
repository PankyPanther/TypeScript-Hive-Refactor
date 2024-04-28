import { RoomRole } from "definitions";

import { storeRoomPlanInMem } from "RoomPlanner/StoreRoomInMem";
import { getRoomPlan } from "RoomPlanner/getRoomPlan";
import { visualizeSetup } from "RoomPlanner/visualizeSetup";
import { runOverLords } from "Overlords/OverSeer";
import { DirectiveMain } from "Directives/DirectiveMain";
import { roomEconomyScorer } from "Logistics/roomEconomyScore";
import { getBody } from "Utils/getBody";
import { findRoomsWithinRadius } from "Overlords/Colonization/findAdjacentRooms";

const roleColony: RoomRole = {
    run: function(room) {
        // let CM = getRoomPlan(room)
        // visualizeSetup(CM, room.name)
        let source = Game.getObjectById('5bbcb0949099fc012e63c625') as Source
        let vis = new RoomVisual(room.name);

        console.log(findRoomsWithinRadius(room.name, 1).length, findRoomsWithinRadius(room.name, 2))

        roomEconomyScorer(room)

        DirectiveMain(room)
        runOverLords(room)
    }
};


export default roleColony