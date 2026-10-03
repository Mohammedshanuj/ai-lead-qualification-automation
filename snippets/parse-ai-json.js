const text = $json.output[0].content[0].text;

const cleaned = text
  .replace(/```json/g, '')
  .replace(/```/g, '')
  .trim();

const parsed = JSON.parse(cleaned);

return [
  {
    json: {
      score: parsed.score,
      category: parsed.category,
      summary: parsed.summary,
      recommendedAction: parsed.recommendedAction,
    },
  },
];
