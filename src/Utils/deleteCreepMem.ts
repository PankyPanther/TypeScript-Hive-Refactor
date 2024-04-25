
export function deleteCreepMemory(target: string, workRoom: Room){
    for (let flag of Game.rooms[workRoom.name].find(FIND_FLAGS)){
        if (target === flag.name){
            console.log('reestoring source mem')
            Game.rooms[workRoom.name].memory.miningSites![flag.name].creepName = ''
        }
    }
}