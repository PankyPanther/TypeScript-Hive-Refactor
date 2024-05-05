export function spawnCreep(body:  BodyPartConstant[], name: string, creepMem: CreepMemory, room: Room){
    let spawns = room.find(FIND_MY_SPAWNS)

    for (let spawn of spawns){
        console.log(spawn.spawnCreep(body, name, {memory: creepMem}))
        if (spawn.spawnCreep(body, name, {memory: creepMem}) === 0){
            spawn.spawnCreep(body, name, {memory: creepMem})

            
            break
        }
    }
}