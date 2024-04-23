import { distanceTransformRadial } from "RoomPlanner/STRCUTURE_PLANNER/distanceTransformRadial";
import { distanceTransform } from "RoomPlanner/STRCUTURE_PLANNER/distanceTransform";
import { validStructurePos } from "RoomPlanner/STRCUTURE_PLANNER/validStructurePos";

import { embedRCLandStructure } from "RoomPlanner/STRCUTURE_PLANNER/structureRCLCalc";
import { link } from "fs";

export function createSourceOutpost(roomMatrix: CostMatrix, roomPosition: RoomPosition){
    for (let source of Game.rooms[roomPosition.roomName].find(FIND_SOURCES)){
        let containerPos = validStructurePos(distanceTransform(roomPosition.roomName, roomMatrix), distanceTransformRadial(source.pos), 
            roomPosition.roomName, 1, roomMatrix);
    
        let linkPos
        if (containerPos){
            roomMatrix.set(containerPos.x, containerPos.y, embedRCLandStructure(3, 14))
            Game.rooms[roomPosition.roomName].createFlag(containerPos.x, containerPos.y, 'MiningSite-' + source.id, COLOR_GREY)
            linkPos = validStructurePos(distanceTransform(roomPosition.roomName, roomMatrix), distanceTransformRadial(containerPos), 
                roomPosition.roomName, 1, roomMatrix);
        }

        if(linkPos){    
            roomMatrix.set(linkPos.x,linkPos.y, embedRCLandStructure(6, 6))
        }

    }
}