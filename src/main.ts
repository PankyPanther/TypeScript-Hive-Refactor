class Root {
    runTick() {

        if (!Game.creeps['Remy']){
            let spawn = Game.spawns['Spawn1']
            spawn.spawnCreep([WORK, WORK, MOVE, CARRY], 'Remy')
        }

        for (let creepName in Game.creeps){
            let creep = Game.creeps[creepName]
            let sources = creep.room.find(FIND_SOURCES)
            
            if (creep.store[RESOURCE_ENERGY] === 0){
                if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE){
                    creep.moveTo(sources[0])
                }
            } else {
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
