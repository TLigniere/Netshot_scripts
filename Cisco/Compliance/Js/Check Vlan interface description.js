function check(device) {
    config= device.get("runningConfig")
    regex = /^interface Vlan100/m
    description_of_int = "VLAN_USERS"
    Section_OBJ = device.findSections(`${config}`, regex)
    Section_STR =  (JSON.stringify(Section_OBJ));

    if (Section_STR.includes(`description ${descripton_of_int}`)){
        return CONFORMING
    }
    else {
        return NONCONFORMING
    }

}
//Check if the the interface Vlan100 got the description "VLAN_USERS", if no the case, the script return NONCONFORMING
