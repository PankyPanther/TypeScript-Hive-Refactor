import { roomOBJData, RoomRoles } from "definitions"

export class RoomManager {
    initRoom(room: Room, role: RoomRoles){
        if (!Memory.rooms){
            Memory.rooms = {}
        }

        Memory.rooms[room.name] = {
            role: role,
            Sources: [],
            Minerals: [],
            Controller: [],
            Spawns: []
        }
        
        const sources: Source[] = room.find(FIND_SOURCES)
        const minerals: Mineral[] = room.find(FIND_MINERALS)
        const spawns: StructureSpawn[] = room.find(FIND_MY_SPAWNS)

        if (sources.length){
            for (let source of sources){
                const sourceData: roomOBJData = {
                    Id: source.id,
                    coord: {
                        x: source.pos.x,
                        y: source.pos.y
                    },
                    roomName: source.room.name
                }
                room.memory.Sources.push(sourceData)
            }
        }

        if (minerals.length){
            for (let mineral of minerals){
                const mineralData: roomOBJData = {
                    Id: mineral.id,
                    coord: {
                        x: mineral.pos.x,
                        y: mineral.pos.y
                    },
                    roomName: mineral.room!.name
                }
                room.memory.Minerals.push(mineralData) 
            }
        }

        if (room.controller){
            const controllerData: roomOBJData = {
                Id: room.controller.id,
                coord: {
                    x: room.controller.pos.x,
                    y: room.controller.pos.y
                },
                roomName: room.controller.room.name
            }
            room.memory.Controller.push(controllerData) 
        }

        if (spawns.length){
            for (let spawn of spawns){
                const spawnData: roomOBJData = {
                    Id: spawn.id,
                    coord: {
                        x: spawn.pos.x,
                        y: spawn.pos.y
                    },
                    roomName: spawn.room.name
                }
                room.memory.Spawns.push(spawnData) 
            }
        }
    }
}