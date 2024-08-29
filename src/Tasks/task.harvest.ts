import { Task } from "Managers/TaskManager"

export const Harvest: Task = { 
    taskName: "Harvest",
    taskEmoji: "⛏",

    run(creep) {
        if (creep.memory.target === undefined){
            creep.memory.target = this.getTarget({workRoom: creep.memory.workRoom}) as string
        }

        let source = Game.getObjectById(creep.memory.target) as Source
        if (source){
            if(creep.harvest(source) === ERR_NOT_IN_RANGE){
                creep.moveTo(source)
            }
    
            if (creep.store.getFreeCapacity(RESOURCE_ENERGY) === 0) {
                creep.memory.target = undefined
                return "ChangeState"
            }
        }

        return null
    },


    getTarget(data: {workRoom: string}): string {
        return Game.rooms[data.workRoom].memory.Sources[0].Id
    }
}