import { createSourceOutpost } from "RoomPlanner/STRCUTURE_PLANNER/placeStructures/createSoruceOutpost"

export function outPostPlanner(room: Room): CostMatrix{
    let roomMatrix = new PathFinder.CostMatrix()
    
    createSourceOutpost(roomMatrix, new RoomPosition(25, 25, room.name))

    return roomMatrix
}