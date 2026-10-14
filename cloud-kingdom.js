let playerName = "Mario";
let curentLives = 3;
const coinsLevel1 = 25;
const coinsLevel2 = 30;
const coinsLevel3 = 45;

// Tổng coins của 3 level
const total = coinsLevel1 + coinsLevel2 + coinsLevel3;
//Giá trị trung bình
const avg = total / 3;
//Số coins còn dư khi tổng /3
const soDu = total % 3;
//In
console.log(" Tổng số coins là: " + total);
console.log(" Giá trị trung bình là: " + avg);
console.log(" Số coin còn dư khi chia tổng cho 3 là: " + soDu);
//stage 3 bài2
let powerUp = "star";
let effect = "";
if(powerUp === "mushroom"){
    effect = "Mario becomes Super!"
} else if(powerUp === "flower"){
    effect = "Mario can shoot fireballs!"
} else if(powerUp === "star"){
    effect = "Mario is invincible!";
} else if(powerUp === "none"){
    effect = "Mario is normal";
} else {
    effect = "Unknown power-up";
}
console.log(effect);
