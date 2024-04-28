import { findClosestRoomByPath, findRoomsWithinRadius } from "./roomScouting";

export function chooseRemote(inputRoom: string): string | null{
    let room = findClosestRoomByPath(inputRoom, findRoomsWithinRadius(inputRoom, 1))
    console.log('Chosen remote: ', room)
    return room
}