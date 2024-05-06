import { roomEconomyScorer } from "Logistics/roomEconomyScore";
import roleColinazation from "Overlords/Colonization/roleColinazation";
import roleBootSrap from "Overlords/Situational/roleBootStrap";
import { getRoomPlan } from "RoomPlanner/getRoomPlan";
import { placeConstructionSites } from "RoomPlanner/STRCUTURE_PLANNER/placeConstructionSites";
import { runTowers } from "Utils/runTowers";

export function DirectiveMain(room: Room): void {

    if (room.find(FIND_MY_CREEPS).length < 5){
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
    } else {
        if (Game.time % 20 === 0 && roomEconomyScorer(room) < 15 && room.controller!.level > 1){
            if (!room.memory.overLordData![roleColinazation.name]){
                roleColinazation.init(room)
                room.memory.OverLord?.unshift(roleColinazation.name)
            }

            // createRemoteRoom(room)
        }
    }

    if (Game.time % 1000 == 0){
        placeConstructionSites(room, room.controller!.level, getRoomPlan(room))
    }

    if (room.controller?.level != room.memory.currentRCL){
        placeConstructionSites(room, room.controller!.level, getRoomPlan(room))
        room.memory.currentRCL = room.controller!.level
    }

    
    runTowers(room)
    
    // console.log(roomEconomyScorer(room))
}