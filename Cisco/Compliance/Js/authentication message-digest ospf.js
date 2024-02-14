function check(device) {
    config= device.get("runningConfig")
    regex = /^router ospf/gm
    value = /area \d+ authentication message-digest/gm
    
    Section_OBJ = device.findSections(`${config}`, `${regex}`)
    Section_STR =  (JSON.stringify(Section_OBJ));

    if (Section_STR.match(`${value}`)){
        return CONFORMING
    }
    else {
        return NONCONFORMING
    }
}
