const NetlifyAPI = require("netlify");
const client = new NetlifyAPI(process.env.TOKEN);

// Fetch
async function getFunctions(client) {
  try {
    // request
    const api = await client.listSites();
    console.log(api);
    // map out funcitions
    let functions = api.map(r => {
      console.log();
      return r.url;
    });
    console.log(urls);
    return urls;
  } catch (e) {
    console.log(e);
    // handle error
  }
}

export default getFunctions;
