export const controllerSign = 'You are not safe from the trees'

declare global {
    interface RoomMemory {
        roomPlan?: number[]
        currentRCL: number
        role: string
        lastEntered: number
        name: string
        OverLord?: [string]
        overLordData?: {[overLordName: string]: overLordCreepJob}
        miningSites?: MiningSites
        status?: string
        sourceCount?: number
        parentRoom?: string
    }
}

declare global {
    interface CreepMemory {
        role: string
        overLord: string
        workRoom: Room
        homeRoom: string
        colony: string
        tasks: string[]
        target: string 
    }
}

export interface RoomRole {
    run(room: Room): void
}

export interface OverLord {
    name: string
    init(room: Room): void
    run(room: Room): void
}

export interface Task {
    run(room: Room, target: string, creep: Creep): void
    getTarget?(room: Room, creep?: Creep): string | undefined
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



export interface HiveClusters {
    name: string
    init(room: Room): void
    isOpenSource(room: Room): boolean
    getOpenSource(room: Room): string | undefined
}

export interface MiningSites {
    [siteName: string]: MiningSite;
}

export interface MiningSite {
    creepName: string;
}

export const WhiteList: string[] = ["BobGuo"];







