// -------------------------------------------
// 1. DOM Element References
// ------------------------------------------
// Get references to input fields (player name, cost)
window.onload = function () {
    //ONCE WEB PAGE IS LOADED
    const submitButton = document.getElementById("submit");

    submitButton.addEventListener("click", function () {
        const inputPlayer = document.getElementById("fname").value;
        const inputCost = document.getElementById("lname").value;
        alert("Player: " + inputPlayer);
        alert("Cost: $" + inputCost);
    });
};


// Get reference to the table or list where player info will be displayed
// Get reference to the chart container if using Chart.js

// -------------------------------------------
// 2. Utility Functions
// -------------------------------------------
// Function to calculate value score (PPG / Cost)
// function fantasyVal(playerPpg, cost) {

// }
// Function to render a player's row in the UI
// Function to update or redraw the value chart with new data

// -------------------------------------------
// 3. API Interaction Functions
// -------------------------------------------
// Function to fetch player info from balldontlie.io using name
// Function to fetch stats (e.g. season averages or game logs) using player ID
// Function to handle player not found, duplicates, or errors

// -------------------------------------------
// 4. Event Handlers
// -------------------------------------------
// Form submit handler:
//   - Get player name and fantasy cost
//   - Fetch player data and stats
//   - Calculate value score
//   - Add player to UI and chart
//   - Save updated player list to localStorage

// -------------------------------------------
// 5. Local Storage Functions
// -------------------------------------------
// Function to
