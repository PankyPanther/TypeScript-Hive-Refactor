import { findClosestRoomByPath, findRoomsWithinRadius } from "./selectingRooms"

export function chooseRemote(inputRoom: string): string | null {
    let rooms = findRoomsWithinRadius(inputRoom, 1)

    let remoteRooms: string[] = []
    for (let room of rooms) {
        if (!Memory.rooms[room].status){
            if (Memory.rooms[room].sourceCount){
                remoteRooms.push(room)
            }
        }
    }

    let selectedRemote = findClosestRoomByPath(inputRoom, remoteRooms)

    if (!selectedRemote){
        return null
    }

    console.log(selectedRemote, Memory.rooms[selectedRemote].sourceCount, Memory.rooms[selectedRemote].status)
    return selectedRemote
}

export function createRemoteRoom(room: Room){
    let remoteRoomName = chooseRemote(room.name)

    if (remoteRoomName){
        let RemoteRoom = Memory.rooms[remoteRoomName]

        RemoteRoom.role = 'Remote'
        RemoteRoom.parentRoom = room.name
    }
}