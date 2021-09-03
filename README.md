# API

## Run the API
#### Local environment

```sh
yarn install
yarn start
```

API is now running at `http://localhost:3000`

#### Codesandbox

- Start codesandbox: https://codesandbox.io/s/hex-convert-70wmm
- API *should* be running at https://70wmm.sse.codesandbox.io/


## Endpoints

###

```
GET /api/hex-convert
```

 #### Body parameters:
- `input`: number to convert.

Example:

```sh
curl --location --request POST 'http://localhost:3000/api/hex-convert' \
--header 'Content-Type: application/json' \
--data-raw '{
    "input": 10
}'

```

## Run tests
```sh
yarn test
```

## Codesandbox


