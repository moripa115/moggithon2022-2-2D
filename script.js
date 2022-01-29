// 関数宣言・・・いつものやつ。欠点に、関数の定義記述前に、関数呼び出しができてしまう＝巻き上げ
// 関数式・・・無名関数を代入することが多い、
//            関数名をつけると、例えば関数内で条件分岐した際の処理部分で、その関数を使用できる
//             constを用いることで上書き防止できる。良くも悪くも巻き上げを防げる

// ゲーム全体に関する関数
const game = function(){
    let pScore = 0;
    let CScore = 0;

    const startGame = function(){
        const playBtn = document.querySelector('.intro button')
    }
}