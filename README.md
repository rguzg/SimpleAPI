# SimpleAPI

This is a Simple API built for Wizeline's Go Bootcamp Technical Challenge

## Installation Instructions
1. Clone this repository
1. Rename the file `.example.env` to `.env`. This file contains the environment variables for your project
1. You can either run this repo using a Docker container or locally on your computer

### Docker
1. Add the `EXPOSE_PORT` to the .env file. This variable indicates the port that Docker will expose to your computer
1. Replace the `HOST` and `PORT` variables placeholders. `HOST` indicates the hostname that the server will use. `PORT` indicates the port number that the server will use internally
1. Run `docker compose up` to spin up the container

### Locally
1. Execute the `npm install` command to install the project's dependencies
1. Replace the `HOST` and `PORT` variables placeholders. `HOST` indicates the hostname that the server will use. `PORT` indicates the port number that the server will use
1. Run `npm start` to start the server

## Testing instructions
To run this project's unit tests run the `npm test` command. To run a specific test suite run the command `jest <test suite name>`

## Endpoints
This project has the following endpoints

### Hello World

#### `GET /helloworld`
This endpoint returns a simple Hello World message

- Example Request
```bash
curl http://localhost:8008/helloworld
```

- Example Response
```bash
Hello World
```
#### `GET /anime`
Searches for anime on MyAnimeList

- Query Parameters

|Name |Description  | Required?|
--- | --- | ---
|q|Search query. The query is not case sensitive|Yes|
|page|Which result page to show. Default value is 1|No|

- Example Request: Searching for 'Haikyuu'
```bash
curl http://localhost:8008/anime?q=haikyuu
```

- Example Response
```bash
{
    "status":200,
    "data":
        {
        "nextPage":"http://localhost:8009/anime?q=haikyuu&page=2",
        "previousPage":null,
        "results":[
        {
            "mal_id":20583,
            "url":"https://myanimelist.net/anime/20583/Haikyuu",
            "image_url":"https://cdn.myanimelist.net/images/anime/7/76014.jpg?s=ef5c00cb929dcd690c87f56e6d1b0c8a",
            "title":"Haikyuu!!",
            "airing":false,
            "synopsis":"Inspired after watching a volleyball ace nicknamed \"Little Giant\" in action, small-statured Shouyou Hinata revives the volleyball club at his middle school. The newly-formed team even makes it to a to...",
            "type":"TV",
            "episodes":25,
            "score":8.47,
            "start_date":"2014-04-06T00:00:00+00:00",
            "end_date":"2014-09-21T00:00:00+00:00",
            "members":1479916,
            "rated":"PG-13"
        },...]
}
```
- Example Request: Searching for 'Code Geass' on page 2
```bash
curl http://localhost:8008/anime?q=code%20geass&page=2
```

- Example Response
```bash
{
  "status": 200,
  "data": {
    "nextPage": "http://localhost:8009/anime?q=code geass&page=3",
    "previousPage": "http://localhost:8009/anime?q=code geass&page=1",
    "results": [
    {
        "mal_id": 10702,
        "url": "https://myanimelist.net/anime/10702/Tekken__Blood_Vengeance",
        "image_url": "https://cdn.myanimelist.net/images/anime/1078/112635.jpg?s=8192c98b8daf79c33bfd846eaa3ee08a",
        "title": "Tekken: Blood Vengeance",
        "airing": false,
        "synopsis": "High school student Ling Xiaoyu is recruited by Anna Williams of G Corporation to transfer to Kyoto University and gather information on a student named Shin Kamiya. Meanwhile, Jin Kazama, the current...",
        "type": "Movie",
        "episodes": 1,
        "score": 6.64,
        "start_date": "2011-07-26T00:00:00+00:00",
        "end_date": "2011-07-26T00:00:00+00:00",
        "members": 19640,
        "rated": "PG-13"
    }...],
}
```
