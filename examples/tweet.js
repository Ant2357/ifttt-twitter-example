const dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const sendJson = JSON.stringify({ value1: 'test' });
const tweetEventName = process.env.TWEET_EVENT_NAME;
const webHooksKey = process.env.WEB_HOOKS_KEY;

const url = `https://maker.ifttt.com/trigger/${tweetEventName}/with/key/${webHooksKey}`;
fetch(url, {
  method: "POST",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: sendJson
}).then(res => {
  console.log(res);
}).catch(err => {
  console.error(err);
});
