function check(device) {
    var config = device.get('runningConfig');
    var regex= /^ip dhcp snooping$/gm;
    var found = config.match(regex);
    var result
    
    if (found==null) {
        result=false
    }
    else {
        result=true
    }


    if (result==true){
        return CONFORMING;
    }
    else {
        return NONCONFORMING;
    }
}
