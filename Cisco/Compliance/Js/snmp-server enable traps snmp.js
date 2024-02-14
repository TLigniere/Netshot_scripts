function check(device) {
    var config = device.get('runningConfig');
    var regex= /snmp-server enable traps snmp authentication linkup linkdown coldstart warmstart/gm;
    var found = config.match(regex);
    
    if (found==null) {
        return NONCONFORMING
    }
    else {
        return CONFORMING
    }
}
