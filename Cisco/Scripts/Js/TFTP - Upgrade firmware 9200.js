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
    cli.command("do install remove inactive", {
        mode:{
            prompt:/Do you want to remove the above files\? \[y\/n\]/
        },
        timeout:300000
    });
    cli.command("y");
    cli.command(`do copy tftp://${TFTPAddress}/${NewFirmware} flash`),
    Verification = (cli.command(`do verify /md5 flash:${NewFirmware}`))
    
    if (Verification.includes(`${MD5Checksum}`)){
        cli.command(`boot system flash:packages.conf`);
        cli.command("no boot manual");
        cli.command("do wr");
        cli.command(`do install add file flash:${NewFirmware} activate commit`,{
            mode:{
                prompt:/This operation may require a reload of the system\. Do you want to proceed\? \[y\/n\]/,
            },
            timeout:300000,
        });
        cli.command("y")

    }
    else {
        cli.command(`do delete ${NewFirmware}`)
    }

    
    cli.command("do wr");
