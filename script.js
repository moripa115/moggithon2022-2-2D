// 関数宣言・・・いつものやつ。欠点に、関数の定義記述前に、関数呼び出しができてしまう＝巻き上げ
// 関数式・・・無名関数を代入することが多い、
//            関数名をつけると、例えば関数内で条件分岐した際の処理部分で、その関数を使用できる
//             constを用いることで上書き防止できる。良くも悪くも巻き上げを防げる

// ゲーム全体に関する関数
const game = function(){
    let pScore = 0;
    let cScore = 0;
    // gameをスタートさせる挙動
    const startGame = function(){
        // この書き方知らなかった、queryだとタグそのまま指定できる
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () =>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        } );
    };
    // 対戦に関する挙動
    const playMatch = function(){
        // ボタンは３つ（複数）あるので、Allを用いる。返り値はNodeList
        // NodeListにはforEach()が使えるが、配列として扱ってforEach()したいならスプレッド構文or Array.from()を先に適用
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        // コンピューターが何の手を出すか、画像を変えて、何の手かによって条件分岐させたい
        const computerOptions = ['rock', 'paper', 'scissors'];

        // 
        options.forEach(option =>{
            // ここはアロー関数ではなく、通常関数を使ったほうがよい・・・thisの適用範囲が違う
                // thisは関数(adventListener('click', function())を呼んだときの、「.」の前についているオブジェクトを指すことが可能
                    // ただ、アロー関数だと、関数の外のthisしか参照できない、つまりthis = optionとできない
                        // アロー関数の時、this はグローバルオブジェクト、ブラウザでは Window オブジェクトになるらしい
                    // 通常関数の時は this = optionとなる
            option.addEventListener('click', function(){
                console.log(this);
                // Math.randomは0以上1未満の0乱数生成、それを3乗すると、極値的に0以上3未満の乱数生成できる
                // 配列内の手をランダムに表示させたい、つまり0,1,2をランダムに表示させたい => Math.random()*3の小数点以下切り捨てで実現
                const ComputerRandomNumber = Math.floor(Math.random()*3);
                //ランダムな 0,1,2を利用して手をランダムにださせる
                const computerChoice = computerOptions[ComputerRandomNumber];
                
                // compareHandsの呼び出し
            
                compareHands(this.textContent,computerChoice);

                // じゃんけんの手の更新
                    //プレイヤーがpaperを選択した時、this=optionの内容は、<button class="paper">paper</button>
                    // このthisのテキスト部分 = paper だけを代入したい
                playerHand.src = `./img/${this.textContent}.png`;
                computerHand.src = `./img/${computerChoice}.png`;
            })
        })
        const updateScore = function() {
            const playerScore = document.querySelector('.player-score p');
            const computerScore = document.querySelector('.computer-score p');
            playerScore.textContent = pScore;
            computerScore.textContent  = cScore;
            }
    // どちらが勝つか、もしくはあいこか、を比較したい
    
    const compareHands = function(playerChoice, computerChoice){
        const winner = document.querySelector('.winner');
        const win = document.querySelector('.win');
    if(playerChoice === computerChoice){
        winner.textContent = "It is a tie";
        return;
        // winner.classList.add('fadeOut');
        //choose an option 消す　class=fadeout
        //It is a tie 出す　display:non block
    }
    if(playerChoice === "rock"){
        if(computerChoice === 'scissors'){
            winner.textContent = "You wins !";
            pScore++;
            updateScore();
            return;
    
        }else if(computerChoice === 'paper') {
            winner.textContent = "You loses !"
            cScore++;
            updateScore();
            return;
        }
    
    }
    if(playerChoice === "scissors"){
        if(computerChoice === 'paper'){
            winner.textContent = "You wins !";
            pScore++;
            updateScore();
            return;
    
        }else if(computerChoice === 'rock') {
            winner.textContent = "You loses !"
            cScore++;
            updateScore();
            return;
        }
        // let pScore = 0;
        // let CScore = 0;
    }
    if(playerChoice === "paper"){
        if(computerChoice === 'rock'){
            winner.textContent = "You wins !";
            pScore++;
            updateScore();
            return;
    
        }else if(computerChoice === 'scissors') {
            winner.textContent = "You loses !"
            cScore++;
            updateScore();
            return;
        }
    
    }
    }
    } 
    // すべてのinner functionを呼び出す
    startGame();
    playMatch();
};

// gameの発火
game();