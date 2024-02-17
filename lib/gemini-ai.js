// index.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

class GeminiWrap {
  constructor({ apiKey }) {
    this.genAI = new GoogleGenerativeAI(apiKey);
  }

  async generateText(prompt) {
    const model = this.genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  }
}

module.exports = GeminiWrap;