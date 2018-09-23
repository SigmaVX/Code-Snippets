
// Buy Low, Sell High -- Starter Code


// Stock Prices
var stockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];

// Tony's Answer - Biggest Profit function
profitCalc = () =>{

    let maxProfit = 0;
    let bestBuyPrice = 0;
    let bestSellPrice = 0;
    for(i=0; i<stockPrices.length; i++){
        let buyPrice = stockPrices[i];
        for(j=0; j<stockPrices.length; j++){
            let sellPrice = stockPrices[j];
            let possibleProfit = buyPrice - sellPrice;
            if(possibleProfit > maxProfit){
                maxProfit = possibleProfit;
                bestBuyPrice = buyPrice;
                bestSellPrice = sellPrice;
            }
        }    
    }

    console.log("Best Buy Price: ", bestBuyPrice," Best Sell Price: ", bestSellPrice);
    console.log("Max Profit: ", maxProfit);
}


// A Call to your Biggest Profit function.
profitCalc();


