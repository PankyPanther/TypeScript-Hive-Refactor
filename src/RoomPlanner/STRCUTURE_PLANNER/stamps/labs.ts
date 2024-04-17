import { distanceTransformRadial } from "RoomPlanner/STRCUTURE_PLANNER/distanceTransformRadial";
import { distanceTransform } from "RoomPlanner/STRCUTURE_PLANNER/distanceTransform";
import { validStructurePos } from "RoomPlanner/STRCUTURE_PLANNER/validStructurePos";

import { embedRCLandStructure } from "RoomPlanner/STRCUTURE_PLANNER/structureRCLCalc";

export function labs(roomPosition: RoomPosition, roomMatrix: CostMatrix){
    roomMatrix.set(roomPosition.x, roomPosition.y, embedRCLandStructure(6, 3))
    roomMatrix.set(roomPosition.x-1, roomPosition.y+1, embedRCLandStructure(6, 3))
    roomMatrix.set(roomPosition.x-2, roomPosition.y+2, embedRCLandStructure(6, 3) )
    roomMatrix.set(roomPosition.x+1, roomPosition.y-1, embedRCLandStructure(6, 3))

    roomMatrix.set(roomPosition.x, roomPosition.y-1, embedRCLandStructure(6, 12))
    roomMatrix.set(roomPosition.x-1, roomPosition.y, embedRCLandStructure(6, 12))
    roomMatrix.set(roomPosition.x-1, roomPosition.y-1, embedRCLandStructure(6, 12))
    roomMatrix.set(roomPosition.x-2, roomPosition.y, embedRCLandStructure(7, 12))
    roomMatrix.set(roomPosition.x-2, roomPosition.y+1, embedRCLandStructure(7, 12))

    roomMatrix.set(roomPosition.x+1, roomPosition.y, embedRCLandStructure(7, 12))
    roomMatrix.set(roomPosition.x, roomPosition.y+1, embedRCLandStructure(8, 12))
    roomMatrix.set(roomPosition.x+1, roomPosition.y+1, embedRCLandStructure(8, 12))
    roomMatrix.set(roomPosition.x, roomPosition.y+2, embedRCLandStructure(8, 12))
    roomMatrix.set(roomPosition.x-1, roomPosition.y+2, embedRCLandStructure(8, 12))
}

export function buildLabs(roomMatrix: CostMatrix, roomPosition: RoomPosition){
    let pos = validStructurePos(distanceTransform(roomPosition.roomName, roomMatrix), distanceTransformRadial(roomPosition), 
                roomPosition.roomName, 3, roomMatrix);

    if (pos){
        labs(pos, roomMatrix)
    }
}