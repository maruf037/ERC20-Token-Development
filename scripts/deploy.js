async function main() {
    const [deployer] = await ethers.getSigners();

    console.log('Deploying contracts with the account:', deployer.address);

    const weiAmount = (await deployer.getBalance()).toString();

    console.log('Account balance:', (await ethers.utils.formatEther(weiAmount)));
    
    // Make sure to replace the 'bdToken' reference with your own ERC20 name!
    const Token = await ethers.getContractFactory('bdToken');
    const token = await Token.deploy();

    console.log('Token address:', token.address);

    main()
        .then(() => process.exit(0))
        .catch(error => {
            console.error(error);
            process.exit(1);
        });
}