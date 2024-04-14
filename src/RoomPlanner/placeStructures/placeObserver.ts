import { checkRadiusAround } from "../checkForStructRAD";
import { embedRCLandStructure } from "../structureRCLCalc";

export function placeObserver(roomMatrix: CostMatrix, roomPosition: RoomPosition, RCL: number){
    let count = 0
    for (let y = 0; y < 50; ++y) {
        for (let x = 0; x < 50; ++x) {
            if(checkRadiusAround(new RoomPosition(x, y, roomPosition.roomName), 8, roomMatrix, 3, 2) >= 1 && 
                checkRadiusAround(new RoomPosition(x, y, roomPosition.roomName), 1, roomMatrix, 2) >= 2 && 
                roomMatrix.get(x,y) === 0 && Game.map.getRoomTerrain(roomPosition.roomName).get(x, y) != TERRAIN_MASK_WALL &&
                count < 1) 
            {
                roomMatrix.set(x,y, embedRCLandStructure(RCL, 9))
                count++
                break
            }
        }
    }
}