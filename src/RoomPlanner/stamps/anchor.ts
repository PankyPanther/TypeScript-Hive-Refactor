import { distanceTransformRadial } from "RoomPlanner/distanceTransformRadial";
import { distanceTransform } from "RoomPlanner/distanceTransform";
import { validStructurePos } from "RoomPlanner/validStructurePos";

import { embedRCLandStructure } from "RoomPlanner/structureRCLCalc";


export function anchor(spawnPosition: RoomPosition, roomMatrix: CostMatrix, RCL: number){
    roomMatrix.set(spawnPosition.x, spawnPosition.y+1, embedRCLandStructure(RCL, 7))
    roomMatrix.set(spawnPosition.x+1, spawnPosition.y+2, embedRCLandStructure(RCL, 13))
    roomMatrix.set(spawnPosition.x, spawnPosition.y+2, embedRCLandStructure(RCL, 16))

    roomMatrix.set(spawnPosition.x+1, spawnPosition.y, embedRCLandStructure(RCL, 15))
    roomMatrix.set(spawnPosition.x+2, spawnPosition.y, embedRCLandStructure(RCL, 10))
    roomMatrix.set(spawnPosition.x+2, spawnPosition.y+1, embedRCLandStructure(RCL, 6))
}

export function buildAnchor(roomMatrix: CostMatrix, roomPosition: RoomPosition, RCL: number){
    anchor(roomPosition, roomMatrix, RCL)
}