import { RoomManager } from "Managers/RoomManager"

declare global {
    interface CreepMemory {
        state: "harvest" | "upgrade"
        tasks: string[] | undefined
    }
}

class Root {
    runTick() {
        if (!Game.creeps['Remy']){
            const spawn = Game.spawns['Spawn1']
            spawn.spawnCreep([WORK, WORK, MOVE, CARRY], 'Remy', {
                memory: {state: 'harvest', tasks: undefined}
            })
        }
        
        for (const creepName in Memory.creeps) {
            if(!Game.creeps[creepName]) {
                delete Memory.creeps[creepName];
            }
        }

        for (let creepName in Game.creeps){
            const creep = Game.creeps[creepName]
            const sources = creep.room.find(FIND_SOURCES)

            const roomManager = new RoomManager()
            roomManager.initRoom(creep.room)
            
            if (creep.store[RESOURCE_ENERGY] === 0){
                creep.say('harvest')
                creep.memory.state = "harvest"
            }

            if (creep.store.getFreeCapacity() === 0){
                creep.say('upgrade')
                creep.memory.state = "upgrade"
            }

            if (creep.memory.state === "harvest") {
                if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE){
                    creep.moveTo(sources[0])
                }
            }

            if (creep.memory.state === "upgrade") {
                if (creep.upgradeController(creep.room.controller!) === ERR_NOT_IN_RANGE){
                    creep.moveTo(creep.room.controller!)
                }
            }
        }
        
    }
}


const root = new Root()
export function loop(): void {
    root.runTick()
}
