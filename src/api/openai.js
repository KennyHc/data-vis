import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const chatCompletion = async (content) => {

    const role = "user"
    const model = "gpt-3.5-turbo"

    return openai.chat.completions.create({
        messages: [{role: role, content: content}],
        model: model ,
    });
}

const chatCompletionTest = await openai.chat.completions.create({
    messages: [{ role: "user", content: "Say this is a test" }],
    model: "gpt-3.5-turbo",
});

module.exports = {chatCompletion,chatCompletionTest}

