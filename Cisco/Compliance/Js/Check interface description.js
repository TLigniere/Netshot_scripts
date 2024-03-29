function check(device) {
    config= device.get("runningConfig")
    regex = /^interface INTERFACE_NAME/m
    value = "description DESCRIPTION"
    
    Section_OBJ = device.findSections(`${config}`, `${regex}`)
    if (Section_OBJ == "" ) {
        return {
            result: NONCONFORMING,
            comment: "Interface doesn't exist"
        }
    Section_STR =  (JSON.stringify(Section_OBJ));

    if (Section_STR.includes(`${value}`)){
        return CONFORMING
    }
    else {
        return {
            result: NONCONFORMING,
            comment: "Description is incorrect"
        }
    }
}

