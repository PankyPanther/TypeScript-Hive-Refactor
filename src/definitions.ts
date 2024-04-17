
declare global {
    interface RoomMemory {
        roomPlan?: number[]
        role: string
        lastEntered: number
        name?: string
    }
}

export interface RoomRole {
    run(room: Room): void
}








export const WhiteList: string[] = ["BobGuo"];

