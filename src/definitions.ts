declare global {
    interface RoomMemory {
        roomPlan?: number[]
        role: string
        lastEntered: number
        OverSeer?: [string]
    }
}

declare global {
    interface CreepMemory {
        role: string
        overSeer: overSeer 
        workRoom: Room
        homeRoom: string
        tasks: string[]
        target: string | undefined
    }
}

export interface RoomRole {
    run(room: Room): void
}

export interface OverLord {
    run(room: Room): void
}

export interface Task {
    run(room: Room, target: string, creep: Creep): void
    getTarget?(room: Room): string | undefined
    name: string
}

export interface TaskLookup {
    [taskName: string]: Task
}

interface overSeer {
    overLords: string[]
    overLordData: {[overLordName: string]: number}
}



export const WhiteList: string[] = ["BobGuo"];

