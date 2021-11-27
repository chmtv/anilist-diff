function calculate(): void {
    let profile1: string = (<HTMLInputElement>document.getElementById("profile1")).value;
    let profile2: string = (<HTMLInputElement>document.getElementById("profile2")).value;


    
    let apiURL: string = "http://127.0.0.1"
    console.log(`${apiURL}/?profile1=${profile1}&profile2=${profile2} `)
    fetch(`${apiURL}/?profile1=${profile1}&profile2=${profile2} `)
    .then(response => response.json())
    .then(data => {


        console.log(data);


        let user1 = data.user1;
        let user2 = data.user2;

        // Set the user cards data
        document.getElementById("userImg1").setAttribute("src", user1.profilePic);
        document.getElementById("userName1").innerHTML = user1.username;

        document.getElementById("userImg2").setAttribute("src", user2.profilePic);
        document.getElementById("userName2").innerHTML = user2.username;

        // Display the difference
        document.getElementById("resultDiv").innerHTML = `Score difference in <b>completed titles</b>: ${Math.round(data.diff)}`;


        // Animate the users and result sections to show them
        let usersEl = document.getElementById("searchedUsers");
        usersEl.style.animation = "showResult 1s forwards";
        usersEl.addEventListener("animationend", () => {
            document.getElementById("result").style.animation = "showResult 1s forwards";
        });

    });
}