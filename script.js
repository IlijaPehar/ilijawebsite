//Age in Days
function action() {
    var question = prompt('What year were you born in?');
    var math = (2022 - question) * 365;
    var h1 = document.createElement('h1');
    var answer = document.createTextNode('You are ' + math + ' Days old.');
    h1.setAttribute('id', 'action');
    h1.appendChild(answer);
    document.getElementById('answerbox').appendChild(h1);
}

function reset() {
    document.getElementById('action').remove();
}
// Cat generator
function GenCat() {
    var image = document.createElement('img');
    image.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    image.setAttribute('id', 'GenCat')
    document.getElementById('catbox').appendChild(image);
}

function delGif() {
    document.getElementById('GenCat').remove();
}


//Rock Paper Scissors
function RpsGame(yourChoice) {
    console.log(yourChoice);
    var HumanChoice, botChoice
    HumanChoice = yourChoice.id

    botChoice = numberToChoice(randRpsToInt());

    results = decideWinner(HumanChoice, botChoice);

    message = finalMessage(results);

    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randRpsToInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(YourChoice, ComputerChoice) {
    var rpsDataBase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }

    var yourScore = rpsDataBase[YourChoice][ComputerChoice];
    var ComputerScore = rpsDataBase[ComputerChoice][YourChoice];

    return [yourScore,ComputerScore];
}

function finalMessage ([yourScore, ComputerScore]) {
    if (yourScore === 0){
        return {'message': 'You Lost!', 'color': 'red'}
    }else if (yourScore === 0.5) {
        return {'message': 'You Tied!', 'color': 'yellow'}
    } else {
        return {'message': 'You Win!', 'color': 'green'}
    }
}

function rpsFrontEnd(yourImageChoice, botImageChoice, finalMessage) {
    var ImageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var HumanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    HumanDiv.innerHTML = "<img src='" + ImageDataBase[yourImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    botDiv.innerHTML = "<img src='" + ImageDataBase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"

    document.getElementById('flex-box-3-div').appendChild(HumanDiv);
    document.getElementById('flex-box-3-div').appendChild(messageDiv);
    document.getElementById('flex-box-3-div').appendChild(botDiv);
}

// Change color of all buttons

let all_buttons = document.getElementsByTagName('button');

let copyButton = [];
for (let i=0; i < all_buttons.length; i++) {
    copyButton.push(all_buttons[i].classList[1]);
}

function BtnColor(change) {
    if (change.value === 'red') {
        buttonRed();
    } else if (change.value === 'green') {
        buttonGreen();
    } else if (change.value === 'reset') {
        buttonReset();
    } else if (change.value === 'random') {
        buttonRand();
    }
}

function buttonRed() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}


function buttonReset() {
    for (let i=0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyButton[i]);
    }
}

function buttonRand() {
    let choices = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];

    for (let i=0; i < all_buttons.length; i++) {
        let randNum = Math.floor(Math.random() * 4)
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randNum]);
    }
}