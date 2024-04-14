import { distanceTransformRadial } from "RoomPlanner/distanceTransformRadial";
import { distanceTransform } from "RoomPlanner/distanceTransform";
import { validStructurePos } from "RoomPlanner/validStructurePos";

import { embedRCLandStructure } from "RoomPlanner/structureRCLCalc";

export function labs(roomPosition: RoomPosition, roomMatrix: CostMatrix, RCL: number){
    roomMatrix.set(roomPosition.x, roomPosition.y, embedRCLandStructure(RCL, 3))
    roomMatrix.set(roomPosition.x-1, roomPosition.y+1, embedRCLandStructure(RCL, 3))
    roomMatrix.set(roomPosition.x-2, roomPosition.y+2, embedRCLandStructure(RCL, 3) )
    roomMatrix.set(roomPosition.x+1, roomPosition.y-1, embedRCLandStructure(RCL, 3))

    roomMatrix.set(roomPosition.x, roomPosition.y-1, embedRCLandStructure(RCL, 12))
    roomMatrix.set(roomPosition.x-1, roomPosition.y, embedRCLandStructure(RCL, 12))
    roomMatrix.set(roomPosition.x-1, roomPosition.y-1, embedRCLandStructure(RCL, 12))
    roomMatrix.set(roomPosition.x-2, roomPosition.y, embedRCLandStructure(RCL, 12))
    roomMatrix.set(roomPosition.x-2, roomPosition.y+1, embedRCLandStructure(RCL, 12))

    roomMatrix.set(roomPosition.x+1, roomPosition.y, embedRCLandStructure(RCL, 12))
    roomMatrix.set(roomPosition.x, roomPosition.y+1, embedRCLandStructure(RCL, 12))
    roomMatrix.set(roomPosition.x+1, roomPosition.y+1, embedRCLandStructure(RCL, 12))
    roomMatrix.set(roomPosition.x, roomPosition.y+2, embedRCLandStructure(RCL, 12))
    roomMatrix.set(roomPosition.x-1, roomPosition.y+2, embedRCLandStructure(RCL, 12))
}

export function buildLabs(roomMatrix: CostMatrix, roomPosition: RoomPosition, RCL: number){
    let pos = validStructurePos(distanceTransform(roomPosition.roomName, roomMatrix), distanceTransformRadial(roomPosition), 
                roomPosition.roomName, 2.5, roomMatrix);

    if (pos){
        labs(pos, roomMatrix, RCL)
    }
}