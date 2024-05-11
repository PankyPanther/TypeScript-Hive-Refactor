export function findClosestRoomByPath(currentRoomName: string, roomsToCheck: string[]): string | null {
    // Get the current room
    let currentRoom = Game.rooms[currentRoomName];

    if (!currentRoom) {
        console.log(`Room ${currentRoomName} not found.`);
        return null;
    }

    // Initialize variables to store the shortest path and the closest room
    let shortestPathLength = Infinity;
    let closestRoom: string | null = null;

    // Iterate through rooms to check
    for (let roomName of roomsToCheck) {
        // Check if the room is the current room
        if (roomName === currentRoomName) continue;

        // Find path between rooms using PathFinder
        let targetRoom = Memory.rooms[roomName];

        // Check if the target room is visible and accessible
        if (!targetRoom) {
            continue;
        }

        // Calculate path between rooms
        let startPos = new RoomPosition(25, 25, currentRoomName);
        let endPos = new RoomPosition(25, 25, roomName);

        let path = PathFinder.search(startPos, endPos);

        // Check if this path is shorter than the previous shortest path
        if (path && path.path.length < shortestPathLength && targetRoom.sourceCount! > 0 && !targetRoom.status && targetRoom.role === 'explored') {
            shortestPathLength = path.path.length;
            closestRoom = roomName;
        }
    }

    // Now closestRoom holds the name of the closest room
    return closestRoom;
}

export function findRoomsWithinRadius(currentRoom: string, radius: number): string[] {
    const rooms: string[] = [];

    const [sectorX, posX, sectorY, posY] = currentRoom.match(/([a-zA-Z]+)(\d+)([a-zA-Z]+)(\d+)/)!.slice(1);

    const currentXInt = parseInt(posX);
    const currentYInt = parseInt(posY);

    for (let x = currentXInt - radius; x <= currentXInt + radius; x++) {
        for (let y = currentYInt - radius; y <= currentYInt + radius; y++) {
            const roomName = `${sectorX}${x}${sectorY}${y}`;

            if (roomName != currentRoom){
                rooms.push(roomName);
            }
        }
    }

    return rooms;
}