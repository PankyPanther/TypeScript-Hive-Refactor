import { getEmbededRCl } from "./structureRCLCalc"
import { getEmbededStructure } from "./structureRCLCalc";

const structureIndex = {
    1: STRUCTURE_SPAWN,
    2: STRUCTURE_EXTENSION,
    3: STRUCTURE_ROAD,
    4: STRUCTURE_WALL,
    5: STRUCTURE_RAMPART,
    6: STRUCTURE_LINK,
    7: STRUCTURE_STORAGE,
    8: STRUCTURE_TOWER,
    9: STRUCTURE_OBSERVER,
    10: STRUCTURE_POWER_SPAWN,
    11: STRUCTURE_EXTRACTOR,
    12: STRUCTURE_LAB,
    13: STRUCTURE_TERMINAL,
    14: STRUCTURE_CONTAINER,
    15: STRUCTURE_NUKER,
    16: STRUCTURE_FACTORY,
    17: null,
    18: null,
    19: null,
    20: null
};

export function placeConstructionSites(room: Room, RCL: number, roomMatrix: CostMatrix){
    let vis = new RoomVisual(room.name);
    for (let y = 0; y < 50; ++y) {
        for (let x = 0; x < 50; ++x) {
            if (getEmbededRCl(roomMatrix.get(x, y)) <= RCL){
                let struct = structureIndex[getEmbededStructure(roomMatrix.get(x,y)) as keyof typeof structureIndex]
                if (struct){
                    vis.circle(x, y, {fill: '#ffffff'})
                    console.log(room.createConstructionSite(x, y, struct), struct)
                    room.createConstructionSite(x, y, struct)
                }
            }
        }
    }
}