// Initialize Firebase
var index = 0;

var config = {
  apiKey: "AIzaSyANx2eNT575hmMOsw5CVY1w0zpYscay-qU",
  authDomain: "trainproject-8d2fb.firebaseapp.com",
  databaseURL: "https://trainproject-8d2fb.firebaseio.com",
  projectId: "trainproject-8d2fb",
  storageBucket: "",
  messagingSenderId: "533164757715"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#formID").on("submit", function (event) {
    event.preventDefault();

    var name = $("#trainName").val().trim();
    var destination = $("#trainDestination").val().trim();
    var firstTime = $("#firstTrainTime").val().trim();
    var frequency = $("#frequency").val().trim();

    database.ref().push({
      name: name,
      destination: destination,
      firstTime: firstTime,
      frequency: frequency
    });

    $("#trainName").val("");
    $("#trainDestination").val("");
    $("#firstTrainTime").val("");
    $("#frequency").val("");

    return false;
  });

