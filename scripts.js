// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    console.log('window has loaded ');

    const takeOff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const land = document.getElementById("landing");
    const abort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const shuttle = document.getElementById("rocket");
    let shuttlePosX = 0;
    let shuttlePosY = 0;
    let altitude = 0;
    //let shuttlePosition = shuttle.style.position;
    //shuttlePosition = "absolute";
    //shuttle.style.bottom = "0px";




    takeOff.addEventListener("click", function(){
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(response){
          flightStatus.innerHTML = "Shuttle in flight.";
//The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
        shuttleBackground.style.backgroundColor = "blue";
        
// The shuttle height should increase by 10,000 miles.
        altitude = 10000
        shuttleHeight.innerHTML = altitude;
        }
    });

    land.addEventListener("click", function(){

//A window alert should let the user know "The shuttle is landing. Landing gear engaged."
        let alert = window.alert("The shuttle is landing. Landing gear engaged.");
// The flight status should change to "The shuttle has landed."
        flightStatus.innerHTML = "The Shuttle has landed.";

// The background color of the shuttle flight screen should change from blue to green.
        shuttleBackground.style.backgroundColor = "green";

// The shuttle height should go down to 0.
        resetShuttle();
    });

    abort.addEventListener("click", function(){
//         A window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
        let confirm = window.confirm("Confirm that you want to abort the mission.");
        if(confirm){
            flightStatus.innerHTML = "Mission aborted.";
            resetShuttle();
        }

// The flight status should change to "Mission aborted."

// The background color of the shuttle flight screen should change from blue to green.

// The shuttle height should go to 0.
    });

    document.addEventListener("click", function(event){
        let backgroundWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));
        console.log(backgroundWidth);

        if (event.target.id === "left" && shuttlePosX > -(backgroundWidth / 2 -40)) {
            shuttlePosX -= 10;
            shuttle.style.marginLeft = shuttlePosX + "px";
        }
        if (event.target.id === "right" && shuttlePosX < (backgroundWidth /2 - 40)) {
            shuttlePosX += 10;
            shuttle.style.marginLeft = shuttlePosX + "px";
        }
        if (event.target.id === "up" && altitude < 250000) {
            shuttlePosY += 10;
            shuttle.style.marginBottom = shuttlePosY + "px";
            altitude += 10000
            shuttleHeight.innerHTML=altitude;
        }
        if (event.target.id === "down" && altitude > 0 ) {
            shuttlePosY -= 10;
            shuttle.style.marginBottom = shuttlePosY + "px";
            altitude -= 10000;
            shuttleHeight.innerHTML = altitude;
        }
    });


//The rocket image should move 10 px in the direction of the button that was clicked.

// If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles
    function resetShuttle() {
        shuttleBackground.style.backgroundColor = "green";
        altitude = 0;
        shuttleHeight.innerHTML = altitude;
        shuttlePosX = 0;
        shuttlePosY = 0;
        shuttle.style.marginLeft = shuttlePosX + "px";
        shuttle.style.marginBottom = shuttlePosY + "px";
    };



})
