function diagnose(cli, device, diagnostic) {
	cli.macro("enable");
	var flash = cli.command("dir");
	var regex = /^\d+ bytes total \(\d+ bytes free\)$/m
    var output = String(flash.match(regex))
	diagnostic.set(output);
}
