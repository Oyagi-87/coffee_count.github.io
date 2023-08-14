// 初期値
let cups = 0;

// ボタンと数値の要素を取得
const minusOne = document.getElementById('minusOne');
const minusHalf = document.getElementById('minusHalf');
const plusTwo = document.getElementById('plusTwo');
const plusFore = document.getElementById('plusFore');
const plusSix = document.getElementById('plusSix');
const plusEight = document.getElementById('plusEight');
const plusTen = document.getElementById('plusTen');
const clear = document.getElementById("clear");
const beforeTime = document.getElementById("beforeTime");

const numberElement = document.getElementById('counter');

// -1ボタンのクリックイベント
minusOne.addEventListener('touchstart', decreaseNumber.bind(null, 1));
//-0.5ボタンのクリックイベント
minusHalf.addEventListener('touchstart', decreaseNumber.bind(null, 0.5));

// 加算ボタンのクリックイベント
plusTwo.addEventListener('touchstart', operateNumber.bind(null, 2));

plusFore.addEventListener('touchstart', operateNumber.bind(null, 4));
plusSix.addEventListener('touchstart', operateNumber.bind(null, 6));
plusEight.addEventListener('touchstart', operateNumber.bind(null, 8));
plusTen.addEventListener('touchstart', operateNumber.bind(null, 10));
// clearボタンのクリックイベント
clear.addEventListener('touchstart',cupClear);

// 数値の操作関数
function operateNumber(value) {
    const time = new Date();
    cups += value;
    updateNumberDisplay();
    updateTime(time);
}

function decreaseNumber(value){
    if(cups > 0.5){
        cups = cups - value;
        updateNumberDisplay();
    }
}

function cupClear(){
    cups = 0;
    updateNumberDisplay();
    beforeTime.innerHTML = "<h4>抽出されていません</h4>"
}

// 数値の表示を更新
function updateNumberDisplay() {
    numberElement.textContent = cups;
}

function updateTime(time){
    const manth = time.getMonth()+1;
    const day = time.getDate();
    const sampletime = manth+"/"+day +" "+ time.toLocaleTimeString();
    beforeTime.textContent = sampletime;
}