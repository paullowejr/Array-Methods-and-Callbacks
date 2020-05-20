import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */


const homeTeamName = fifaData.filter(function(match){
    return match["Year"] === 2014 && match["Stage"] === "Final";
  })
console.log(homeTeamName[0]["Home Team Name"]);
console.log(homeTeamName[0]["Away Team Name"]);
console.log(homeTeamName[0]["Home Team Goals"]);
console.log(homeTeamName[0]["Away Team Goals"]);

const winnerTeamName = [];
fifaData.filter(function(match){
  if (match["Year"] === 2014 && match["Stage"] === "Final") {
    if (match["Home Team Goals"] > match["Away Team Goals"]) {
      return winnerTeamName.push(match["Home Team Name"]);
    } else {
      return winnerTeamName.push(match["Away Team Name"]);
    }
  }
})
console.log(winnerTeamName);


/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
  const Final= data.filter(function(array){
   return array['Stage']==='Final';
   })
return Final;
};
console.log(getFinals(fifaData));
   

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */


function getYears(allYears, data) {
    let cameron = allYears(data);   
    let emilio = cameron.map(function(paul){
        return paul['Year'];
    })
    return emilio;
};

console.log(getYears(getFinals, fifaData));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data, cameron) {
  let finalGames = cameron(data);
  let winners = finalGames.map(function(team){
  if (team["Home Team Goals"] > team["Away Team Goals"]) {
    return team["Home Team Name"];
  } else {
    return team["Away Team Name"];
  } 
  })
  return winners;
}
console.log(getWinners(fifaData, getFinals));

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winners, years, data) {
  let gameWinners = winners(data, getFinals);
  let gameYears = years(data, getFinals);

  let winnersByYear = gameYears.map(function(year, index){
    let winnerYears = gameWinners[index];
    return `In ${year}, ${winnerYears} won the world cup!`;
  })
  return winnersByYear;
}

console.log(getWinnersByYear(getWinners, getYears, fifaData));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals() {
  let total;
      const totalHome = fifaData.reduce(function(accumulator,item){
        return accumulator + item['Home Team Goals'];
      },0)/fifaData.length
  const awayTeam = fifaData.reduce(function(accumulator,item){
    return accumulator + item['Away Team Goals']
  },0)/fifaData.length

  return total = `The average of Home Team Goals and Away Team Goals are ${totalHome+awayTeam}`;
  }; 

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
