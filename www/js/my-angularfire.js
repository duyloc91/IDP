function add(username, password) {
    var myFirebaseRef = new Firebase("https://boiling-torch-6781.firebaseio.com/users");
    myFirebaseRef.push({
        username: username,
        password: password
    });
}