function check(device) {
    var config = device.get('runningConfig');
    var regex= /no ip proxy-arp/gm;
    var found = config.match(regex);
    
    if (found!=null) {
        return NONCONFORMING
    }
    else {
        return CONFORMING
    }
}
