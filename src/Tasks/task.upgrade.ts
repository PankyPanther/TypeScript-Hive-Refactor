import { Task } from "Managers/TaskManager"

export const Upgrade: Task = { //input actually helpful dictunaries
    taskName: "Upgrade",
    taskEmoji: "🔼",

    run(creep){
        if (creep.memory.target === undefined){
            creep.memory.target = this.getTarget({homeRoom: creep.memory.homeRoom}) as string
        }

        let controller = Game.getObjectById(creep.memory.target) as StructureController
        if (controller){
            if(creep.upgradeController(controller) === ERR_NOT_IN_RANGE){
                creep.moveTo(controller)
            }
    
            if (creep.store[RESOURCE_ENERGY] === 0){
                creep.memory.target = undefined
                return "ChangeState"
            } 
        }

        return null
    },
    getTarget(data: {homeRoom: string}): string {
        return Game.rooms[data.homeRoom].memory.Controller[0].Id
    }
}