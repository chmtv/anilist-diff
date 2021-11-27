function calculate() {
    var profile1 = document.getElementById("profile1").value;
    var profile2 = document.getElementById("profile2").value;
    var apiURL = "https://anilist-diff.herokuapp.com/";
    console.log("".concat(apiURL, "/?profile1=").concat(profile1, "&profile2=").concat(profile2, " "));
    fetch("".concat(apiURL, "/?profile1=").concat(profile1, "&profile2=").concat(profile2, " "))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data);
        var user1 = data.user1;
        var user2 = data.user2;
        // Set the user cards data
        document.getElementById("userImg1").setAttribute("src", user1.profilePic);
        document.getElementById("userName1").innerHTML = user1.username;
        document.getElementById("userImg2").setAttribute("src", user2.profilePic);
        document.getElementById("userName2").innerHTML = user2.username;
        // Display the difference
        document.getElementById("resultDiv").innerHTML = "Score difference in <b>completed titles</b>: ".concat(Math.round(data.diff));
        // Animate the users and result sections to show them
        var usersEl = document.getElementById("searchedUsers");
        usersEl.style.animation = "showResult 1s forwards";
        usersEl.addEventListener("animationend", function () {
            document.getElementById("result").style.animation = "showResult 1s forwards";
        });
    });
}
