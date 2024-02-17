
const GeminiWrap = require("./lib/gemini-ai");

const wrap = new GeminiWrap({ apiKey: process.env.API_KEY });

async function run() {
  const text = await wrap.generateText("cara membuat mie instan");
  console.log(text);
}

run();
