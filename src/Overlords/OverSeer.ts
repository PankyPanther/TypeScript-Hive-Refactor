import { OverLord } from "definitions"

import roleBootSrap from "./Situational/roleBootStrap"





interface OverLordLookUp {
    [roleName: string]: OverLord 
}

const OVERLORDS: OverLordLookUp = {
    'BootStrap': roleBootSrap,
}

export function getOverLords(room: Room) {
    const overLordArray = room.memory.OverSeer
    if (!overLordArray?.length) {
        throw new Error(`There is no OverLord defined for room: ${room}`)
    }

    return overLordArray
}

export function runOverLords(room: Room) {
    const Overlords = getOverLords(room)
    for (let overLord of Overlords){
        OVERLORDS[overLord].run(room)
    }
}