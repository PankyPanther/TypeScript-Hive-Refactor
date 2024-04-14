import { getEmbededStructure } from "./structureRCLCalc";

interface NumberColorMap {
    [key: number]: string;
}

const numberColors: NumberColorMap = {
    1: "#FF5733",    // Red
    2: "#3498DB",    // Blue
    3: "#2ECC71",    // Green
    4: "#F1C40F",    // Yellow
    5: "#E67E22",    // Orange
    6: "#9B59B6",    // Purple
    7: "#00FFFF",    // Cyan
    8: "#FF00FF",    // Magenta
    9: "#00FF00",    // Lime
    10: "#FF1493",   // Pink
    11: "#008080",   // Teal
    12: "#4B0082",   // Indigo
    13: "#800000",   // Maroon
    14: "#808000",   // Olive
    15: "#000080",   // Navy
    16: "#A52A2A",   // Brown
    17: "#87CEEB",   // Sky Blue
    18: "#D2B48C",   // Tan
    19: "#FF7F50",   // Coral
    20: "#BDB76B"    // Dark Khaki
};

export function visualizeSetup(roomMatrix: CostMatrix, roomName: string): void{
    let vis = new RoomVisual(roomName);
    for (let y = 0; y < 50; ++y) {
        for (let x = 0; x < 50; ++x) {
            let num = getEmbededStructure(roomMatrix.get(x,y))
            if (num != 0){
                vis.circle(x, y, {fill: numberColors[num]})    
            }
        }
    }
}