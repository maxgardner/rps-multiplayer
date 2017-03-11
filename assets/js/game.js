var database = firebase.database();

// Manage games, only two users per game. Once two users sign up, pair them together

// Set up game

function startGame() {
	database.ref("game/")
}

// Create an anonymous user

function makeUser(username) {

	// Sign user in anonymously

	firebase.auth().signInAnonymously().catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  console.log(errorCode);
	  console.log(errorMessage);
	  // ...
	});

	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
	    // User is signed in.
	    var isAnonymous = user.isAnonymous;
	    var uid = user.uid;
	    // ...
	  } else {
	    // User is signed out.
	    // ...
	  }
	  // ...
	});

	console.log(firebase.auth().currentUser);

	return firebase.auth().currentUser;
}



$(document).on("click", "#user-signup", function(event) {
	event.preventDefault();
	var username = $("#username").val().trim();
	var user1 = makeUser(username);
	console.log(user1);

	// Update their user profile to include a username

	user1.updateProfile({
	  displayName: username,
	}).then(function() {
	  // Update successful.
	}, function(error) {
	  // An error happened.
	});

});