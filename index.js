// test 1
function shout(string) {
    return string.toUpperCase();
}
// test 2
function whisper(string) {
    return string.toLowerCase();
}
// test 3
function logShout(string) {
    console.log(string.toUpperCase());
}
// test 4
function logWhisper(string) {
    console.log(string.toLowerCase());
}
// test 5
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can\'t hear you!";
    }
// test 6
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
// test 7
    if (string === "Let\'s have dinner together!") {
        return "I would love to!";
    }
}