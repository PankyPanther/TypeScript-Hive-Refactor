declare global {
    interface CreepMemory {
          role: string
          workRoom: Room
          homeRoom: any
          sourceID?: Id<Source> | undefined
          target?: any
          path?: any
          previousPos?: any
    }
}

declare global {
    interface Memory {
        matrix: number[]
    }
}

export interface CreepRole {
    getRoleName(): string
    getBody(energyCapacity: number): BodyPartConstant[]
    run(creep: Creep): void
}


export interface RoomRole {
    run(room: Room): void
}


declare global {
    const WhiteList: string[];
}


export const WhiteList: string[] = ["BobGuo"];

