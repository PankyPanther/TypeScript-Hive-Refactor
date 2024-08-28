import { BodyTypeName } from "Managers/SpawningManager"
import { TaskNames } from "Managers/TaskManager"

declare global {
    interface RoomMemory {
        role: RoomRoles
        Sources: roomOBJData[]
        Minerals: roomOBJData[] 
        Controller: roomOBJData[]
        Spawns: roomOBJData[]
    }

    interface CreepMemory {
        bodyType: BodyTypeName
        tasks: TaskNames[]
        homeRoom: string
        workRoom: string | undefined
        target: string | undefined
    }
}

export type RoomRoles = "Citadel" | "Outland" | "Explored"

export interface Coord {
    x: number
    y: number
}

export interface roomOBJData {
    Id: string
    coord: Coord
    roomName: string
}
