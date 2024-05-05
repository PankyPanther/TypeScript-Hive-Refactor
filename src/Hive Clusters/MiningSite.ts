import { HiveClusters } from "definitions";
import { MiningSites } from "definitions";
import { MiningSite } from "definitions";
import { floor } from "lodash";

const MiningSite: HiveClusters = {
    name: 'MiningSite',
    init: function(room){
        let flags = room.find(FIND_FLAGS);
        if (flags.length > 0) {
  
            let miningSites: MiningSites = {};
    
            for (const flag of flags) {
                if (flag.name.split('-')[0] == 'MiningSite'){
                    let data: MiningSite = {
                        creepName: ''
                    };
                    miningSites[flag.name] = data;
                }
            }
            room.memory.miningSites = miningSites;
        }
        
    },

    isOpenSource: function(room){
        for (let flag of room.find(FIND_FLAGS)){
            if (room.memory.miningSites){
                let flagCreepName = room.memory.miningSites![flag.name].creepName
                if (!flagCreepName){
                    return true
                }
            }
        }
        return false
    },

    getOpenSource: function(room){
        for (let flag of room.find(FIND_FLAGS)){
            let flagCreepName = room.memory.miningSites![flag.name].creepName
            if (!flagCreepName){
                return flag.name
            }
        }
        return undefined
    }
}

export default MiningSite