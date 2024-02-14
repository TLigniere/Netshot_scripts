function check(device) {
    config= device.get("runningConfig")
    regex = /^interface Vlan100/m
    value = "description VLAN_USERS"
    
    Section_OBJ = device.findSections(`${config}`, `${regex}`)
    Section_STR =  (JSON.stringify(Section_OBJ));

    if (Section_STR.includes(`${value}`)){
        return CONFORMING
    }
    else {
        return NONCONFORMING
    }
}

