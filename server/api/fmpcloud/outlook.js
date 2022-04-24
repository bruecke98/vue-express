const axios = require("axios");
const { env } = require("process");


//API für fmpcloud

let getData = async (symbol) => {
    let response = await axios(`https://fmpcloud.io/api/v4/company-outlook?symbol=${symbol.id.toUpperCase()}&apikey=${process.env.API_KEY}`);
    return response;
};
    //controller function 
    module.exports = async (req, res) => {
        let responseFact = await getData(req.params);
        res.json(responseFact.data);
    };