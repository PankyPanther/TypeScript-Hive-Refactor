import { mainRoomPlanner } from "./mainRoomPlanner"

export function storeRoomPlanInMem(room: Room): void {
    let serialize = mainRoomPlanner(room).serialize()

    if (!Memory.rooms[room.name].roomPlan){
        Memory.rooms[room.name].roomPlan = []
    }
    Memory.rooms[room.name].roomPlan = serialize
}