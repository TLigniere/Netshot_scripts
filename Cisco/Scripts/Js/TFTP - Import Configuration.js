const Input = {
    TFTPAddress: {
        label: "TFTP Adress",
        description: "E.g. 10.0.0.1",
    },
    NewConfiguration: {
        label: "Configuration File name",
        description: "The name of the configuration files that will be used",
    },
};




function run(cli, device) {
    const { TFTPAddress, NewConfiguration } = cli.userInputs;
    
    cli.macro("configure")
    cli.command('file prompt quiet')
    cli.command("do wr")
    cli.command(`do copy tftp://${TFTPAddress}/Configuration_files/${NewConfiguration} startup-config`);
    cli.command("do reload", {
        mode: {
            prompt: /Proceed with reload\? \[confirm\]/,
        },
        timeout:300000
    });
    cli.command("y")

}
