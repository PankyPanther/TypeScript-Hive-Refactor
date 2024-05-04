import { findClosestRoomByPath, findRoomsWithinRadius } from "./roomScouting";

export function chooseRemote(inputRoom: string): string | null{
    let room = findClosestRoomByPath(inputRoom, findRoomsWithinRadius(inputRoom, 1))
    console.log('Chosen remote: ', room)
    return room
}

export function createRemoteRoom(room: Room){
    let remoteRoomName = chooseRemote(room.name)

    if (remoteRoomName){
        let RemoteRoom = Memory.rooms[remoteRoomName]

        RemoteRoom.role = 'Remote'
        RemoteRoom.parentRoom = room.name
    }
}