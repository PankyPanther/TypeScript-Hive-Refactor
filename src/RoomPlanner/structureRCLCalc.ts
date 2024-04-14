export function embedRCLandStructure(RCL: number, structure: number): number {
    return (25 * RCL) + structure;
}


export function getEmbededRCl(inputNumber: number): number {
    return (inputNumber - (inputNumber % 25)) / 25
}


enum Structure {
    Spawn = 1,
    Extension,
    Road,
    Wall,
    Rampart,
    Link,
    Storage,
    Tower,
    Observer,
    PowerSpawn,
    Extractor,
    Lab,
    Terminal,
    Container,
    Nuke,
    Factory,
    InvaderCore,
    PowerBank,
    Portal,
    KeeperLair
}

// Define the function to get the embedded structure
export function getEmbededStructure(inputNumber: number): Structure | undefined {
    const structureIndex: number = inputNumber % 25;
    switch (structureIndex) {
        case 1:
            return Structure.Spawn;
        case 2:
            return Structure.Extension;
        case 3:
            return Structure.Road;
        case 4:
            return Structure.Wall;
        case 5:
            return Structure.Rampart;
        case 6:
            return Structure.Link;
        case 7:
            return Structure.Storage;
        case 8:
            return Structure.Tower;
        case 9:
            return Structure.Observer;
        case 10:
            return Structure.PowerSpawn;
        case 11:
            return Structure.Extractor;
        case 12:
            return Structure.Lab;
        case 13:
            return Structure.Terminal;
        case 14:
            return Structure.Container;
        case 15:
            return Structure.Nuke;
        case 16:
            return Structure.Factory;
        case 17:
            return Structure.InvaderCore;
        case 18:
            return Structure.PowerBank;
        case 19:
            return Structure.Portal;
        case 20:
            return Structure.KeeperLair;
        default:
            return undefined;
    }
}