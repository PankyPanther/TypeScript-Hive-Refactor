import { distanceTransformRadial } from "RoomPlanner/STRCUTURE_PLANNER/distanceTransformRadial";
import { distanceTransform } from "RoomPlanner/STRCUTURE_PLANNER/distanceTransform";
import { validStructurePos } from "RoomPlanner/STRCUTURE_PLANNER/validStructurePos";

import { embedRCLandStructure } from "RoomPlanner/STRCUTURE_PLANNER/structureRCLCalc";

function rapidFillCluster(roomPosition: RoomPosition, roomMatrix: CostMatrix){
    // radius 0
    roomMatrix.set(roomPosition.x, roomPosition.y, embedRCLandStructure(5, 6))

    //radius 1
    roomMatrix.set(roomPosition.x-1, roomPosition.y, embedRCLandStructure(2, 2))
    roomMatrix.set(roomPosition.x+1, roomPosition.y, embedRCLandStructure(2, 2))
    roomMatrix.set(roomPosition.x, roomPosition.y-1, embedRCLandStructure(2, 2))
    roomMatrix.set(roomPosition.x, roomPosition.y+1, embedRCLandStructure(2, 2))
    roomMatrix.set(roomPosition.x-1, roomPosition.y-1, embedRCLandStructure(3, 3))
    roomMatrix.set(roomPosition.x+1, roomPosition.y+1, embedRCLandStructure(3, 3))
    roomMatrix.set(roomPosition.x-1, roomPosition.y+1, embedRCLandStructure(3, 3))
    roomMatrix.set(roomPosition.x+1, roomPosition.y-1, embedRCLandStructure(3, 3))
  
    // radius 2
    roomMatrix.set(roomPosition.x-2, roomPosition.y, embedRCLandStructure(5, 14))
    roomMatrix.set(roomPosition.x+2, roomPosition.y, embedRCLandStructure(5, 14))

    roomMatrix.set(roomPosition.x, roomPosition.y-2, embedRCLandStructure(7, 1))
    roomMatrix.set(roomPosition.x, roomPosition.y+2, embedRCLandStructure(8, 1))


    roomMatrix.set(roomPosition.x-2, roomPosition.y-2, embedRCLandStructure(2, 2))
    roomMatrix.set(roomPosition.x-2, roomPosition.y-1, embedRCLandStructure(3, 2))
    roomMatrix.set(roomPosition.x-1, roomPosition.y-2, embedRCLandStructure(3, 2))

    roomMatrix.set(roomPosition.x+1, roomPosition.y-2, embedRCLandStructure(3, 2))
    roomMatrix.set(roomPosition.x+2, roomPosition.y-2, embedRCLandStructure(3, 2))
    roomMatrix.set(roomPosition.x+2, roomPosition.y-1, embedRCLandStructure(3, 2))

    roomMatrix.set(roomPosition.x+2, roomPosition.y+1, embedRCLandStructure(4, 2))
    roomMatrix.set(roomPosition.x+2, roomPosition.y+2, embedRCLandStructure(4, 2))
    roomMatrix.set(roomPosition.x+1, roomPosition.y+2, embedRCLandStructure(4, 2))

    roomMatrix.set(roomPosition.x-1, roomPosition.y+2, embedRCLandStructure(4, 2))
    roomMatrix.set(roomPosition.x-2, roomPosition.y+2, embedRCLandStructure(4, 2))
    roomMatrix.set(roomPosition.x-2, roomPosition.y+1, embedRCLandStructure(4, 2))
}

export function buildRapidFillCluster(roomMatrix: CostMatrix, roomPosition: RoomPosition){
    let pos = validStructurePos(distanceTransform(roomPosition.roomName, roomMatrix), distanceTransformRadial(roomPosition), 
                roomPosition.roomName, 3.5, roomMatrix);

    if (pos){
        rapidFillCluster(pos, roomMatrix)
    }
}