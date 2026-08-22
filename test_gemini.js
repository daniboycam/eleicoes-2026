const { generateText } = require("ai");
const { google } = require("@ai-sdk/google");

async function test() {
  try {
    const result = await generateText({
      model: google("gemini-1.5-flash-latest"),
      prompt: "hi"
    });
    console.log("Success:", result.text);
  } catch (e) {
    console.error("Error:", e.message);
  }
}
test();

