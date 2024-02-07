//Upgrade the firmware of a switch and his minions (if in stack)
const Input = {
    TFTPAddress: {
        label: "TFTP Adress",
        description: "E.g. 10.0.0.1",
    },
    NewFirmware: {
        label: "Firmware File name",
        description: "The name of the firmware that will be installed, must be a .tar file",
    },

};




function run(cli, device) {
    // Directly download and apply the new .bin file to all members of the stack, thanks to the
    // archive download-sw command
    const { TFTPAddress, NewFirmware } = cli.userInputs;
    cli.macro("enable")
    cli.command("wr");
    cli.command(`archive download-sw /imageonly /safe /reload tftp://${TFTPAddress}/${NewFirmware}`);
    //The /imageonly option will force download-sw to only extract the bin file from the tar file
    //as a result, every file related to the website of the devices will be ignored.
    //That doesn't mean that the website is disabled though, it's just that there's few to nothing
    //functionnality that works.
}
