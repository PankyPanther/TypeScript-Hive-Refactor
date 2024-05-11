import { RoomRole } from "definitions";
import { runOverLords } from "Overlords/OverSeer";
import { DirectiveMain } from "Directives/DirectiveMain";
import { chooseRemote } from "Overlords/Colonization/selectingRemote";


const roleColony: RoomRole = {
    run: function(room) {
        // let CM = getRoomPlan(room)
        // visualizeSetup(CM, room.name)
        // roomEconomyScorer(room)

        // chooseRemote(room.name)
        DirectiveMain(room)
        runOverLords(room)
    }
};


export default roleColony