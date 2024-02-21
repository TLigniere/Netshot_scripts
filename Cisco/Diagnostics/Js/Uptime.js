function diagnose(cli, device, diagnostic) {
	cli.macro("enable");
	var flash = cli.command("sh version")
	var regex = /^.* uptime is .*/gm

	var output
	output = String((flash).match(regex));
	diagnostic.set((output));
}
