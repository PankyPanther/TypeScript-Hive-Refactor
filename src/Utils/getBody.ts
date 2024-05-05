interface BodyConfig {
    [key: number]: BodyPartConstant[]; 
}

interface BodyLookup {
    [key: string]: BodyConfig;
}

const bodyLookup: BodyLookup = {
    'Miner': {
        550:  [WORK, WORK, WORK, WORK, WORK, MOVE],
        800:  [WORK, WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE],
        1300: [WORK, WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE]
    },

    'Supplier': {
        550:  [MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, CARRY, CARRY, CARRY, CARRY, CARRY],
        800:    [
                    MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
                    CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY
                ],
        1300: [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY]
    },

    'Upgrader': {
        550: [MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY],
        800: [MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY],
        1300: [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY]
    },

    'Worker': {
        550: [MOVE,MOVE,WORK,WORK,WORK,CARRY,CARRY,CARRY],
        800: [MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY],
        1300: [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,WORK,WORK,WORK,WORK,WORK,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY]
    },

    'Scouts': {
        550: [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],
        800: [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE],
        1300: [MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE]
    }
}


export function getBody(creepRole: string, roomEnergyCapacity: number): BodyPartConstant[] {
    if (roomEnergyCapacity >= 1300){
        return bodyLookup[creepRole][1300]
    }
    else if (roomEnergyCapacity >= 800 ){
        return bodyLookup[creepRole][800]
    }
    else if (roomEnergyCapacity >= 550 ){
        console.log(bodyLookup[creepRole][550])
        return bodyLookup[creepRole][550]
    }


    return []
}