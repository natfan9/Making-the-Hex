var topCountries = ["Mexico","United States","Costa Rica","Jamaica","Honduras","El Salvador","Canada","Curacao","Panama","Haiti"];

//Updated to reflect October 2019 rankings	
var fwrPoints = {
	Mexico: 1613,
	"United States": 1530,
	"Costa Rica": 1436,
	Jamaica: 1441,
	Honduras: 1368,
	"El Salvador": 1336,
	Panama: 1310,
	Canada: 1339,
	Curacao: 1323,
	Haiti: 1281,
	"Trinidad and Tobago": 1213,
	"Antigua and Barbuda": 1129,
	Bermuda: 986,
	Guyana: 969,
	"Dominican Republic": 1040,
	Cuba: 938,
	Montserrat: 911,
	Aruba: 885,
	"Saint Lucia": 953,
	"Puerto Rico": 940,
	Uruguay: 1642,
	Argentina: 1617,
	Chile: 1579,
	Bolivia: 1324,
	"United Arab Emirates": 1353,
};

var games = {
	/*game1: {
		date: "Thursday, September 5, 2019",
		home: "Bermuda",
		away: "Panama",
		gametype: "Concacaf Nations League Group Stage",
		multiplier: 25,
		gameline: function() {return this.home + " vs " + this.away;}
	},
	game2: {date: "Thursday, September 5, 2019", home: "Honduras", away: "Puerto Rico", gametype: "International Friendly", multiplier: 10, gameline: function() {return this.home + " vs " + this.away;}},
	game3: {date: "Friday, September 6, 2019", home: "United States", away: "Mexico", gametype: "International Friendly", multiplier: 10, gameline: function() {return this.home + " vs " + this.away;}},
	game4: {date: "Friday, September 6, 2019", home: "Costa Rica", away: "Uruguay", gametype: "International Friendly", multiplier: 10, gameline: function() {return this.home + " vs " + this.away;}},
	game5: {date: "Friday, September 6, 2019", home: "Jamaica", away: "Antigua and Barbuda", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game6: {date: "Saturday, September 7, 2019", home: "El Salvador", away: "Saint Lucia", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game7: {date: "Saturday, September 7, 2019", home: "Canada", away: "Cuba", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game8: {date: "Saturday, September 7, 2019", home: "Curacao", away: "Haiti", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game9: {date: "Sunday, September 8, 2019", home: "Panama", away: "Bermuda", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game10: {date: "Monday, September 9, 2019", home: "Guyana", away: "Jamaica", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game11: {date: "Tuesday, September 10, 2019", home: "Argentina", away: "Mexico", gametype: "International Friendly", multiplier: 10, gameline: function() {return this.home + " vs " + this.away;}},
	game12: {date: "Tuesday, September 10, 2019", home: "Dominican Republic", away: "El Salvador", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game13: {date: "Tuesday, September 10, 2019", home: "Cuba", away: "Canada", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game14: {date: "Tuesday, September 10, 2019", home: "Haiti", away: "Curacao", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game15: {date: "Tuesday, September 10, 2019", home: "Uruguay", away: "United States", gametype: "International Friendly", multiplier: 10, gameline: function() {return this.home + " vs " + this.away;}},
	game16: {date: "Tuesday, September 10, 2019", home: "Honduras", away: "Chile", gametype: "International Friendly", multiplier: 10, gameline: function() {return this.home + " vs " + this.away;}},
	game17: {date: "Wednesday, October 2, 2019", home: "Mexico", away: "Trinidad and Tobago", gametype: "International Friendly", multiplier: 5, gameline: function() {return this.home + " vs " + this.away;}},
	game18: {date: "Thursday, October 10, 2019", home: "Haiti", away: "Costa Rica", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game19: {date: "Thursday, October 10, 2019", home: "Trinidad and Tobago", away: "Honduras", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game20: {date: "Thursday, October 10, 2019", home: "Panama", away: "Curacao", gametype: "International Friendly", multiplier: 10, gameline: function() {return this.home + " vs " + this.away;}},
	game21: {date: "Friday, October 11, 2019", home: "Bermuda", away: "Mexico", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game22: {date: "Friday, October 11, 2019", home: "United States", away: "Cuba", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game23: {date: "Friday, October 11, 2019", home: "Antigua and Barbuda", away: "Guyana", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game24: {date: "Saturday, October 12, 2019", home: "Jamaica", away: "Aruba", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game25: {date: "Saturday, October 12, 2019", home: "Dominican Republic", away: "Saint Lucia", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game26: {date: "Saturday, October 12, 2019", home: "Montserrat", away: "El Salvador", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game27: {date: "Sunday, October 13, 2019", home: "Costa Rica", away: "Curacao", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game28: {date: "Monday, October 14, 2019", home: "Guyana", away: "Antigua and Barbuda", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game29: {date: "Tuesday, October 15, 2019", home: "Mexico", away: "Panama", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game30: {date: "Tuesday, October 15, 2019", home: "Canada", away: "United States", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game31: {date: "Tuesday, October 15, 2019", home: "Aruba", away: "Jamaica", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game32: {date: "Tuesday, October 15, 2019", home: "Dominican Republic", away: "Montserrat", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game33: {date: "Tuesday, October 15, 2019", home: "Saint Lucia", away: "El Salvador", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game34: {date: "Tuesday, October 15, 2019", home: "Bolivia", away: "Haiti", gametype: "International Friendly", multiplier: 10, gameline: function() {return this.home + " vs " + this.away;}},*/
	game35: {date: "Thursday, November 14, 2019", home: "Curacao", away: "Costa Rica", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game36: {date: "Friday, November 15, 2019", home: "United States", away: "Canada", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game37: {date: "Friday, November 15, 2019", home: "Antigua and Barbuda", away: "Jamaica", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game38: {date: "Friday, November 15, 2019", home: "Guyana", away: "Aruba", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game39: {date: "Friday, November 15, 2019", home: "Panama", away: "Mexico", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game40: {date: "Saturday, November 16, 2019", home: "Saint Lucia", away: "Dominican Republic", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game41: {date: "Saturday, November 16, 2019", home: "El Salvador", away: "Montserrat", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game42: {date: "Sunday, November 17, 2019", home: "Costa Rica", away: "Haiti", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game43: {date: "Sunday, November 17, 2019", home: "Honduras", away: "Trinidad and Tobago", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game44: {date: "Monday, November 18, 2019", home: "Aruba", away: "Antigua and Barbuda", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game45: {date: "Monday, November 18, 2019", home: "Jamaica", away: "Guyana", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game46: {date: "Tuesday, November 19, 2019", home: "Panama", away: "United Arab Emirates", gametype: "International Friendly", multiplier: 10, gameline: function() {return this.home + " vs " + this.away;}},
	game47: {date: "Tuesday, November 19, 2019", home: "El Salvador", away: "Dominican Republic", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game48: {date: "Tuesday, November 19, 2019", home: "Saint Lucia", away: "Monsterrat", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game49: {date: "Tuesday, November 19, 2019", home: "Cuba", away: "United States", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	game50: {date: "Tuesday, November 19, 2019", home: "Mexico", away: "Bermuda", gametype: "Concacaf Nations League Group Stage", multiplier: 25, gameline: function() {return this.home + " vs " + this.away;}},
	key: function(n) {
		return this[Object.keys(this)[n]];
	}
};

var text = d3.select("text.gameline");

text.text(games.key(0).gameline() + " - " + games.key(0).gametype);

var homewin = d3.select("text.teamawinlabel");
var awaywin = d3.select("text.teambwinlabel");
var homepens = d3.select("text.teamapsolabel");
var awaypens = d3.select("text.teambpsolabel");
var draw = d3.select("text.drawlabel");

homewin.text(games.key(0).home + " win");
awaywin.text(games.key(0).away + " win");
homepens.text(games.key(0).home + " (pens)");
awaypens.text(games.key(0).away + " (pens)");

var date = d3.select("text.dateline");

date.text(games.key(0).date);

var score = d3.select("text.scores");

score.text(games.key(0).home + "'s score is " + Math.round(fwrPoints[games.key(0).home]) + ". " + games.key(0).away + "'s score is " + Math.round(fwrPoints[games.key(0).away]) + ".");

var lb1 = d3.select("text.team1");
var lb2 = d3.select("text.team2");
var lb3 = d3.select("text.team3");
var lb4 = d3.select("text.team4");
var lb5 = d3.select("text.team5");
var lb6 = d3.select("text.team6");
var lb7 = d3.select("text.team7");
var lb8 = d3.select("text.team8");
var lb9 = d3.select("text.team9");
var lb10 = d3.select("text.team10");
var lb11 = d3.select("text.team11");

lb1.text(topCountries[0] + ": " + Math.round(fwrPoints["Mexico"]));
lb2.text(topCountries[1] + ": " + Math.round(fwrPoints["United States"]));
lb3.text(topCountries[2] + ": " + Math.round(fwrPoints["Costa Rica"]));
lb4.text(topCountries[3] + ": " + Math.round(fwrPoints["Jamaica"]));
lb5.text(topCountries[4] + ": " + Math.round(fwrPoints["Honduras"]));
lb6.text(topCountries[5] + ": " + Math.round(fwrPoints["El Salvador"]));
lb7.text(topCountries[6] + ": " + Math.round(fwrPoints["Canada"]));
lb8.text(topCountries[7] + ": " + Math.round(fwrPoints["Curacao"]));
lb9.text(topCountries[8] + ": " + Math.round(fwrPoints["Panama"]));
lb10.text(topCountries[9] + ": " + Math.round(fwrPoints["Haiti"]));
lb11.text(topCountries[10] + ": " + Math.round(fwrPoints["Trinidad and Tobago"]));

var n = Object.keys(games).length;
if (n === 5) {
	console.log(games);
}
console.log(n);
	if (n > 0) {
		function looper(resultindex) {
			switch (resultindex) {
				case 1:
					if (n > 1) {
						fwrPoints[games.key(Object.keys(games).length - n).away] = fwrPoints[games.key(Object.keys(games).length - n).away] + games.key(Object.keys(games).length - n).multiplier * (0 - (1/(Math.pow(10,-(fwrPoints[games.key(Object.keys(games).length - n).away]-fwrPoints[games.key(Object.keys(games).length - n).home])/600)+1)));
						fwrPoints[games.key(Object.keys(games).length - n).home] = fwrPoints[games.key(Object.keys(games).length - n).home] + games.key(Object.keys(games).length - n).multiplier * (1 - (1/(Math.pow(10,-(fwrPoints[games.key(Object.keys(games).length - n).home]-fwrPoints[games.key(Object.keys(games).length - n).away])/600)+1)));
						console.log(n);
						n--;
						leaderboardUpdate();
						if (n > 1) {
							score.text(games.key(Object.keys(games).length - n).home + "'s score is " + Math.round(fwrPoints[games.key(Object.keys(games).length - n).home]) + ". " + games.key(Object.keys(games).length - n).away + "'s score is " + Math.round(fwrPoints[games.key(Object.keys(games).length - n).away]) + ".");
							text.text(games.key(Object.keys(games).length - n).gameline() + " - " + games.key(Object.keys(games).length - n).gametype);
							homewin.text(games.key(Object.keys(games).length - n).home + " win");
							awaywin.text(games.key(Object.keys(games).length - n).away + " win");
							homepens.text(games.key(Object.keys(games).length - n).home + " (pens)");
							awaypens.text(games.key(Object.keys(games).length - n).away + " (pens)");
							date.text(games.key(Object.keys(games).length - n).date);
							console.log(n);
						} else {
							score.text("");
							text.text("");
							date.text("");
							homewin.text("");
							awaywin.text("");
							homepens.text("");
							awaypens.text("");
							draw.text("Finished!");
						}
					}
					break;
				case 2:
					if (n > 1) {
						fwrPoints[games.key(Object.keys(games).length - n).away] = fwrPoints[games.key(Object.keys(games).length - n).away] + games.key(Object.keys(games).length - n).multiplier * (1 - (1/(Math.pow(10,-(fwrPoints[games.key(Object.keys(games).length - n).away]-fwrPoints[games.key(Object.keys(games).length - n).home])/600)+1)));
						fwrPoints[games.key(Object.keys(games).length - n).home] = fwrPoints[games.key(Object.keys(games).length - n).home] + games.key(Object.keys(games).length - n).multiplier * (0 - (1/(Math.pow(10,-(fwrPoints[games.key(Object.keys(games).length - n).home]-fwrPoints[games.key(Object.keys(games).length - n).away])/600)+1)));
						console.log(n);
						n--;
						leaderboardUpdate();
						if (n > 1) {
							score.text(games.key(Object.keys(games).length - n).home + "'s score is " + Math.round(fwrPoints[games.key(Object.keys(games).length - n).home]) + ". " + games.key(Object.keys(games).length - n).away + "'s score is " + Math.round(fwrPoints[games.key(Object.keys(games).length - n).away]) + ".");
							text.text(games.key(Object.keys(games).length - n).gameline() + " - " + games.key(Object.keys(games).length - n).gametype);
							homewin.text(games.key(Object.keys(games).length - n).home + " win");
							awaywin.text(games.key(Object.keys(games).length - n).away + " win");
							homepens.text(games.key(Object.keys(games).length - n).home + " (pens)");
							awaypens.text(games.key(Object.keys(games).length - n).away + " (pens)");
							date.text(games.key(Object.keys(games).length - n).date);
							console.log(n);
						} else {
							score.text("");
							text.text("");
							date.text("");
							homewin.text("");
							awaywin.text("");
							homepens.text("");
							awaypens.text("");
							draw.text("Finished!");
						}
					}
					break;
				case 3:
					if (n > 1) {
						fwrPoints[games.key(Object.keys(games).length - n).away] = fwrPoints[games.key(Object.keys(games).length - n).away] + games.key(Object.keys(games).length - n).multiplier * (0.5 - (1/(Math.pow(10,-(fwrPoints[games.key(Object.keys(games).length - n).away]-fwrPoints[games.key(Object.keys(games).length - n).home])/600)+1)));
						fwrPoints[games.key(Object.keys(games).length - n).home] = fwrPoints[games.key(Object.keys(games).length - n).home] + games.key(Object.keys(games).length - n).multiplier * (0.5 - (1/(Math.pow(10,-(fwrPoints[games.key(Object.keys(games).length - n).home]-fwrPoints[games.key(Object.keys(games).length - n).away])/600)+1)));
						console.log(n);
						n--;
						leaderboardUpdate();
						if (n > 1) {
							score.text(games.key(Object.keys(games).length - n).home + "'s score is " + Math.round(fwrPoints[games.key(Object.keys(games).length - n).home]) + ". " + games.key(Object.keys(games).length - n).away + "'s score is " + Math.round(fwrPoints[games.key(Object.keys(games).length - n).away]) + ".");
							text.text(games.key(Object.keys(games).length - n).gameline() + " - " + games.key(Object.keys(games).length - n).gametype);
							homewin.text(games.key(Object.keys(games).length - n).home + " win");
							awaywin.text(games.key(Object.keys(games).length - n).away + " win");
							homepens.text(games.key(Object.keys(games).length - n).home + " (pens)");
							awaypens.text(games.key(Object.keys(games).length - n).away + " (pens)");
							date.text(games.key(Object.keys(games).length - n).date);
							console.log(n);
						} else {
							score.text("");
							text.text("");
							date.text("");
							homewin.text("");
							awaywin.text("");
							homepens.text("");
							awaypens.text("");
							draw.text("Finished!");
						}
					}
					break;
				case 4:
					if (n > 1) {
						fwrPoints[games.key(Object.keys(games).length - n).away] = fwrPoints[games.key(Object.keys(games).length - n).away] + games.key(Object.keys(games).length - n).multiplier * (0.5 - (1/(Math.pow(10,-(fwrPoints[games.key(Object.keys(games).length - n).away]-fwrPoints[games.key(Object.keys(games).length - n).home])/600)+1)));
						fwrPoints[games.key(Object.keys(games).length - n).home] = fwrPoints[games.key(Object.keys(games).length - n).home] + games.key(Object.keys(games).length - n).multiplier * (0.75 - (1/(Math.pow(10,-(fwrPoints[games.key(Object.keys(games).length - n).home]-fwrPoints[games.key(Object.keys(games).length - n).away])/600)+1)));
						console.log(n);
						n--;
						leaderboardUpdate();
						if (n > 1) {
							score.text(games.key(Object.keys(games).length - n).home + "'s score is " + Math.round(fwrPoints[games.key(Object.keys(games).length - n).home]) + ". " + games.key(Object.keys(games).length - n).away + "'s score is " + Math.round(fwrPoints[games.key(Object.keys(games).length - n).away]) + ".");
							text.text(games.key(Object.keys(games).length - n).gameline() + " - " + games.key(Object.keys(games).length - n).gametype);
							homewin.text(games.key(Object.keys(games).length - n).home + " win");
							awaywin.text(games.key(Object.keys(games).length - n).away + " win");
							homepens.text(games.key(Object.keys(games).length - n).home + " (pens)");
							awaypens.text(games.key(Object.keys(games).length - n).away + " (pens)");
							date.text(games.key(Object.keys(games).length - n).date);
							console.log(n);
						} else {
							score.text("");
							text.text("");
							date.text("");
							homewin.text("");
							awaywin.text("");
							homepens.text("");
							awaypens.text("");
							draw.text("Finished!");
						}
					}
					break;
				case 5:
					if (n > 1) {
						fwrPoints[games.key(Object.keys(games).length - n).away] = fwrPoints[games.key(Object.keys(games).length - n).away] + games.key(Object.keys(games).length - n).multiplier * (0.75 - (1/(Math.pow(10,-(fwrPoints[games.key(Object.keys(games).length - n).away]-fwrPoints[games.key(Object.keys(games).length - n).home])/600)+1)));
						fwrPoints[games.key(Object.keys(games).length - n).home] = fwrPoints[games.key(Object.keys(games).length - n).home] + games.key(Object.keys(games).length - n).multiplier * (0.5 - (1/(Math.pow(10,-(fwrPoints[games.key(Object.keys(games).length - n).home]-fwrPoints[games.key(Object.keys(games).length - n).away])/600)+1)));
						console.log(n);
						n--;
						leaderboardUpdate();
						if (n > 1) {
							score.text(games.key(Object.keys(games).length - n).home + "'s score is " + Math.round(fwrPoints[games.key(Object.keys(games).length - n).home]) + ". " + games.key(Object.keys(games).length - n).away + "'s score is " + Math.round(fwrPoints[games.key(Object.keys(games).length - n).away]) + ".");
							text.text(games.key(Object.keys(games).length - n).gameline() + " - " + games.key(Object.keys(games).length - n).gametype);
							homewin.text(games.key(Object.keys(games).length - n).home + " win");
							awaywin.text(games.key(Object.keys(games).length - n).away + " win");
							homepens.text(games.key(Object.keys(games).length - n).home + " (pens)");
							awaypens.text(games.key(Object.keys(games).length - n).away + " (pens)");
							date.text(games.key(Object.keys(games).length - n).date);
							console.log(n);
						} else {
							score.text("");
							text.text("");
							date.text("");
							homewin.text("");
							awaywin.text("");
							homepens.text("");
							awaypens.text("");
							draw.text("Finished!");
						}
					}
			}
		};
	}
function leaderboardUpdate(){
	boardSorted = Object.keys(fwrPoints).sort(function(a,b){return fwrPoints[b]-fwrPoints[a]})
	while (topCountries.length < boardSorted.length) {	
		for (h = 0; h < boardSorted.length; h++){
			var countrycheck = topCountries.includes(boardSorted[h]);
			//console.log(countrycheck);
			//console.log(h);
			if (countrycheck == 0) {
				boardSorted.splice(h,1);
			}
		}
	}
	console.log(topCountries);
	//console.log(countrycheck);
	//console.log(h);
	console.log(boardSorted);

	lb1.text(boardSorted[0] + ": " + Math.round(fwrPoints[boardSorted[0]]));
	lb2.text(boardSorted[1] + ": " + Math.round(fwrPoints[boardSorted[1]]));
	lb3.text(boardSorted[2] + ": " + Math.round(fwrPoints[boardSorted[2]]));
	lb4.text(boardSorted[3] + ": " + Math.round(fwrPoints[boardSorted[3]]));
	lb5.text(boardSorted[4] + ": " + Math.round(fwrPoints[boardSorted[4]]));
	lb6.text(boardSorted[5] + ": " + Math.round(fwrPoints[boardSorted[5]]));
	lb7.text(boardSorted[6] + ": " + Math.round(fwrPoints[boardSorted[6]]));
	lb8.text(boardSorted[7] + ": " + Math.round(fwrPoints[boardSorted[7]]));
	lb9.text(boardSorted[8] + ": " + Math.round(fwrPoints[boardSorted[8]]));
	lb10.text(boardSorted[9] + ": " + Math.round(fwrPoints[boardSorted[9]]));
	lb11.text(boardSorted[10] + ": " + Math.round(fwrPoints[boardSorted[10]]));
}