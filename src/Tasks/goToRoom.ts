import { Task } from "definitions";

import { findRoomsWithinRadius } from "Overlords/Colonization/roomScouting";
import { findRoomToScout } from "Overlords/Colonization/roomScouting";

interface goToRoom extends Task {
    getScoutRoom(room: Room, creep: Creep): string
}


export const goToRoom: goToRoom = {
    name: 'goToRoom',
    run: function(room, target, creep) { 

        if (target) {
            const exit = creep.room.findExitTo(target) as ExitConstant
            if (exit) {
                const path = creep.pos.findClosestByPath(exit);
                if (path) {
                    creep.moveTo(path);
                    console.log(creep.moveTo(path))
                } 
            } 
        } 

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
        return findRoomToScout(findRoomsWithinRadius(room.name, 1))
    }
};

export default goToRoom