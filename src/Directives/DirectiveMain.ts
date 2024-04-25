import { getRoomPlan } from "RoomPlanner/getRoomPlan";
import { placeConstructionSites } from "RoomPlanner/STRCUTURE_PLANNER/placeConstructionSites";

export function DirectiveMain(room: Room): void {
    if (Game.time % 1000 == 0){
        placeConstructionSites(room, room.controller!.level, getRoomPlan(room))
    }

    if (room.controller?.level != room.memory.currentRCL){
        placeConstructionSites(room, room.controller!.level, getRoomPlan(room))
        room.memory.currentRCL++
    }

    if (room.find(FIND_HOSTILE_CREEPS || FIND_HOSTILE_POWER_CREEPS).length){
        
    }
}