function check(device) {
    config= device.get("runningConfig")
    regex = /^line vty/m
    value = "transport input ssh"
    Section_OBJ = device.findSections(`${config}`, `${regex}`)
    Section_STR =  (JSON.stringify(Section_OBJ));

    if (Section_STR.includes(`${descripton_of_int}`)){
        return CONFORMING
    }
    else {
        return NONCONFORMING
    }
}