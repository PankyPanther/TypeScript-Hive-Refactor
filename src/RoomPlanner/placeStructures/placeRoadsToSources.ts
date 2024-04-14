import { getEmbededStructure } from "../structureRCLCalc";
import { embedRCLandStructure } from "../structureRCLCalc";

export function placeRoadsToSources(roomMatrix: CostMatrix, roomPosition: RoomPosition, RCL: number){
    for (let source of Game.rooms[roomPosition.roomName].find(FIND_SOURCES)) {
        let path = roomPosition.findPathTo(source.pos, {
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
        path.pop()
        for (let step of path) {
            roomMatrix.set(step.x, step.y, embedRCLandStructure(RCL, 3))
        }
    }
}