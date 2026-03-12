
import readline from "readline";
import {analyzeWallet} from "./analyzer.js";

const rl = readline.createInterface({
input:process.stdin,
output:process.stdout
});

rl.question("Wallet: ", async(wallet)=>{

const data = await analyzeWallet(wallet);

console.log(data);

rl.close();

});
