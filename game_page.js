var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");
var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;
document.getElementById("player_Q").innerHTML = "Question turn- " + player1_name;
document.getElementById("player_A").innerHTML = "Answer turn- " + player2_name;

function send() {
    get_word = document.getElementById("word").value;

var Q_turn = "player_1";
var A_turn = "player_2";
}

function check() {
    var get_answer = document.getElementById("input_check_box").value;
    var answer = get_answer.toLowerCase();
    console.log(answer);

    if(answer == word) {
        if(A_turn == "player_1") {
            player1_score = player1_score = +1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score = +1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(Q_turn == "player_1") {
        Q_turn = "player_2";
        document.getElementById("player_Q").innerHTML = "Question turn- " + player2_name;
    }
    else {
        Q_turn = "player_1";
        document.getElementById("player_Q").innerHTML = "Question turn- " + player1_name;
    }
    if(A_turn == "player_1") {
        A_turn = "player_2";
        document.getElementById("player_A").innerHTML = "Answer turn- " + player2_name;
    }
    else {
        A_turn = "player_1";
        document.getElementById("player_A").innerHTML = "Answer turn- " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}