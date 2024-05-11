import allies from "Logistics/Ally"

export function runTowers(room: Room): void{
    let towers  = room.find(FIND_STRUCTURES).filter((struct) => struct.structureType === STRUCTURE_TOWER) as StructureTower[]

    if (!towers.length){
        return 
    }

    for (let tower of towers){

        if (tower.store.getCapacity(RESOURCE_ENERGY) * 0.25){
            let structure = room.find(FIND_STRUCTURES)
            .filter((struct) => {
                return struct.hits < struct.hitsMax && (struct.structureType == STRUCTURE_CONTAINER || struct.structureType == STRUCTURE_ROAD) 
            })
            .sort((a, b) => (a.hits / a.hitsMax) - (b.hits / b.hitsMax))


            if (tower.store[RESOURCE_ENERGY]){
                tower.repair(structure[0])
            }
        } else {
            let hostiles = tower.room.find(FIND_HOSTILE_CREEPS);

            // If there are hostiles, attack them
            if (hostiles.length > 0 && tower.energy > 0) {
            let closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                if (closestHostile && !allies.isAlly(closestHostile.owner.username)) {
                    tower.attack(closestHostile);
                    return; // Exit function if attacking hostiles
                }
            }
            // If no hostiles, repair allies or structures
            if (tower.energy > 0) {
                // Find damaged allies
                let damagedAllies = tower.room.find(FIND_MY_CREEPS, {
                    filter: (creep) => creep.hits < creep.hitsMax,
                });

                // If there are damaged allies, heal them
                if (damagedAllies.length > 0) {
                    tower.heal(damagedAllies[0]);
                    return; // Exit function if healing allies
            }
            }
        }
        
    }
}