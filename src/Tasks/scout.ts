import { controllerSign, Task } from "definitions";
import signController from "./sgnCtrllor";
import goToRoom from "./goToRoom";


export const scout: Task = {
    name: 'scout',
    run: function(room, target, creep) { 
        Memory.rooms[creep.room.name].lastEntered = Game.time

        if (!creep.memory.target || creep.room.name === creep.memory.target) {
            for (let room in Memory.rooms){
              if (Game.time - Memory.rooms[room].lastEntered > 10000){
                creep.memory.workRoom = room
                creep.memory.tasks.unshift(goToRoom.name)
                console.log(room, Memory.rooms[room].lastEntered, Game.time)
                return
              }
            }


            // If the creep doesn't have a target room or has reached its target room
            var exits = Object.entries(Game.map.describeExits(creep.room.name));
            var validExits = [];
            for (var i = 0; i < exits.length; i++) {
              var roomName = exits[i][1];
              if (roomName !== null) {
                validExits.push(roomName);
              }
            }
            


            if (validExits.length > 0) {
              var randomExit =
                validExits[Math.floor(Math.random() * validExits.length)];
              creep.memory.target = randomExit;
              creep.moveTo(new RoomPosition(25, 25, creep.memory.target));
            }
          } else {
            // If the creep is in transit to its target room
            creep.moveTo(new RoomPosition(25, 25, creep.memory.target));
          }
      
        if (creep.room.controller){
          if (creep.room.controller.sign?.text != controllerSign){
            creep.memory.tasks.unshift(signController.name)
          } 
        }
    }
};

export default scout