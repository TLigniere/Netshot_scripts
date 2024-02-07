function convertString(inputString) {
    var parts = inputString.split(",");
    var resultString = parts.join("\n");
    return resultString;
}

function diagnose(cli, device, diagnostic) {
	cli.macro("enable");
	var Switch = cli.command("sh switch")
	var Loop_flash = (Number((String((Switch.match(/^.\d/gm)))).substr(-1)))
// You might need to adjust the regex since it's looking for 9200,2960 and C1000 firmware
	var regex = /(c2960x-universalk9-mz|c1000-universalk9-mz|cat9k_lite_iosxe|^\d+ bytes total \(\d+ bytes free\)$).*/gm
    var output = "Flash of every switch in stack"
    var raw_output
    for (let i = 1; i < Loop_flash+1; i++ ) {
        raw_output = String(cli.command(`sh flash${i}:`))
	    output += (`,FLASH${i} \n`) + (String((raw_output).match(regex)));
    }
	diagnostic.set(convertString(output));
}
