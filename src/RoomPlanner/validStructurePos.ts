export function validStructurePos(distanceTransform: CostMatrix, distanceTransformRadial: CostMatrix, roomName: string, radius: number): RoomPosition | null{
    let vis = new RoomVisual(roomName);
    for (let i = 0; i < 25; i++) {
        for (let y = 0; y < 50; ++y) {
            for (let x = 0; x < 50; ++x) {
                if (distanceTransform.get(x, y) >= radius && Game.map.getRoomTerrain(roomName).get(x, y) != TERRAIN_MASK_WALL && distanceTransformRadial.get(x, y) <= i)
                {
                    vis.circle(x, y, {fill: "#00FFFF"})
                    return new RoomPosition(x, y, roomName)
                }
            }
        }
    }
    return null
}