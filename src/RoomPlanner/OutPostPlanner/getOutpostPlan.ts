import { storeRoomPlanInMem } from "RoomPlanner/StoreRoomInMem"
import { outPostPlanner } from "./OutpostPlanner"

export function getOutpostRoomplan(room: Room): CostMatrix {
    let matrix = Memory.rooms[room.name].roomPlan
    if(!matrix){
        let serialize = outPostPlanner(room).serialize()

        if (!Memory.rooms[room.name].roomPlan){
            Memory.rooms[room.name].roomPlan = []
        }
        Memory.rooms[room.name].roomPlan = serialize

        console.log('INITIALIZING ROOM PLAN FOR: ' + room.name)
        matrix = Memory.rooms[room.name].roomPlan
        if (matrix){
            return PathFinder.CostMatrix.deserialize(matrix)
        }
    } else {
        return PathFinder.CostMatrix.deserialize(matrix)
    }
    
    return new PathFinder.CostMatrix
}