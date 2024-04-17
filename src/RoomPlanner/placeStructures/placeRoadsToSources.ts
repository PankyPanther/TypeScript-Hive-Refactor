import { getEmbededStructure } from "../structureRCLCalc";
import { embedRCLandStructure } from "../structureRCLCalc";

export function placeRoadsToSources(roomMatrix: CostMatrix, roomPosition: RoomPosition){
    for (let source of Game.rooms[roomPosition.roomName].find(FIND_SOURCES)) {
        let path = source.pos.findPathTo(roomPosition, {
            costCallback: function(roomName, costMatrix) {
                for (let y = 0; y < 50; ++y) {
                    for (let x = 0; x < 50; ++x) {
                        
                        if (roomMatrix.get(x,y) != 0){
                            costMatrix.set(x, y, 256)
                        }
                        if (getEmbededStructure(roomMatrix.get(x,y)) == 3 ){
                            costMatrix.set(x, y, 0)
                        }
                    }
                }
            }});
        path.pop()
        path.shift()
        for (let step of path) {
            roomMatrix.set(step.x, step.y, embedRCLandStructure(3, 3))
        }
    }
}