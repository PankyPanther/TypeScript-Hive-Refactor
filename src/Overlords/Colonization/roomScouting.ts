export function findRoomToScout(roomsNames: string[]): string {
    for (let name of roomsNames){
        let roomMemory = Memory.rooms[name]

        if (!roomMemory){
            return name
        }
    }
    return ''
}

