function getRandomInt(min, max) {
    // Do JS programmers seriously write this just to get a random number from a range?
    // I borrowed this code from the Internet, btw.
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function music() {
    // I can replace this script with a regular link around July 20.
    switch (getRandomInt(1, 3)) {
        case 1:
            alert("Perhaps someday there will be some kind of playlist or my profile.");
            break;
        case 2:
            alert("Whoops!");
            break;
        case 3:
            alert("Maybe I should try Spotify... And maybe it will be");
            break;
        default:
            alert('Waiting for something to happen?')
            break
    }
}