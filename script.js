console.log('starting');

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}


    const game = () => {
        let win = 0;
    let lose = 0;
    let tie = 0;

//       const options = ['P', 'R', 'S'];
// const computer = Math.floor(Math.random() * options.length);
// console.log(computer, options[computer]);
// computerOption = options[computer];
// console.log(computerOption);

const options = ['P', 'R', 'S'];
const computerOption = getRandomItem(options);
console.log(computerOption);

        for (let play = 0; play < 100; play++) {
            const userInput = prompt('Enter either P, R, or S');
            let toUperCase = userInput.toUpperCase();
            
            if (toUperCase === 'R' && computerOption === 'S') {
                console.log('You won');
                win += 1;
            } else if (toUperCase === 'P' && computerOption === 'R') {
                console.log('You won');
                win += 1;
            } else if (toUperCase === 'S' && computerOption === 'P') {
                console.log('You won');
                win += 1;
            } else if (toUperCase === 'S' && computerOption === 'R') {
                console.log('You lose');
                lose += 1;
            } else if (toUperCase === 'R' && computerOption === 'P') {
                console.log('You lose');
                lose += 1;
            } else if (toUperCase === 'P' && computerOption === 'S') {
                console.log('You lose');
                lose += 1;
            } else if (toUperCase === computerOption) {
                console.log('You tie');
                tie += 1;
            } else {
                console.log('Invalid Input');
            }
            
                if(play === 10) {
                    console.log('win: ' + win);
                    console.log('lose: ' + lose);
                    console.log('tie: ' + tie);
                }
        }
    }
    game();