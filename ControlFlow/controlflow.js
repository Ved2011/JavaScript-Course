let userRole = "admin";
let accessLevel;

if(userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level: ", accessLevel);

let isloggedIn = true;
let userMessage;

if (isloggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
    
}
else {
    userMessage = "Please login to access system"
}

console.log(userMessage)

let userType = "subscriber";
let userCategory;

switch(userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("Category: ",userCategory);

let isAuntheticated = true;
let authstat = isAuntheticated ? "Authenticated" : "Not Authenticated";
console.log("Authentication Status: ", authstat)