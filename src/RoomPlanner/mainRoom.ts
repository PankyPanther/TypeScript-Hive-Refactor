import { visualizeSetup } from "./visualizeSetup";

import { buildRapidFillCluster } from "./stamps/rapidFillCluster";
import { buildAnchor } from "./stamps/anchor";
import { buildLabs } from "./stamps/labs";




interface RCLBuildings {
    number: [number: Structure[]],
}


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

const Buildings = {
    1: {
        placeContainers() {
            
        }
    },
    2: {
        5: STRUCTURE_EXTENSION,
        placeRoadsToSources(){

        }
    },
    3: {
        5: STRUCTURE_EXTENSION,
        1: STRUCTURE_TOWER,
    },
    4: {
        10: STRUCTURE_EXTENSION,
        1: STRUCTURE_STORAGE,
        placeRampartOnHighPrioBuildings(){

        }
    },
    5: {
        10: STRUCTURE_EXTENSION,
        1: STRUCTURE_TOWER,
        placeLinksOnSources(){

        }
    },
    6: {
        10: STRUCTURE_EXTENSION,
        
    },
    7: {

    },
    8: {

    },
}

export const structureIndex: StructureIndex = {
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
    let roomPosition = new RoomPosition(21, 22, 'sim')
    let RCL = 1

    buildAnchor(roomMatrix, roomPosition, RCL)
    buildRapidFillCluster(roomMatrix, roomPosition, RCL)
    buildLabs(roomMatrix, roomPosition, RCL)


    visualizeSetup(roomMatrix, 'sim')
}