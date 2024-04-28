import { Task } from "definitions";

import { findRoomsWithinRadius } from "Overlords/Colonization/findAdjacentRooms";

interface goToRoom extends Task {
    getScoutRoom(room: Room, creep: Creep): string
}


export const goToRoom: goToRoom = {
    name: 'goToRoom',
    run: function(room, target, creep) { 
        if (target){
            if (!creep.room || creep.fatigue > 0 ){
                return
            }
            if (creep.room.name === target){
                return
            }

            let dest = new RoomPosition(25, 25, target)
            creep.moveTo(dest)

        }

        console.log(creep.room.name,creep.memory.target)
        if (creep.room.name === creep.memory.target){
            creep.memory.tasks.shift()
            creep.memory.target = ''
            return
        }

        if (!creep.memory.target || target === null){
            if (creep.memory.role === 'Scouts'){
                let fetchedTarget = this.getScoutRoom!(room, creep)
                if (fetchedTarget){
                    creep.memory.target = fetchedTarget
                }
            }
        }
    }, 
    getTarget: function(room){

        return ''
    },
    getScoutRoom: function(room, creep){
        return findRoomsWithinRadius(creep.memory.homeRoom, 2)[3] 
    }
};

export default goToRoom