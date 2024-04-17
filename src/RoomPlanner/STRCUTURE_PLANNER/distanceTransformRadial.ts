export function distanceTransformRadial(roomPosition: RoomPosition){
    let topDownPass = new PathFinder.CostMatrix();
    for (let y = 0; y < 50; ++y) {
        for (let x = 0; x < 50; ++x) {
            if (x == roomPosition.x && y == roomPosition.y) {
                topDownPass.set(x, y, 0);
            }
            else {
                const newX: number = Math.abs(roomPosition.x - x);
                const newY: number = Math.abs(roomPosition.y - y);
                const value: number = Math.max(newX, newY)
                topDownPass.set(x, y, value);
                // vis.circle(x, y, { radius: value / 50, fill: '#000000' });
            }
        }
    }
    
    return topDownPass;
}