function check(device) {
    var config = device.get('runningConfig');
    var regex= /snmp-server community \w+ \w+ \d+/gm;
    var found = config.match(regex);
    
    if (found==null) {
        return NONCONFORMING
    }
    else {
        return CONFORMING
    }
}
