function check(device) {
    config= device.get("runningConfig")
    regex = /^line con/m
    snd_regex = /exec-timeout .*/m
  
    Section_OBJ = device.findSections(`${config}`, `${regex}`)
    Section_STR =  (JSON.stringify(Section_OBJ));

    result = Section_STR.match(snd_regex)
  
    if (result==null){
      return NONCONFORMING
    }
  
    min = Number(result.match(/\d+/))
    sec = Number(result.match(/\d+$/))
  
    if (((min==10) && (sec==0)) | ((min<10)&&(sec<59))) {
        return CONFORMING
    }
    else {
        return NONCONFORMING
    }
}
