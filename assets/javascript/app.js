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
var email = "";
var age = 0;
var comment = "";

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA1-Ecyp2NlHasTNKHhoPjtGyD_FQztno4",
    authDomain: "hello-f8ef5.firebaseapp.com",
    databaseURL: "https://hello-f8ef5.firebaseio.com",
    storageBucket: "hello-f8ef5.appspot.com",
};

firebase.initializeApp(config);


// Create a variable to reference the database
var database = firebase.database();


// Capture Button Click
$("#add-user").on("click", function() {
    name = $("#name-input").val().trim();
    email = $("#email-input").val().trim();
    age = $("#age-input").val().trim();
    comment = $("#comment-input").val().trim();
    // Don't refresh the page!
    event.preventDefault();

    // YOUR TASK!!!
    // Code in the logic for storing and retrieving the most recent user.
    database.ref().set({
        name: name,
        email: email,
        age: age,
        comment: comment
    });


    // Don't forget to provide initial data to your Firebase database.

});


// Firebase watcher + initial loader HINT: .on("value")
database.ref().on("value", function(snapshot) {

    console.log(snapshot.val());
    console.log(snapshot.val().name);
    console.log(snapshot.val().email);
    console.log(snapshot.val().age);
    console.log(snapshot.val().comment);


    $("name-display").text(snapshot.val().name);
    $("email-display").text(snapshot.val().email);
    $("age-display").text(snapshot.val().age);
    $("comment-display").text(snapshot.val().comment);



    // Create Error Handling
}, function(errorObject) {
    console.log(errorObject.code);
});