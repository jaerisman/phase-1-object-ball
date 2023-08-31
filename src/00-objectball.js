function gameObject(){
    return game = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26, 
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players:{
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15, 
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks:0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                },
            },
        },
    }
}


function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
}

console.log(homeTeamName());

function homeTeamName() {
    return gameObject()["home"]["teamName"];
}

console.log(homeTeamName());

function numPointsScored(target){
  let game = gameObject();
  for (const team in game) {
        for (const player in game[team].players) {
            if (player === target) {   
              return game[team].players[player].points;
            }
        }
    }
}

console.log(numPointsScored("Brendan Haywood"));

function shoeSize(target){
    let game = gameObject();
    for (const team in game) {
        for (const player in game[team].players) {
            if (player === target) {
                return game[team].players[player].shoe;
            }
        }
    }
}

console.log(shoeSize("Brendan Haywood"));

function teamColors(target){
    let game = gameObject();
    for (const team in game) {
      if (game[team].teamName === target) {
            return game[team].colors;
            }
        }
    }

console.log(teamColors("Charlotte Hornets"));

function teamNames(){
    let game = gameObject();
    let teamNamesArray = [];
    for (const team in game) {
      teamNamesArray.push(game[team].teamName)
    }
  return teamNamesArray;
}

console.log(teamNames());

function playerNumbers(target){
  let game = gameObject();
  let teamNumbersArray = [];
  for (const team in game) {
    if (game[team].teamName === target){
      const players = Object.values(game[team].players);
      for (const player of players) {
        teamNumbersArray.push(player["number"]);
      }
    }
  }
  return teamNumbersArray;
}
console.log(playerNumbers("Charlotte Hornets"));

function playerStats(target){
  let game = gameObject();
  let playerStatsObject = {};
  for (const team in game) {
    const players = game[team].players;
    Object.keys(players).forEach(playerName => {
      if (playerName === target) {
        playerStatsObject = {
          number: players[playerName].number,
          shoe: players[playerName].shoe,
          points: players[playerName].points,
          rebounds: players[playerName].rebounds,
          assists: players[playerName].assists,
          steals: players[playerName].steals,
          blocks: players[playerName].blocks,
          slamDunks: players[playerName].slamDunks
        }; 
      };
  });
  }
  return playerStatsObject;
}
console.log(playerStats("Brendan Haywood"));

function bigShoeRebounds(){
    let game = gameObject();
    
    let largestShoeSize = 0;
    let playerWithLargestShoeSize;
  
    for (let team in game) {
      let players = game[team].players;
      for (let playerName in players) {
        let player = players[playerName];
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          playerWithLargestShoe = playerName;
        }
      }
    }
    let rebounds = game.home.players[playerWithLargestShoe].rebounds;
    return rebounds;
  }
  console.log(bigShoeRebounds());


function mostPointsScored(){
  let game = gameObject();
    
  let mostPoints = 0;
  let playerWithMostPoints;
  
    for (let team in game) {
      let players = game[team].players;
      for (let playerName in players) {
        let player = players[playerName];
        if (player.points > mostPoints) {
          mostPoints = player.points;
          playerWithMostPoints = playerName;
        }
      }
    }
    let playerName = playerWithMostPoints;
    return playerName;
  }
console.log(mostPointsScored());

function winningTeam(){
    let homePoints = 0;
    let awayPoints = 0;
  
    for (let player in game.home.players) {
      homePoints += game.home.players[player].points;
    }
    for (let player in game.away.players) {
      awayPoints += game.away.players[player].points;
    }
    if (homePoints > awayPoints) {
      return game.home.teamName;
    }
    else if (homePoints < awayPoints) {
      return game.away.teamName;
    } else {
      return "It's a tie!";
    }
  }
  console.log(winningTeam());

  function playerWithLongestName(players){
    const game = gameObject();
    let longestNamePlayer = '';
    let longestNameLength = 0;
  
    for (let player in game.home.players){
      if (player.length > longestNameLength){
        longestNameLength = player.length;
        longestNamePlayer = player;
      }
    }
    for (let player in game.away.players){
      if (player.length > longestNameLength){
        longestNameLength = player.length;
        longestNamePlayer = player;
    }
  }
    return longestNamePlayer;
  }
  console.log(playerWithLongestName());

  function doesLongNameStealATon(){
    const game = gameObject();
    let longestNamePlayer = '';
    let longestNameLength = 0;
    let mostReboundPlayer = '';
    let mostRebounds = 0;
  
    for (let player in game.home.players){
      if (player.length > longestNameLength || (player.length === longestNameLength && player < longestNamePlayer)) {
        longestNameLength = player.length;
        longestNamePlayer = player;
      }
    }
    for (let player in game.away.players){
      if (player.length > longestNameLength || (player.length === longestNameLength && player < longestNamePlayer)) {
        longestNameLength = player.length;
        longestNamePlayer = player;
      }
    }
    for (let player in game.home.players){
      if (game.home.players[player].rebounds > mostRebounds) {
        mostRebounds = game.home.players[player].rebounds;
        mostReboundPlayer = player;
      }
    }
    for (let player in game.away.players) {
      if (game.away.players[player].rebounds > mostRebounds) {
        mostRebounds = game.away.players[player].rebounds;
        mostReboundPlayer = player;
      }
    }
    if (
      game.home.players[longestNamePlayer]?.rebounds >= mostRebounds ||
      game.away.players[longestNamePlayer]?.rebounds >= mostRebounds
    ) {
      return true;
    } else {
      return false;
    }
  }
  console.log(doesLongNameStealATon());