let available_choices = ["rock", "paper", "scissors"]
let computers_choice = null
let player_choice = null

// get a random choice for the computer
function comp_choice() {
    return Math.floor(Math.random() * (0, 3))
}

// have the player choose rock, paper or scissor
function player_click(choice) {
    if(document.getElementById("two") != undefined){
        const removable_element = document.getElementById("two")
        removable_element.remove()
    }
    
    player_choice = parseInt(choice)
    computers_choice = comp_choice()
    comparesion(player_choice, computers_choice)
}
// compare the two choices
function comparesion(player, computer) {
    switch(player) {
        case 0:
            if(computer == 1) {
                computer_wins()
            }
            else if(computer == 2) {
                player_wins()
            }
            else{
                its_a_tie()
            }
            break;
        case 1:
            if(computer == 2) {
                computer_wins()
            }
            else if(computer == 0) {
                player_wins()
            }
            else{
                its_a_tie()
            }
            break;
        case 2:
            if(computer == 0) {
                computer_wins()
            }
            else if(computer == 1) {
                player_wins()
            }
            else{
                its_a_tie()
            }
            break;
    }
}

// announce a winner
function computer_wins() {
    // add html to announce computer as winner
    const div_id = document.getElementById("one") 
    let html = "<h2 id=\"two\">You loose this round. The computer chose " + available_choices[computers_choice] + "</h2>"
    div_id.insertAdjacentHTML("afterend", html)
}

function player_wins() {
    // add html to announce player as winner
    const div_id = document.getElementById("one") 
    let html = "<h2 id=\"two\">You won, congrats!</h2>"
    div_id.insertAdjacentHTML("afterend", html)
}

function its_a_tie() {
    // add html to announce a tie
    const div_id = document.getElementById("one") 
    let html = "<h2 id=\"two\">It was a tie, you both chose " + available_choices[player_choice] + "</h2>"
    div_id.insertAdjacentHTML("afterend", html)
}