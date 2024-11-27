let available_choices = ["rock", "paper", "scissors"]
let computers_choice = null
let player_choice = null

// get a random choice for the computer
function comp_choice() {
    return Math.floor(Math.random() * (0, 3))
}

// have the player choose rock, paper or scissor
function player_click(choice) {
    player_choice = choice
    computers_choice = comp_choice()
    comparesion()
}
// compare the two choices
function comparesion() {
    console.log("cmp choice " + computers_choice + " play choice " + player_choice)

    switch(player_choice) {
        case 0:
            if(computers_choice == 1) {
                computer_wins()
            }
            else if(computers_choice == 2) {
                player_wins()
            }
            else{
                its_a_tie()
            }
            break;
        case 1:
            if(computers_choice == 2) {
                computer_wins()
            }
            else if(computers_choice == 0) {
                player_wins()
            }
            else{
                its_a_tie()
            }
            break;
        case 2:
            if(computers_choice == 0) {
                computer_wins()
            }
            else if(computers_choice == 1) {
                player_wins()
            }
            else{
                its_a_tie()
            }
            break;
    }
}

// announce a winner
