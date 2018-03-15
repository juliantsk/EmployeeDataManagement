// Initialize Firebase
var config = {
    apiKey: "AIzaSyDbP843Etby0tjajTklkaDFF4BDRKlpaJY",
    authDomain: "employeedatamanagement-54f2b.firebaseapp.com",
    databaseURL: "https://employeedatamanagement-54f2b.firebaseio.com",
    projectId: "employeedatamanagement-54f2b",
    storageBucket: "",
    messagingSenderId: "427315852863"
};
firebase.initializeApp(config);
//  START CODING BELOW!!
var name = "";
var role = "";
var start = 0;
var rate = "";

// Create a variable to reference the database
var database = firebase.database();

$(document).ready(function() {
    // Capture Button Click
    $("#add-user").on("click", function() {
        // Don't refresh the page!
        event.preventDefault();

        name = $("#name-input").val().trim();
        role = $("#role-input").val().trim();
        start = $("#start-input").val().trim();
        rate = $("#rate-input").val().trim();

        console.log(start);
        if (name !== "" && role !== "" && start !== "" && rate !== "") {
            database.ref().push({
                name: name,
                role: role,
                start: start,
                rate: rate
            });
        }
    });

    database.ref()
        .orderByChild("dateAdded")
        .limitToLast(3)
        .on("child_added", function(snapshot) {

            for (var i = 0; snapshot[i]; i++) {
                console.log(snapshot.val());
                // console.log(snapshot.val().name);
                console.log(snapshot.val().role);
                console.log(snapshot.val().start);
                console.log(snapshot.val().rate);


                $("#name-display").text(snapshot.val().name);
                $("#role-display").text(snapshot.val().role);
                $("#start-display").text(snapshot.val().start);
                $("#rate-display").text(snapshot.val().rate);


            }
            // Create Error Handling
        }, function(errorObject) {
            console.log(errorObject.code);
        });
});