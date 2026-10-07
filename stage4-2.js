function printBountyLeaderboard(){
    const crewList = [
        {name : "Linh", bounty : 900000000},
        {name : "Zoro", bounty : 50000000},
        {name : "Luffy", bounty : 100000000},
        {name : "Mario", bounty : 100000000.1},
        {name : "Peach", bounty : 8000000}
    ];
    crewList.sort((a,b) => b.bounty-a.bounty);
    console.log(crewList);
    console.log("Danh sách truy nã gồm:");
// In huy chương
for (let i = 0; i < crewList.length; i++) {
    let medal = "";

    if (i === 0) {
        medal = `🥇 ${i + 1}.`;
    } else if (i === 1) {
        medal = `🥈 ${i + 1}.`;
    } else if (i === 2) {
        medal = `🥉 ${i + 1}.`;
    } else {
        medal = `    ${i + 1}.`; 
    }
// in thứ tự truy nã
    console.log(`${medal} ${crewList[i].name} - ${crewList[i].bounty} pts`);
};
}
printBountyLeaderboard();