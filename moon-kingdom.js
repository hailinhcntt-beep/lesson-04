
function createCharacters() {
    let characters = [
        { name: "Mario", level: 100, health: 1000 },
        { name: "luffy", level: 200, health: 100 },
        { name: "yoshi", level: 50, health: 300 },
        { name: "Lyly", level: 250, health: 50 },
        { name: "Bon", level: 500, health: 5000 }
    ]
    let characterPowerUp = characters.map(character => {
        return {
            name: character.name.toUpperCase(),
            level: character.level * 2,
            health: character.health * 3
        };
    });
    console.log("Mảng mới là: ");
    console.log(characterPowerUp);
    let possibleWinners = characterPowerUp.filter(character => character.health > 1000);
    console.log(" phần tử có chỉ số health lớn hơn 1000 là: ");
    console.log(possibleWinners);
}
createCharacters();

function printLeaderboard() {
    const players = [
        { name: "Mario", score: 200 },
        { name: "luccy", score: 300 },
        { name: "dona", score: 50 },
        { name: "mimi", score: 200 },
        { name: "tiin", score: 500 }
    ]
    players.sort((a, b) => b.score - a.score);
    console.log("mảng sau khi sắp xếp score từ cao đến thấp là: ")
    console.log(players);
    //in bảng xếp hạng
    for (let i = 0; i < players.length; i++) {
        let index = '';
        if (i === 0) {
            index = `🥇 ${i + 1}.`
        } else if (i === 1) {
            index = `🥈 ${i + 1}.`
        } else if (i === 2) {
            index = `🥉 ${i + 1}.`
        } else {
            index = `    ${i + 1}.`
        }
        console.log(`${index} ${players[i].name} - ${players[i].score} pts`);
    }

}
printLeaderboard();