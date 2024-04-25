
export function runTowers(room: Room): void{
    for (let tower of room.find(FIND_STRUCTURES).filter((struct) => struct.structureType === STRUCTURE_TOWER)){
        let target = room.find(FIND_HOSTILE_CREEPS || FIND_HOSTILE_POWER_CREEPS)[0]
        tower.attack(target)
    }
}