import { Task } from "definitions";
import MiningSite from "Hive Clusters/MiningSite";

export const harvest: Task = {
    name: 'harvest',
    run: function(room, target, creep) {
        creep.say('harvest')
        
        let flag = Game.flags[target]

        if (!creep.memory.target){
            let fetchedTarget = this.getTarget!(room)
            if (fetchedTarget){
                creep.memory.target = fetchedTarget
            }
        }

        

        if (flag){
            let source = flag.pos.findInRange(FIND_SOURCES, 1)[0]

            if (creep.harvest(source) === ERR_NOT_IN_RANGE){
                creep.moveTo(flag.pos)
            }
    
            creep.harvest(source)
        }

        if (creep.store.getFreeCapacity() == 0){
            creep.memory.tasks.shift()
            creep.memory.target = ''
        }
    }, 
    getTarget: function(room){
        if (MiningSite.isOpenSource(room)){
            let flag = MiningSite.getOpenSource(room)
            room.memory.miningSites![flag!].creepName = 'CREEP HERE STOP :('
            return MiningSite.getOpenSource(room)
        }
        return ''
    }
};

export default harvest