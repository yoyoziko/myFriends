function generateFriends() {
    const numFriends = Math.floor(Math.random() * 9) + 1; // Random number of friends between 1 and 9
    const friendInfoDiv = document.getElementById("friendInfo");
    friendInfoDiv.innerHTML = "";

    const friendAge = numFriends; // Set friend's age equal to the number of friends

    for (let i = 1; i <= numFriends; i++) {
        const nickname = prompt("Enter friend " + i + "'s nickname:");
        const age = friendAge; // Set each friend's age equal to the number of friends
        const friendInfo = document.createElement("p");
        friendInfo.textContent = "Friend " + i + ": " + nickname + ", Age: " + age;
        friendInfoDiv.appendChild(friendInfo);
    }
}

function calculateTotalAge() {
    const friendInfoDiv = document.getElementById("friendInfo");
    const friends = friendInfoDiv.querySelectorAll("p");
    let totalAge = 0;
    friends.forEach(friend => {
        const age = parseInt(friend.textContent.split("Age: ")[1]);
        totalAge += age;
    });
    alert("Total Age of Friends: " + totalAge);
}

function calculateAverageAge() {
    const friendInfoDiv = document.getElementById("friendInfo");
    const friends = friendInfoDiv.querySelectorAll("p");
    let totalAge = 0;
    friends.forEach(friend => {
        const age = parseInt(friend.textContent.split("Age: ")[1]);
        totalAge += age;
    });
    const averageAge = totalAge / friends.length;
    alert("Average Age of Friends: " + averageAge.toFixed(2));
}

function calculateYoungestFriend() {
    const friendInfoDiv = document.getElementById("friendInfo");
    const friends = friendInfoDiv.querySelectorAll("p");
    let minAge = Infinity;
    let youngestFriends = [];

    friends.forEach(friend => {
        const age = parseInt(friend.textContent.split("Age: ")[1]);
        if (age < minAge) {
            minAge = age;
            youngestFriends = [friend.textContent.split(": ")[1]];
        } else if (age === minAge) {
            youngestFriends.push(friend.textContent.split(": ")[1]);
        }
    });

    alert("Youngest Friend(s): " + youngestFriends.join(", "));
}

function calculateOldestFriend() {
    const friendInfoDiv = document.getElementById("friendInfo");
    const friends = friendInfoDiv.querySelectorAll("p");
    let maxAge = -Infinity;
    let oldestFriends = [];

    friends.forEach(friend => {
        const age = parseInt(friend.textContent.split("Age: ")[1]);
        if (age > maxAge) {
            maxAge = age;
            oldestFriends = [friend.textContent.split(": ")[1]];
        } else if (age === maxAge) {
            oldestFriends.push(friend.textContent.split(": ")[1]);
        }
    });

    alert("Oldest Friend(s): " + oldestFriends.join(", "));
}

function reset() {
    document.getElementById("friendInfo").innerHTML = "";
}
