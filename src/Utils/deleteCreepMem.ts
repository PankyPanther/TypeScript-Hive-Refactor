
export function deleteCreepMemory(target: string, workRoom: string | undefined){
    if (workRoom){
        for (let flag of Game.rooms[workRoom].find(FIND_FLAGS)){
            if (target === flag.name){
                console.log('reestoring source mem')
                Game.rooms[workRoom].memory.miningSites![flag.name].minerCreep = ''
            }
        }
    }
}