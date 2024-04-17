import { visualizeSetup } from "./visualizeSetup";

import { buildRapidFillCluster } from "./stamps/rapidFillCluster";
import { buildAnchor } from "./stamps/anchor";
import { buildLabs } from "./stamps/labs";
import { placeRoadsToSources } from "./placeStructures/placeRoadsToSources";
import { placeRoadsAroundStructs } from "./placeStructures/placeRoadsAroundStructs";
import { placeExtensions } from "./placeStructures/placeExtensions";

import { getEmbededRCl, getEmbededStructure } from "./structureRCLCalc";
import { placeTowers } from "./placeStructures/placeTowers";
import { placeObserver } from "./placeStructures/placeObserver";
import { placeRoadsToController } from "./placeStructures/placeRoadsToController";
import { createSourceOutpost } from "./placeStructures/createSoruceOutpost";
import { placeConstructionSites } from "./placeConstructionSites";



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

export function mainRoom(){
    let roomMatrix = new PathFinder.CostMatrix()
    let roomPosition = new RoomPosition(42, 6, 'sim')
    let RCL = 1

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
        placeExtensions(roomMatrix, roomPosition, RCL, extension)
        if (extension >= 60){
            break
        } else {
            extension = 0
        }
    }

    placeRoadsToSources(roomMatrix, roomPosition)
    createSourceOutpost(roomMatrix, roomPosition)
    placeRoadsToController(roomMatrix, roomPosition)
    console.log(getEmbededStructure(roomMatrix.get(42, 15)), getEmbededRCl(roomMatrix.get(42, 15)))
    visualizeSetup(roomMatrix, 'sim')

    console.log(getEmbededRCl(roomMatrix.get(44,6)))

    placeConstructionSites(Game.rooms[roomPosition.roomName], 8, roomMatrix)
}