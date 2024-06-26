import { distanceTransformRadial } from "RoomPlanner/STRCUTURE_PLANNER/distanceTransformRadial";
import { distanceTransform } from "RoomPlanner/STRCUTURE_PLANNER/distanceTransform";
import { validStructurePos } from "RoomPlanner/STRCUTURE_PLANNER/validStructurePos";

import { embedRCLandStructure } from "RoomPlanner/STRCUTURE_PLANNER/structureRCLCalc";


export function anchor(spawnPosition: RoomPosition, roomMatrix: CostMatrix){
    roomMatrix.set(spawnPosition.x, spawnPosition.y+1, embedRCLandStructure(4, 7))
    roomMatrix.set(spawnPosition.x+1, spawnPosition.y+2, embedRCLandStructure(6, 13))
    roomMatrix.set(spawnPosition.x, spawnPosition.y+2, embedRCLandStructure(7, 16))

    roomMatrix.set(spawnPosition.x+1, spawnPosition.y, embedRCLandStructure(8, 15))
    roomMatrix.set(spawnPosition.x+2, spawnPosition.y, embedRCLandStructure(8, 10))
    roomMatrix.set(spawnPosition.x+2, spawnPosition.y+1, embedRCLandStructure(5, 6))
}

export function buildAnchor(roomMatrix: CostMatrix, roomPosition: RoomPosition){
    anchor(roomPosition, roomMatrix)
}