function check(device) {
    var config = device.get('runningConfig');
    if ((config.includes("no ip http server")) && (config.includes("no ip http secure-server"))){
        return CONFORMING;
    }
    else {
        return NONCONFORMING
    }
}
