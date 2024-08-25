declare global {
    export interface RoomMemory {
        Sources: roomOBJData[]
        Minerals: roomOBJData[] 
        Controller: roomOBJData[] 
    }
}


export interface roomOBJData {
    Id: string
    x: number
    y: number
    roomName: string
}