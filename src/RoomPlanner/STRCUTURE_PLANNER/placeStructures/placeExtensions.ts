import { checkRadiusAround } from "../checkForStructRAD";
import { embedRCLandStructure } from "../structureRCLCalc";

export function placeExtensions(roomMatrix: CostMatrix, roomPosition: RoomPosition, amount: number){
    let count = amount
    for (let y = 0; y < 50; ++y) {
        for (let x = 0; x < 50; ++x) {
            if(checkRadiusAround(new RoomPosition(x, y, roomPosition.roomName), 8, roomMatrix, 3, 2) >= 1 && 
                checkRadiusAround(new RoomPosition(x, y, roomPosition.roomName), 1, roomMatrix, 2) >= 2 && 
                roomMatrix.get(x,y) === 0 && Game.map.getRoomTerrain(roomPosition.roomName).get(x, y) != TERRAIN_MASK_WALL &&
                count < 60
                ) 
            {
                roomMatrix.set(x,y, embedRCLandStructure(5, 2))
                count++
            }
        }
    }
}