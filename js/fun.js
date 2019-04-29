// NEW DICE
const rollingDice = () => {
    return(Math.floor(Math.random() * 6) + 1);
    };
    let playerPosition = 1;
    const snakePoisiton = [ 
        { pos: 70, alteration: 40},
        { pos: 80, alteration: 36},
        { pos: 99, alteration: 34},
      ];
    const ladderPoisiton = [ 
        { pos: 6, alteration: 22},
        { pos: 22, alteration: 19},
        { pos: 23, alteration: 44},
        { pos: 72, alteration: 22},
    
      ];
    // FUNCTION FOR PLAYER MOVEMENT ON THE BOARD
    const movingPlayer = (oldPosition) => {
        document.querySelector(`.posChange:nth-child(${oldPosition})`).classList.remove(`playerCurrentPos`);

      let newPosition = oldPosition + rollingDice();
        var index = snakePoisiton.find( snake => snake.pos == newPosition );
        var index2 = ladderPoisiton.find( ladder => ladder.pos == newPosition );
        
        if ( index != undefined ) {              // Checking for snakes change the playerPosition accordingly 
           newPosition = newPosition - snakePoisiton[index].alteration;
        }
        else if ( index2 != undefined ) {         // Checking for snakes change the playerPosition accordingly
            newPosition = newPosition + ladderPoisiton[index2].alteration;
        }

        let num = newPosition;
        document.querySelector(`.posChange:nth-child(${num})`).classList.add(`playerCurrentPos`);
      return(newPosition);
    };
    
    playerPosition = movingPlayer(playerPosition);
    
    // NEXT:
    // 1. Create a dataset to store each user's position, name, avatar, etc.
    // 2. Print the board based on the ladders and snakes arrays
    // 3. Print the player positions based on the players array
    
       
    // document.getElementById('output').innerHTML = `Index ${index3} holds Letter: ${pos}.`;
    // const currentPosClass = () => {
    //     document.getElementsById(playerPosition).innerHtml=`<div class="playerCurrentPos">${playerPosition}</div>`;
    // }

    // Find an element using the element number as a child of the parent, starting from 1
