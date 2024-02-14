function check(device) {
    var config = device.get('runningConfig');
    var regex= /^ip dhcp snooping$/gm;
    var found = config.match(regex);
    
    if (found==null) {
        return NONCONFORMING
    }
    else {
        return CONFORMING
    }
}
