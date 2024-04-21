declare global {
    interface RoomMemory {
        roomPlan?: number[]
        role: string
        lastEntered: number
        OverLord?: [string]
        overLordData?: {[overLordName: string]: overLordCreepJob}
    }
}

declare global {
    interface CreepMemory {
        role: string
        overLord: string
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
    name: string
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

interface overLordCreepJob {
    [creepJob: string]: overLordCreepAmount
}

interface overLordCreepAmount {
    targetAmount: number
}

export const WhiteList: string[] = ["BobGuo"];

