function run(cli, device) {
	// This is an example to how proceed with a command which need a confirmation
    cli.macro("enable"),
    cli.command("reload", {
        mode : {
            prompt: /Proceed with reload\? \[confirm\]/,
        },
        timeout: 300000,
    });
    cli.command("y");
}
