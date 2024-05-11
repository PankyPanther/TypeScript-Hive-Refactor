import { Task } from "definitions";

export const withdraw: Task = {
    name: 'withdraw',
    run: function(room, target, creep) {
        let TPOS = Game.getObjectById(target) as Ruin

        if (TPOS){
            if (creep.withdraw(TPOS, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE){
                creep.moveTo(TPOS)
            }
    
            creep.withdraw(TPOS, RESOURCE_ENERGY)
        }

        if (creep.store.getFreeCapacity() == 0 || TPOS === null || TPOS.store || TPOS.store[RESOURCE_ENERGY] === 0 || !TPOS){
            console.log('shifting')
            creep.memory.tasks.shift()
            creep.memory.target = ''
            return
        }

        if (!creep.memory.target){
            let fetchedTarget = this.getTarget!(room)
            if (fetchedTarget){
                creep.memory.target = fetchedTarget
            }
        }
    }, 
    getTarget: function(room){
        let ruins: Ruin[] = room.find(FIND_RUINS).filter((ruin) => {
            return ruin.store[RESOURCE_ENERGY] > 0; 
        });

        if (ruins.length){
            return ruins[0].id
        }

        return ''
    }
};

export default withdraw