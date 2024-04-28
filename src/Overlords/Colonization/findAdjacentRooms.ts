
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
