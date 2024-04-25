import roleBootSrap from "Overlords/Situational/roleBootStrap";
import { getRoomPlan } from "RoomPlanner/getRoomPlan";
import { placeConstructionSites } from "RoomPlanner/STRCUTURE_PLANNER/placeConstructionSites";

export function isInitialize(room: Room): boolean {
    if (!room.memory.role) {
        console.log("Initializeing room data")
        return false
    }
    return true
}

export function initialize(room: Room): void {
    let spawns = room.find(FIND_MY_STRUCTURES, { filter: s => s.structureType === STRUCTURE_SPAWN });
    
    if (spawns.length) {
        roleBootSrap.init(room)
        getRoomPlan(room)
        room.memory.role = 'Colony'

    } else {
        room.memory.role = 'explored'
    }

    room.memory.lastEntered = Game.time
    room.memory.currentRCL = 1
}