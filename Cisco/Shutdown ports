//Shutdown ports from netshot 
const Input = {
    portNumber: {
        label: "Port Number",
        description: "E.g. gi1/0/1 or gi1/0/1-2",
    },
    portState: {
        label: "State of port",
        description: "'y' for enabling the port, disable it by default",
        optional: true,
    },
};




function run(cli, device) {
    const { portNumber, portState } = cli.userInputs;
    cli.macro("configure");
    cli.command(`int range ${portNumber}`);
    if (portState == "y" || "Y") {
        cli.command(`no shutdown`);
    }
    else {
        cli.command(`shutdown`);
    }
    cli.macro("end");
    cli.macro("save");
}
