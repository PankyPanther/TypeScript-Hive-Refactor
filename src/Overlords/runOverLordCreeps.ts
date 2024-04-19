export function runOverLordCreeps(creepJob: string, overLord: string, Tasks: Task[]): void {
    for (const creepName of creepFinder(creepJob, overLord)){
        const creep = Game.creeps[creepName]
        if (!Memory.creeps[creepName].tasks.length){
            for (let task of Tasks){
                Memory.creeps[creepName].tasks.push(task)
            }
        }
    }
}