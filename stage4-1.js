// Khai báo mảng
const pirates =[
    {name: "Luffy", bounty: 20000, strength: 600},
    {name: "Chopper", bounty: 5000, strength: 50},
    {name: "Zoro", bounty: 10000, strength: 300}
];
// Tạo hàm upgradeCrew
 function upgradeCrew(){
    // sử dụng map để tạo mảng mới awakenedPirates
    const awakenedPirates = pirates.map(pirate => {
        return {
        name: pirate.name.toUpperCase(), // tên viết hoa
        bounty: pirate.bounty * 2, // tiền thưởng nhân đôi
        strength: pirate.strength * 1.5 // sức mạnh nhân 1.5
        };
    });
    console.log("Mảng mới là : ");
    console.log(awakenedPirates);
    // sử dụng filter để lọc thành viên có strength > 500
     const monsterTrioCandidates = awakenedPirates.filter(pirate => pirate.strength > 500);
     console.log(" Thành viên có sức mạnh lớn hơn 500 là: ")
     console.log(monsterTrioCandidates);
 }
// Gọi lại hàm
upgradeCrew();