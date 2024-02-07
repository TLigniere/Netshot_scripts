//Allow to easily change whether the hostname of the device should be in Upper cases or Lower cases 
const Input = {
    Choice: {
        label: "Choice",
        description: "'A' is for UpperCases and 'B' for LowerCases; E.g. A",
    },
}


function run(cli, device) {
    const { Choice } = cli.userInputs;

	cli.macro("enable");
	let hostname = (cli.command("sh run | i hostname"));
	hostname=(hostname.match(/^hostname\s+(.*)/gm)).toString();
	let NewHostname = "Unknown-error-hostname";
	hostname = (hostname.split(" ").pop());
	if ((Choice==("A"))||(Choice==("a"))) {
	    cli.macro("configure");
	    NewHostname = (hostname.toUpperCase());
	    cli.command(`hostname ${NewHostname}`);
	    cli.command("do wr")
	}
	else if ((Choice==("B")) || (Choice==("b"))) {
	    cli.macro("configure");
	    NewHostname = (hostname.toLowerCase());
	    cli.command(`hostname ${NewHostname}`);
	    cli.command("do wr")
	 }
}
