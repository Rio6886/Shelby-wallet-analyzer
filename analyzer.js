
export async function analyzeWallet(wallet){

return{

wallet,

txCount:Math.floor(Math.random()*300),

defiInteractions:Math.floor(Math.random()*50),

nftMints:Math.floor(Math.random()*20)

};

}
