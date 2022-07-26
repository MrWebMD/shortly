# Shortly

Shortly is a derivative of one of my own projects called Embedly. Shortly is a url shortener, you can give it any web url and it will create a short sharable one for you. [Visit live Shortley website](http://shortly.mrwebmd.com), or perform this easy set up.

## Installation

Navigate to the root folder of the project and use the node package manager [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to install all node dependencies.

```bash
npm install
```

## Environment
Shortly requires that a file named `.env` exists in the root directory of the project. Create a file named `.env` located at `/shortly/.env`. Next, replace the contents of the file with the template below.

```
DB_USER=production
DB_PASS=YOURDBPASSWORD
NODE_ENV=production
PORT=3003
```
Once you've saved this, your environment is all set up!

## Usage
```
node index.js
```

## License
[MIT](https://mit-license.org/)