//Script for a switch solo, with a few changes, he should be able to manage stacks but archive
//download-sw works better than this
const Input = {
    TFTPAddress: {
        label: "TFTP Adress",
        description: "E.g. 10.0.0.1",
    },
    NewFirmware: {
        label: "Firmware File name",
        description: "The name of the firmware that will be installed",
    },
    MD5Checksum: {
        label: "MD5 Checksum",
        description: "The original MD5 Checksum should be available on the cisco website when downloading a package"
    }
};




function run(cli, device) {
    // Apply commands to upgrade and wait for 
    const { TFTPAddress, NewFirmware, MD5Checksum } = cli.userInputs;
    let Verification = ""
    cli.macro("configure")
    cli.command('file prompt quiet')
    cli.command(`do copy tftp://${TFTPAddress}/${NewFirmware} flash`),
    Verification = (cli.command(`do verify /md5 flash:${NewFirmware}`))
    if (Verification.includes(`${MD5Checksum}`)){
        cli.command(`boot system flash:/${NewFirmware}`);
        cli.command("file prompt noisy");
        cli.command("do reload");
    }
    else {
        cli.command(`do delete ${NewFirmware}`)
    }

    
    cli.command("do wr");

}
