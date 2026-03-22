let userRole = "Subscriber";
let accessL;

switch (userRole) {
    case "Employee":
        accessL = "Access to Dietary Services";
        break;
    case "Enrolled_Member":
        accessL = "Access to Dietary Services, 1 on 1 with Dietician";
        break;
    case "Subscriber":
        accessL = "Partial access to Dietary Services";
        break;
    default:
        accessL = "Please enroll/subscribe to avail this facility"
}

console.log(accessL)