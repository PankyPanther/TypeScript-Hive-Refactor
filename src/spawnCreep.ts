export function spawnCreep(body: Body[], name: string, creepMem: object, room: Room){
    let spawns = room.find(FIND_MY_SPAWNS)

    for (let spawn of spawns){
        if (spawn.spawnCreep() === 'OK'){
            spawn.spawnCreep(body, name, {memory: creepMem})
            break
        }
    }
}