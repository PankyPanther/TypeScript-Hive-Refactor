export function roomEconomyScorer(room: Room) {
    let colonyEnergy: number = 0

    if (room.memory.role !== 'Colony'){
        console.log('Room Provided is not a colony')
        return
    }

    for (let creepName in Memory.creeps){
        let creep = Game.creeps[creepName]
        if (creep.memory.colony === room.memory.name){
            let creepWorkParts = creep.getActiveBodyparts(WORK)
            if (creep.memory.role === 'Miner'){
                colonyEnergy += creepWorkParts
            }
            else {
                colonyEnergy -= (creepWorkParts)
            }
        }
    }

    console.log(colonyEnergy)
}