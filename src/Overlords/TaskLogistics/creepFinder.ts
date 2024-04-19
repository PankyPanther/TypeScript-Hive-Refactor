export function creepFinder(creepRole: string, overLord: string): string[] {
    let creeps = []
    for (const creepName in Memory.creeps) {
        if(Game.creeps[creepName].memory.role === creepRole && Game.creeps[creepName].memory.overLord === overLord) {
            creeps.push(creepName)
        }
    }

    return creeps
}