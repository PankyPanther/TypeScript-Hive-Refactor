import { getRoomPlan } from "RoomPlanner/getRoomPlan";
import { placeConstructionSites } from "RoomPlanner/STRCUTURE_PLANNER/placeConstructionSites";

export function DirectiveMain(room: Room): void {
    if (Game.time % 100 == 0){
        placeConstructionSites(room, room.controller!.level, getRoomPlan(room))
    }

    if (room.controller?.level != room.memory.currentRCL){
        // do something
        room.memory.currentRCL++
    }
}