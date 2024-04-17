import { initialize, isInitialize } from "Logistics/Room/initialize";
import { runRoomRole } from "Logistics/Room";


export function loop(): void {
  for (const creepName in Memory.creeps) {
    if(!Game.creeps[creepName]) {
      console.log(`Deleting memory for dead creep: ${creepName}`)
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
