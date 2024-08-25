import { roomOBJData } from "definitions"

export class RoomManager {
    initRoom(room: Room){
        if (!Memory.rooms){
            Memory.rooms = {}
        }

        Memory.rooms[room.name] = {
            Sources: [],
            Minerals: [],
            Controller: []
        }
        this.collectStaticRoomData(room)
    }

    collectStaticRoomData(room: Room){
        const sources: Source[] = room.find(FIND_SOURCES)
        const minerals: Mineral[] = room.find(FIND_MINERALS)

        if (sources.length){
            for (let source of sources){
                const sourceData: roomOBJData = {
                    Id: source.id,
                    x: source.pos.x,
                    y: source.pos.y,
                    roomName: source.room.name
                }
                room.memory.Sources.push(sourceData)
            }
        }

        if (minerals.length){
            for (let mineral of minerals){
                const mineralData: roomOBJData = {
                    Id: mineral.id,
                    x: mineral.pos.x,
                    y: mineral.pos.y,
                    roomName: mineral.room!.name
                }
                room.memory.Minerals.push(mineralData) 
            }
        }

        if (room.controller){
            const controllerData: roomOBJData = {
                Id: room.controller.id,
                x: room.controller.pos.x,
                y: room.controller.pos.y,
                roomName: room.controller.room.name
            }
            room.memory.Controller.push(controllerData) 
        }
    }
}