import { distanceTransformRadial } from "RoomPlanner/distanceTransformRadial";
import { distanceTransform } from "RoomPlanner/distanceTransform";
import { validStructurePos } from "RoomPlanner/validStructurePos";

import { embedRCLandStructure } from "RoomPlanner/structureRCLCalc";

function rapidFillCluster(roomPosition: RoomPosition, roomMatrix: CostMatrix, RCL: number){
    // radius 0
    roomMatrix.set(roomPosition.x, roomPosition.y, 6)

    //radius 1
    roomMatrix.set(roomPosition.x-1, roomPosition.y, embedRCLandStructure(RCL, 2))
    roomMatrix.set(roomPosition.x+1, roomPosition.y, embedRCLandStructure(RCL, 2))
    roomMatrix.set(roomPosition.x, roomPosition.y-1, embedRCLandStructure(RCL, 2))
    roomMatrix.set(roomPosition.x, roomPosition.y+1, embedRCLandStructure(RCL, 2))
    roomMatrix.set(roomPosition.x-1, roomPosition.y-1, embedRCLandStructure(RCL, 3))
    roomMatrix.set(roomPosition.x+1, roomPosition.y+1, embedRCLandStructure(RCL, 3))
    roomMatrix.set(roomPosition.x-1, roomPosition.y+1, embedRCLandStructure(RCL, 3))
    roomMatrix.set(roomPosition.x+1, roomPosition.y-1, embedRCLandStructure(RCL, 3))
  
    // radius 2
    roomMatrix.set(roomPosition.x-2, roomPosition.y, embedRCLandStructure(RCL, 14))
    roomMatrix.set(roomPosition.x+2, roomPosition.y, embedRCLandStructure(RCL, 14))

    roomMatrix.set(roomPosition.x, roomPosition.y-2, embedRCLandStructure(RCL, 1))
    roomMatrix.set(roomPosition.x, roomPosition.y+2, embedRCLandStructure(RCL, 1))


    roomMatrix.set(roomPosition.x-2, roomPosition.y-2, embedRCLandStructure(RCL, 2))
    roomMatrix.set(roomPosition.x-2, roomPosition.y-1, embedRCLandStructure(RCL, 2))
    roomMatrix.set(roomPosition.x-1, roomPosition.y-2, embedRCLandStructure(RCL, 2))

    roomMatrix.set(roomPosition.x+1, roomPosition.y-2, embedRCLandStructure(RCL, 2))
    roomMatrix.set(roomPosition.x+2, roomPosition.y-2, embedRCLandStructure(RCL, 2))
    roomMatrix.set(roomPosition.x+2, roomPosition.y-1, embedRCLandStructure(RCL, 2))

    roomMatrix.set(roomPosition.x+2, roomPosition.y+1, embedRCLandStructure(RCL, 2))
    roomMatrix.set(roomPosition.x+2, roomPosition.y+2, embedRCLandStructure(RCL, 2))
    roomMatrix.set(roomPosition.x+1, roomPosition.y+2, embedRCLandStructure(RCL, 2))

    roomMatrix.set(roomPosition.x-1, roomPosition.y+2, embedRCLandStructure(RCL, 2))
    roomMatrix.set(roomPosition.x-2, roomPosition.y+2, embedRCLandStructure(RCL, 2))
    roomMatrix.set(roomPosition.x-2, roomPosition.y+1, embedRCLandStructure(RCL, 2))
}

export function buildRapidFillCluster(roomMatrix: CostMatrix, roomPosition: RoomPosition, RCL: number){
    let pos = validStructurePos(distanceTransform(roomPosition.roomName, roomMatrix), distanceTransformRadial(roomPosition), 
                roomPosition.roomName, 3.5, roomMatrix);

    if (pos){
        rapidFillCluster(pos, roomMatrix, RCL)
    }
}