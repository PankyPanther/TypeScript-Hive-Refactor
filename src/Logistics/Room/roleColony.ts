import { RoomRole } from "definitions";

import { getRoomPlan } from "RoomPlanner/getRoomPlan";
import { visualizeSetup } from "RoomPlanner/visualizeSetup";
import { runOverLords } from "Overlords/OverSeer";
import { DirectiveMain } from "Directives/DirectiveMain";
import { roomEconomyScorer } from "Logistics/roomEconomyScore";
import { chooseRemote } from "Overlords/Colonization/selectingRemote";


const roleColony: RoomRole = {
    run: function(room) {
        // let CM = getRoomPlan(room)
        // visualizeSetup(CM, room.name)
        chooseRemote(room.name)

        roomEconomyScorer(room)

        DirectiveMain(room)
        runOverLords(room)
    }
};


export default roleColony