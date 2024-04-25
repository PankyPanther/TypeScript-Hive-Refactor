import roleBootSrap from "Overlords/Situational/roleBootStrap";
import { getRoomPlan } from "RoomPlanner/getRoomPlan";
import { placeConstructionSites } from "RoomPlanner/STRCUTURE_PLANNER/placeConstructionSites";
import { runTowers } from "Utils/runTowers";

export function DirectiveMain(room: Room): void {

    if (room.find(FIND_MY_CREEPS).length < 3){
        let isOverlordCore = room.memory.OverLord!.find((data) => {
            if (data === roleBootSrap.name){
                return data
            }
            return false
        })
    
        if (!isOverlordCore){
            console.log('Removing ADDING CORE: ', room.name)
            room.memory.OverLord!.push(roleBootSrap.name)
        }
    }

    if (Game.time % 1000 == 0){
        placeConstructionSites(room, room.controller!.level, getRoomPlan(room))
    }

    if (room.controller?.level != room.memory.currentRCL){
        placeConstructionSites(room, room.controller!.level, getRoomPlan(room))
        room.memory.currentRCL++
    }

    
    if (room.find(FIND_HOSTILE_CREEPS || FIND_HOSTILE_POWER_CREEPS).length){
        runTowers(room)
    }
}