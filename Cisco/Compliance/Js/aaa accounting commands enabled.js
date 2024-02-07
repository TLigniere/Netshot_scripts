function check(device) {
    var config = device.get('runningConfig');
    if (config.includes("aaa accounting commands")){
        return CONFORMING;
    }
    else {
        return NONCONFORMING
    }
}
