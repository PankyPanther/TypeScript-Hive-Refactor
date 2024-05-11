import { Ally } from "definitions";

const allyList: string[] = [
    "shylo132",
    "MerlinMan5",
    "Starb",
    "ThomasCui",
    "Arigilos",
    "PlainCucumber25",
    "Kuruma",
    "DollarAkshay",
    "Pankpanther",
    "U-238",
    "Winnduu"
];

const allies: Ally = {
    allies: allyList,
    isAlly: function(allyName){
        if (allyList.includes(allyName)){
            return true
        }

        return false
    }
}

export default allies