var gameOver = false;
const referenceStats = [
    ['Banker', 1600, null,1],
    ['Doctor', 1200, "less sick", 1],
    ['Merchant', 1200, null, 1.5],
    ['Blacksmith', 800, "repair", 2],
    ['Carpenter', 800, "repair", 2],
    ['SaddleMaker', 800, null, 2.5],
    ['Farmer', 400, "oxen", 3],
    ['Teacher', 400, null, 3.5]
]

while( !gameOver){
    var partyStats= {
        "money": null,
        "weight": null,
        "occupation": null,
        "advantage": null,
        "bonus": null,
        "huntedFood": null,
        "food": null,
        "oxen": null,
        "people":[],
        "wheels":null,
        "tongues": null,
        "axles":null,
        "bullets": 0,
        "clothing": null,
        "health": 100,
        "milesTraveled": 0,
        "startMonth": []

    };

var res = prompt("Select Your class\n 1. Banker \n 2. Carpenter \n 3. Farmer \nInput the number below");

if(res == 1){
    var spec = "Banker";
    console.log("you have chosen " + spec);
    partyStats.money = 1600;
    partyStats.occupation = spec;
    partyStats.advantage = referenceStats[0][3];
    partyStats.bonus = referenceStats[0][2];
   }

else if (res == 2){
    var spec = "Carpenter";
    console.log("you have chosen " + spec);
    partyStats.money = 800;
    partyStats.occupation = spec;
    partyStats.advantage = referenceStats[4][3];
    partyStats.bonus = referenceStats[4][2];
}

else {
    var spec = "Farmer";
    console.log("you have chosen " + spec);
    partyStats.money = 800;
    partyStats.occupation = spec;
    partyStats.advantage = referenceStats[6][3];
    partyStats.bonus = referenceStats[6][2];
}

var res = prompt("Party Leader Name?");
partyStats.people.push(res);
partyStats.people.push("Dave");
partyStats.people.push("Alice");
partyStats.people.push("Mike");
partyStats.people.push("Mary");

console.log("Your party consists of: \n");
for(var i = 0; i < partyStats.people.length; i++)
{
    console.log(partyStats.people[i] + "\n");
}

var res = prompt("When do you want to leave?\n 1. March \n2. April \n3. May \n4. June \n5. July\nInput the number below");

partyStats.startMonth.push(parseInt(res-1));

alert("Before leaving you have $" + partyStats.money + " to spend at the General Store. You dont have to spend it all now.");

var generalStoreMenu = [
["#", "Max Qauntity", "Product", "Item", "Unit Price"],
[1, 20, "Yoke (2 Oxen)", "oxen",'40.00'],
[2, 50, "Sets of Clothing", "clothing", '10.00'],
[3, 99, "Boxes of Bullets (20 per Box)", "bullets", '$2.00'],
[4, 3, "Spare Wagon Axles", "axles", '10.00'],
[5, 3, "Spare Wagon Wheels", "wheels", '10.00'],
[6, 3, "Spare Wagon Tongues ", "tongues", '10.00'],
[7, 2000, "Pounds of Food", "food" ,'0.20'],

];


var buying = true;

while (buying){
    console.log("General Store Menu!!")
    console.log(generalStoreMenu);
    console.log("You have " + partyStats.money + " left");
    
     
        var res = prompt("If you don't want to to buy anything enter -1");
    if (res == -1){
        buying = false;
        break;
    }

    let responseItem = prompt("Enter the # of the item you wish to purchase");
    let responseQuant = prompt("Enter the quantity you wish to purchase");
    let purchaseAmount =  responseQuant * generalStoreMenu[parseInt(responseItem)][4];

    while (purchaseAmount < partyStats.money){
    generalStoreMenu[parseInt(responseItem)][1] = generalStoreMenu[responseItem][1]-responseQuant;
    partyStats.money -= responseQuant * generalStoreMenu[parseInt(responseItem)][4];

    if(oxen)
        {
    var statItem = generalStoreMenu[parseInt(responseItem)][3];
    partyStats.statItem += 2 * responseQuant; 
        }

    else{
        var statItem = generalStoreMenu[parseInt(responseItem)][3];
                partyStats.statItem += responseQuant; 
        }


    }
    
    buying = false;
    }




gameOver = true;
}