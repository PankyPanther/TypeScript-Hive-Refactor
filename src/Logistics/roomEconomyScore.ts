export function roomEconomyScorer(room: Room): number {
    let colonyEnergy: number = 0

    if (room.memory.role !== 'Colony'){
        console.log('Room Provided is not a colony')
    }

    for (let creepName in Memory.creeps){
        let creep = Game.creeps[creepName]
        if (creep.memory.colony === room.memory.name){
            let creepWorkParts = creep.getActiveBodyparts(WORK)
            let creepMoveParts = creep.getActiveBodyparts(MOVE)
            if (creep.memory.role === 'Miner'){
                colonyEnergy += creepWorkParts
            }
            else {
                if (creep.memory.role != 'Supplier'){
                    colonyEnergy -= creepWorkParts - (creepMoveParts / 2)
                }
            }
        }
    }

    // console.log(colonyEnergy)

    return colonyEnergy
}