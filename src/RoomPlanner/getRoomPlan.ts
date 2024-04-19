import { storeRoomPlanInMem } from "./StoreRoomInMem"

export function getRoomPlan(room: Room): CostMatrix {
    let matrix = Memory.rooms[room.name].roomPlan
    if(!matrix){
        storeRoomPlanInMem(room)
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