export function embedRCLandStructure(RCL: number, structure: number): number {
    return (25 * RCL) + structure;
}


export function getEmbededRCl(inputNumber: number): number {
    return (inputNumber - (inputNumber % 25)) / 25
}


export function getEmbededStructure(inputNumber: number): number {
    return inputNumber % 25
}