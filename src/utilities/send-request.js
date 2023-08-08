export default async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, specifiy the method, etc.
    const options = { method };
    if (payload) {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload);
    }

    const res = await fetch(url, options);
    // if res.ok is false then something went wrong
    if (res.ok) return res.json();
    throw new Error('Bad Request');
  }