
declare global {
    interface RoomMemory {
        roomPlan?: number[]
        role: string
        lastEntered: number
        OverSeer?: string[]
    }
}

declare global {
    interface CreepMemory {
        role: string
        overLord: string
        workRoom: Room
        homeRoom: string
        tasks: string[]
    }
}

export interface RoomRole {
    run(room: Room): void
}

export interface OverLord {
    run(room: Room): void
}

export interface Task {
    run(room: Room, target: string): void
}

export const WhiteList: string[] = ["BobGuo"];

