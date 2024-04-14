import { distanceTransformRadial } from "RoomPlanner/distanceTransformRadial";
import { distanceTransform } from "RoomPlanner/distanceTransform";
import { validStructurePos } from "RoomPlanner/validStructurePos";

import { embedRCLandStructure } from "RoomPlanner/structureRCLCalc";
import { link } from "fs";

export function createSourceOutpost(roomMatrix: CostMatrix, roomPosition: RoomPosition, RCL: number){
    for (let source of Game.rooms[roomPosition.roomName].find(FIND_SOURCES)){
        let containerPos = validStructurePos(distanceTransform(roomPosition.roomName, roomMatrix), distanceTransformRadial(source.pos), 
            roomPosition.roomName, 1, roomMatrix);
    
        let linkPos
        if (containerPos){
            roomMatrix.set(containerPos.x, containerPos.y, embedRCLandStructure(RCL, 14))
            linkPos = validStructurePos(distanceTransform(roomPosition.roomName, roomMatrix), distanceTransformRadial(containerPos), 
                roomPosition.roomName, 1, roomMatrix);
        }

        if(linkPos){    
            roomMatrix.set(linkPos.x,linkPos.y, embedRCLandStructure(RCL, 6))
        }

    }
}