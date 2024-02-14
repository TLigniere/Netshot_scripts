function check(device) {
    var config = device.get('runningConfig');
    var regex= /^ip radius source-interface \w+ |^ip tacacs source-interface \w+ /gm;
    var found = config.match(regex);
    
    if (found==null) {
        return NONCONFORMING
    }
    else{
        return CONFORMING
    }
}
