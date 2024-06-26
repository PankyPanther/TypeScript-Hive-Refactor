import { initialize, isInitialize } from "Logistics/Room/initialize";
import { runRoomRole } from "Logistics/Room";
import { deleteCreepMemory } from "Utils/deleteCreepMem";


export function loop(): void {
  // console.log('Game Time: ', Game.time)

  for (const creepName in Memory.creeps) {
    if(!Game.creeps[creepName]) {
      console.log(`Deleting memory for dead creep: ${creepName}`)

      if (Memory.creeps[creepName].role === 'Hauler' || Memory.creeps[creepName].role === 'Miner'){
        deleteCreepMemory(Memory.creeps[creepName].target, Memory.creeps[creepName].workRoom)
      }

      delete Memory.creeps[creepName];
    }
  }

  for (let roomName in Game.rooms) {
    const room = Game.rooms[roomName];
    if (!isInitialize(room)) {
      initialize(room)
    }
    runRoomRole(room);
  }
}
