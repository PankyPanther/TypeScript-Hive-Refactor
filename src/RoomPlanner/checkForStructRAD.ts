import { getEmbededStructure } from "./structureRCLCalc";

export function checkRadiusAround(pos: RoomPosition, radius: number, roomMatrix: CostMatrix, bannedStruct?: number, bannedStruct2?: number): number {
    let structCount = 0;
    for (let dx = -radius; dx <= radius; dx++) {
        for (let dy = -radius; dy <= radius; dy++) {
            // Skip the tile itself
            if (dx === 0 && dy === 0) continue;

            // Calculate the position of the adjacent tile
            const adjacentX = pos.x + dx;
            const adjacentY = pos.y + dy;

            // Check if the position is within the room bounds
            if (adjacentX >= 0 && adjacentX < 50 && adjacentY >= 0 && adjacentY < 50) {
                let num = getEmbededStructure(roomMatrix.get(adjacentX, adjacentY))
                if (bannedStruct2){
                    if (num != 0 && num != bannedStruct && num != bannedStruct2){
                        structCount++
                    }
                }
                else if (bannedStruct){
                    if (num != 0 && num != bannedStruct){
                        structCount++
                    }
                } else {
                    if (num != 0){
                        structCount++
                    }
                }
            }
        }
    }

    return structCount
}