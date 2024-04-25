
export function runTowers(room: Room): void{
    let towers  = room.find(FIND_STRUCTURES).filter((struct) => struct.structureType === STRUCTURE_TOWER) as StructureTower[]
    for (let tower  of towers){
        let target = room.find(FIND_HOSTILE_CREEPS || FIND_HOSTILE_POWER_CREEPS)[0]
        tower.attack(target)
    }
}