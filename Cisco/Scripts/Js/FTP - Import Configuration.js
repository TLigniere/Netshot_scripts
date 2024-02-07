const Input = {
    FTPAddress: {
        label: "FTP Address",
        description: "E.g. 10.0.0.1",
    },
    NewConfiguration: {
        label: "Configuration File name",
        description: "The name of the configuration files that will be used",
    },
    FTPUsername: {
        label: "FTP Username",
        description: "Username of the User that will connect to the FTP server",
    },
    FTPPassword: {
        label: "FTP Password",
        description: "Password of the FTP User",
    },
};




function run(cli, device) {
    // Apply commands to upgrade and wait for 
    const { FTPAddress, NewConfiguration,FTPUsername,FTPPassword } = cli.userInputs;
    
    cli.macro("configure")
    cli.command('file prompt quiet')
    cli.command("do wr")
  // The script was made by thinking that you had a specific directory to pick configuration files from
    cli.command(`do copy ftp://${FTPUsername}:${FTPPassword}@${FTPAddress}/Configuration_files/${NewConfiguration} startup-config`);
    cli.command("do reload", {
        mode: {
            prompt: /Proceed with reload\? \[confirm\]/,
        },
        timeout:300000
    });
    cli.command("y")

}
