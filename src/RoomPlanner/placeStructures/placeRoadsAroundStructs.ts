import { checkRadiusAround } from "../checkForStructRAD";
import { embedRCLandStructure } from "../structureRCLCalc";

export function placeRoadsAroundStructs(roomMatrix: CostMatrix, roomPosition: RoomPosition, RCL: number){
    for (let y = 0; y < 50; ++y) {
        for (let x = 0; x < 50; ++x) {
            if(checkRadiusAround(new RoomPosition(x, y, roomPosition.roomName), 1, roomMatrix, 3) >= 2 && 
                roomMatrix.get(x,y) === 0 && Game.map.getRoomTerrain(roomPosition.roomName).get(x, y) != TERRAIN_MASK_WALL) {
                roomMatrix.set(x,y, embedRCLandStructure(RCL, 3))
            }
        }
    }
}