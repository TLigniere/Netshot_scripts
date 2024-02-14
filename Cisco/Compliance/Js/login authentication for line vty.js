function check(device) {
    config= device.get("runningConfig")
    regex = /^line vty/m
    description_of_int = "login authentication"
    Section_OBJ = device.findSections(`${config}`, `${regex}`)
    Section_STR =  (JSON.stringify(Section_OBJ));

    if (Section_STR.includes(`description ${descripton_of_int}`)){
        return CONFORMING
    }
    else {
        return NONCONFORMING
    }
}
