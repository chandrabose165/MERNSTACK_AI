// task -1
function calculateUnread(total, read) {
  let unreadmessage = total - read;
  console.log(unreadmessage);
}
calculateUnread(20, 15);

// task -2
sendmessage("message sent successfully");
function sendmessage(msg) {
  console.log(msg);
}
// It throws an error in the console page
// deletemessage()
// let deletemessage = function (msg1) {
//     console.log(msg1);
// }
// task -3
const isOnline = function (status) {
  return status === "online";
};
const makeUser = function (name) {
  return name;
};
console.log(makeUser("chandrabose"), isOnline("online"));

// task - 4
function getStatusIcon(status) {
  switch (status) {
    case "online":
      console.log("🟢");
      break;
    case "away":
      console.log("🟡");
      break;
    case "busy":
      console.log("🔴");
      break;
    default:
      console.log("⚪");
      break;
  }
}
getStatusIcon("busy");
