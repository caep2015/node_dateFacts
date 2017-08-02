const moment = require('moment');
const chalk = require('chalk');


let time = moment().format(' LLLL ');
let day = moment().format('DDDo');

let now = moment();
let zeroHour = moment("0:00:00","HH:mm:ss");

let seconds = now.diff(zeroHour,'seconds')



let dst = "";
if (moment().isDST()){
  dst = "is";
} else {
  dst = "is not";
};

let leapYear = "";
if (moment().isLeapYear()){
  leapYear = "is";
} else {
  leapYear = "is not";
};


console.log('It is' + chalk.blueBright(time));
console.log('It is the ' + chalk.magentaBright(day) +' day of the year.');
console.log('It is ' + chalk.cyanBright(`${seconds}`) + ' seconds into the day.');
console.log('It ' + chalk.green(dst) + ' during Daylight Savings Time.');
console.log('It ' + chalk.redBright(leapYear)+ ' not a leap year');
