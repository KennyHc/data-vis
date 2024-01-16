import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

export default async function chatCompletion(content){

    const role = "user"
    const model = "gpt-3.5-turbo"

    return openai.chat.completions.create({
        messages: [{role: role, content: content}],
        model: model ,
    });
}

