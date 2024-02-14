function check(device) {
    var config = device.get('runningConfig');
    var regex= /^service tcp-keepalives-out/gm;
    var found = config.match(regex);
    
    if (found==null) {
        return NONCONFORMING
    }
    else {
        return CONFORMING
    }
}
