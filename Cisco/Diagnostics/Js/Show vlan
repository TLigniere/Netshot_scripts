//Show vlans but only with their address to ease lisability
function convertString(inputString) {
    var parts = inputString.split(",");
    var resultString = parts.join("\n");
    return resultString;
}


function diagnose(cli, device, diagnostic) {
	cli.macro("enable");
	var config = cli.command("show run | s Vlan");
    var regex = /^(interface Vlan\d+| ip address \d+\.\d+\.\d+\.\d+ \d+\.\d+\.\d+\.\d+| no ip address).*/gm
	var output = String(config.match(regex));
	diagnostic.set(convertString(output));
}
