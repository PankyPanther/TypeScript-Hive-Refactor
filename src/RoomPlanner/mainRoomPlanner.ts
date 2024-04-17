import { buildRapidFillCluster } from "./STRCUTURE_PLANNER/stamps/rapidFillCluster";
import { buildAnchor } from "./STRCUTURE_PLANNER/stamps/anchor";
import { buildLabs } from "./STRCUTURE_PLANNER/stamps/labs";
import { placeRoadsToSources } from "./STRCUTURE_PLANNER/placeStructures/placeRoadsToSources";
import { placeRoadsAroundStructs } from "./STRCUTURE_PLANNER/placeStructures/placeRoadsAroundStructs";
import { placeExtensions } from "./STRCUTURE_PLANNER/placeStructures/placeExtensions";

import { getEmbededStructure } from "./STRCUTURE_PLANNER/structureRCLCalc";
import { placeTowers } from "./STRCUTURE_PLANNER/placeStructures/placeTowers";
import { placeObserver } from "./STRCUTURE_PLANNER/placeStructures/placeObserver";
import { placeRoadsToController } from "./STRCUTURE_PLANNER/placeStructures/placeRoadsToController";
import { createSourceOutpost } from "./STRCUTURE_PLANNER/placeStructures/createSoruceOutpost";



interface StructureIndex {
    Spawn: number,
    Extension: number,
    Road: number,
    Wall: number,
    Rampart: number,
    Link: number,
    Storage: number,
    Tower: number,
    Observer: number,
    PowerSpawn: number,
    Extractor: number,
    Lab: number,
    Terminal: number,
    Container: number,
    Nuke: number,
    Factory: number,
    InvaderCore: number,
    PowerBank: number,
    Portal: number,
    KeeperLair: number
}


const structureIndex: StructureIndex = {
    Spawn: 1,
    Extension: 2,
    Road: 3,
    Wall: 4,
    Rampart: 5,
    Link: 6,
    Storage: 7,
    Tower: 8,
    Observer: 9,
    PowerSpawn: 10,
    Extractor: 11,
    Lab: 12,
    Terminal: 13,
    Container: 14,
    Nuke: 15,
    Factory: 16,
    InvaderCore: 17,
    PowerBank: 18,
    Portal: 19,
    KeeperLair: 20
};

export function mainRoomPlanner(room: Room): CostMatrix{
    let roomMatrix = new PathFinder.CostMatrix()
    let roomPosition

    let spawn = room.find(FIND_MY_SPAWNS)[0]

    if(spawn){
        roomPosition = new RoomPosition(spawn.pos.x, spawn.pos.y, room.name)
    } else {
        roomPosition = new RoomPosition(25, 25, room.name)
    }


    roomMatrix.set(roomPosition.x, roomPosition.y, 1)


    buildAnchor(roomMatrix, roomPosition)
    buildRapidFillCluster(roomMatrix, roomPosition)
    buildLabs(roomMatrix, roomPosition)

    placeTowers(roomMatrix, roomPosition)
    placeRoadsAroundStructs(roomMatrix, roomPosition)
    placeTowers(roomMatrix, roomPosition)
    placeObserver(roomMatrix, roomPosition)

    let extension = 0
    while (true){
        for (let y = 0; y < 50; ++y) {
            for (let x = 0; x < 50; ++x) {
                if (getEmbededStructure(roomMatrix.get(x,y)) == 2){
                    extension ++ 
                }
            }
        }
        placeRoadsAroundStructs(roomMatrix, roomPosition)
        placeExtensions(roomMatrix, roomPosition, extension)
        if (extension >= 60){
            break
        } else {
            extension = 0
        }
    }

    placeRoadsToSources(roomMatrix, roomPosition)
    createSourceOutpost(roomMatrix, roomPosition)
    placeRoadsToController(roomMatrix, roomPosition)

    return roomMatrix
}