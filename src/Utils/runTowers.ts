
export function runTowers(room: Room): void{
    let towers  = room.find(FIND_STRUCTURES).filter((struct) => struct.structureType === STRUCTURE_TOWER) as StructureTower[]
    for (let tower of towers){
        let target = room.find(FIND_HOSTILE_CREEPS || FIND_HOSTILE_POWER_CREEPS)[0]
        if (target){
            tower.attack(target)
        } else {
            let structure = room.find(FIND_STRUCTURES)
                .filter((struct) => {
                    return struct.hits < struct.hitsMax && (struct.structureType == STRUCTURE_CONTAINER || struct.structureType == STRUCTURE_ROAD) 
                })
                .sort((a, b) => (a.hits / a.hitsMax) - (b.hits / b.hitsMax))
                

            tower.repair(structure[0])
        }
    }
}