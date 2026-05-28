const GROQ_API_KEY = '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';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(455).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;
    const { email, trackId, title, focusArea, code, starterCode, validationKeywords } = data;

    if (!trackId || !code) {
      return res.status(400).json({ error: 'Track ID and student code are required.' });
    }

    console.log(`[AI GRADER] Initiating real-time Groq evaluation for track: ${trackId} (${email})`);

    const systemPrompt = `You are a strict, senior software engineering automated compiler and AI tutor grading student assignment projects at DebugLab.
Evaluate the student's submitted code against the target guidelines, the original starter code, and the required validation keywords.

Assignment Title: "${title}"
Focus Area: "${focusArea}"
Starter Template Code:
"""
${starterCode}
"""
Required Validation Keywords (must exist in code): [${validationKeywords.join(', ')}]

Evaluate the code carefully. Calculate a score from 0 to 100.
To pass, the student must score 70 or above. If they did not modify the starter code, or if the code does not implement the requirements, fail them (score < 70).
List the exact missing checkpoints if any are absent.

You MUST reply with a JSON object ONLY. Do not wrap it in markdown formatting backticks. Output exactly this JSON layout:
{
  "score": number (0 to 100),
  "passed": boolean (true if score >= 70, otherwise false),
  "praise": "detailed engineering compliments highlighting what was done well",
  "critique": "constructive criticisms indicating areas of growth, improvements, or missing keywords"
}`;

    const groqResponse = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Student Code Submission:\n\n${code}` }
        ],
        temperature: 0.1,
        response_format: { type: 'json_object' }
      })
    });

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text();
      throw new Error(`Groq API failure: ${groqResponse.status} - ${errorText}`);
    }

    const groqData = await groqResponse.json();
    const aiReplyText = groqData.choices[0].message.content;
    console.log('[AI REPLY]', aiReplyText);

    const parsedReview = JSON.parse(aiReplyText);

    return res.status(200).json({
      score: parsedReview.score,
      passed: parsedReview.passed,
      praise: parsedReview.praise,
      critique: parsedReview.critique
    });

  } catch (err) {
    console.error('[AI GRADER ERROR]', err);
    return res.status(500).json({ error: 'Failed to process AI grading with Groq.' });
  }
}
