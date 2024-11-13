        let score = JSON.parse(localStorage.getItem('Score')) 
        || { Wins: 0, Losses: 0, Ties: 0 };

         ;
                
            function playGame(playerMove){
                const computerMove = pickComputerMove();

                let result = '';
                if (playerMove === 'rock'){

                    if (computerMove === 'rock') {
                        result = 'Tie'

                    } else if (computerMove === 'paper') {
                        result = 'You Lose';

                    } else {
                        result = 'You Win';

                    }
                }else if(playerMove === 'paper'){

                    if (computerMove === 'rock') {
                        result = 'You Win'

                    } else if (computerMove === 'paper') {
                        result = 'Tie';

                    } else {
                        result = 'You Lose';

                    }
                    
                }else if(playerMove === 'scissors'){

                    if (computerMove === 'rock') {
                        result = 'You Lose'

                    } else if (computerMove === 'Paper') {
                        result = 'You Win';

                    } else {
                        result = 'Tie';

                    }
                }

                if (result==='You Win'){
                    score.Wins +=1;

                } else if (result === 'You Lose'){
                    score.Losses +=1;

                }else  if (result==='Tie'){
                    score.Ties +=1;
                }

                localStorage.setItem('Score', JSON.stringify(score))

                document.querySelector('.js-gameResults').innerHTML =
              ` 
                <div class='results-line'>You:  <img class="move-btn" src='images/${playerMove}-emoji.png'>||<img class="move-btn" src='images/${computerMove}-emoji.png'> Computer .</div> <p>
                <div class='Game-results'> ${result} </div> <p>
                Wins: ${score.Wins},  Losses: ${score.Losses},  Ties:${score.Ties}`
                
            }
            
            let isAutoplaying = false;
            let intervalId;

            function autoPlay() {
                if (!isAutoplaying) {
                intervalId = setInterval(function () {
                        const playerMove = pickComputerMove();
                        playGame(playerMove);
                    }, 1000);
                        isAutoplaying = true;

                } else {
                    clearInterval(intervalId);
                    isAutoplaying = false
                }
            }

            function pickComputerMove(){
            let computerMove = '';

            const randoma = Math.random();

            if (randoma >= 0 && randoma < 1 / 3) {

                computerMove = 'rock';


            } else if (randoma >= 1 / 3 && randoma < 2 / 3) {

                computerMove = 'paper';


            } else {
                computerMove = 'scissors';

            }
            return computerMove;
        }

        function resetScore(){
            score = { Wins: 0, Losses:0, Ties:0};
            localStorage.setItem('Score', JSON.stringify(score));
            document.querySelector('.js-gameResults').innerHTML ='Scores have been reset <p> Wins:0 Losses:0 Ties:0'
        }