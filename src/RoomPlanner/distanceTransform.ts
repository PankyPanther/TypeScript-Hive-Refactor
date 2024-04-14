export function distanceTransform(roomName: string, roomMatrix: CostMatrix) {
    let vis = new RoomVisual(roomName);

    let topDownPass = new PathFinder.CostMatrix();
    for (let y = 0; y < 50; ++y) {
        for (let x = 0; x < 50; ++x) {
            if (Game.map.getRoomTerrain(roomName).get(x, y) == TERRAIN_MASK_WALL || Game.rooms[roomName].lookForAt(LOOK_STRUCTURES, x, y).length || roomMatrix.get(x, y) != 0) {
                topDownPass.set(x, y, 0);
            }
            else {
                topDownPass.set(x, y,
                    Math.min(topDownPass.get(x-1, y-1), topDownPass.get(x, y-1),
                        topDownPass.get(x+1, y-1), topDownPass.get(x-1, y)) + 1);
            }
        }
    }

    for (let y = 49; y >= 0; --y) {
        for (let x = 49; x >= 0; --x) {
            let value = Math.min(topDownPass.get(x, y),
                    topDownPass.get(x+1, y+1) + 1, topDownPass.get(x, y+1) + 1,
                    topDownPass.get(x-1, y+1) + 1, topDownPass.get(x+1, y) + 1);
            topDownPass.set(x, y, value);
            // vis.circle(x, y, {radius:value/25});
        }
    }
    
    return topDownPass;
}