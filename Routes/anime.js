const express = require("express");
const axios = require("axios").default;

const anime = express.Router();
const url = "https://api.jikan.moe/v3/search/anime";

anime.get("/", async (req, res, next) => {
    let query = req.query["q"];
    let page = Number(req.query["page"]) || 1;
    let search;

    if (!query || !page) {
        return res.status(400).json({ status: 400, data: "Bad Request" });
    }


    try{
        search = (await axios.get(`${url}?q=${query}&page=${page}`)).data;
    } catch {
        return res.status(500).json({ status: 502, data: "Bad Gateway" });
    }

    if (search.results.length == 0) {
        return res
            .status(200)
            .json({ status: 200, data: { next: null, previous: null, results: [] } });
    }

    let nextPage =
        search["last_page"] != page + 1
            ? `http://${process.env.HOST}:${process.env.PORT}/anime?q=${query}&page=${page + 1}`
            : null;

    let previousPage =
        page > 1
            ? `http://${process.env.HOST}:${process.env.PORT}/anime?q=${query}&page=${page - 1}`
            : null;

    let searchResult = {
        nextPage,
        previousPage,
        results: search.results
    };

    return res.status(200).json({ status: 200, data: searchResult });
});

module.exports = anime;
