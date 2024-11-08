function niceLogger(){
    console.log("Hello World!");
    return "Hello World.";
}

function sampleTest() {
    return "Hey I'm a sample function.";
}

function messageRepeater(messageToRepeat){
    // message repeater functionality
    if (Array.isArray(messageToRepeat)){
        // sth
        console.log(...messageToRepeat, ...messageToRepeat, ...messageToRepeat);
    }
    else {
    let stringMessageToRepeat = messageToRepeat.toString();
    return stringMessageToRepeat + stringMessageToRepeat + stringMessageToRepeat;
}
}
module.exports = {
    niceLogger 
    sampleTest
    messageRepeater
}