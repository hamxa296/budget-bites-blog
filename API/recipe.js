export default async function handler(req, res) {
  const userPrompt = req.body.prompt;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      // ✅ FIXED: Use backticks and `${}` for interpolation
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "openchat/openchat-3.5-0106",
      messages: [
        { role: "system", content: "You are a helpful AI recipe recommender." },
        { role: "user", content: userPrompt }
      ]
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
