//Upgrade the firmware of a switch and his minions (if in stack)
const Input = {
    FTPAddress: {
        label: "FTP Adress",
        description: "E.g. 10.0.0.1",
    },
    UsernameFTP: {
        label: "Username",
        description: "Username to connect to the FTP server",
    },
    PasswordFTP: {
        label: "Password",
        description: "Password of the FTP user",
    },
    
    NewFirmware: {
        label: "Firmware File name",
        description: "The name of the firmware that will be installed, must be a .tar file",
    },

};




function run(cli, device) {
    // Directly download and apply the new .bin file to all members of the stack, thanks to the
    // archive download-sw command
    const { FTPAddress, NewFirmware, PasswordFTP, UsernameFTP } = cli.userInputs;
    cli.macro("enable");
    cli.command("wr");
    cli.macro("configure");
    cli.command(`ip ftp username ${UsernameFTP}`);
    cli.command(`ip ftp password ${PasswordFTP}`)
    cli.command(`do archive download-sw /imageonly /safe /force-reload ftp://${FTPAddress}/${NewFirmware}`);
    //The /imageonly option will force download-sw to only extract the bin file from the tar file
    //as a result, every file related to the website of the devices will be ignored.
    //That doesn't mean that the website is disabled though, it's just that there's few to nothing
    //functionnality that works.
}
