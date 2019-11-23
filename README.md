# random-pic

Shows you a random image based on a key

## Pre-requisites

- docker (OR)
- node

## Running

### docker

- `$ docker run -p 3000:3000 -e KEY="monkey" phillipe/random-pics`

### non-docker

- `KEY="lizard" node index.js`

Then **access** `http://localhost:3000`

## "Production build"

Access: `https://random-pics.herokuapp.com` 