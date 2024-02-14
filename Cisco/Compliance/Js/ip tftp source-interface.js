function check(device) {
    var config = device.get('runningConfig');
    var regex= /^ip tftp source-interface loopback \d+/gm;
    var found = config.match(regex);
    
    if (found==null) {
        return NONCONFORMING
    }
    else{
        return CONFORMING
    }
}
