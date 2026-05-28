import http from 'node:http';
import { DatabaseSync } from 'node:sqlite';

const PORT = 3001;
const GROQ_API_KEY = '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';

// Initialize SQLite database
const db = new DatabaseSync('database.db');
db.exec(`
  CREATE TABLE IF NOT EXISTS profiles (
    email TEXT PRIMARY KEY,
    dev_name TEXT,
    dev_avatar TEXT,
    dev_title TEXT,
    dev_theme TEXT,
    completed_lessons TEXT,
    completed_sql_lessons TEXT,
    completed_fastapi_lessons TEXT,
    completed_express_lessons TEXT,
    completed_python_lessons TEXT,
    completed_assignments TEXT,
    student_submissions TEXT,
    ai_feedback TEXT,
    timer_sessions_count INTEGER,
    quiz_log TEXT
  )
`);

console.log('[SYSTEM] SQLite database initialized successfully.');

// Helper to read request body
const readBody = (req) => {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => { resolve(body); });
    req.on('error', err => { reject(err); });
  });
};

const server = http.createServer(async (req, res) => {
  // Add CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle Preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  const url = new URL(req.url, `http://${req.headers.host}`);

  // Endpoint: Ping check
  if (url.pathname === '/api/ping' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'online', database: 'SQLiteSync' }));
    return;
  }

  // Endpoint: Get User Profile
  if (url.pathname === '/api/profile' && req.method === 'GET') {
    const email = url.searchParams.get('email');
    if (!email) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Email parameter is required.' }));
      return;
    }

    try {
      const selectStmt = db.prepare('SELECT * FROM profiles WHERE email = ?');
      const row = selectStmt.get(email.toLowerCase());

      if (row) {
        // Return profile
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          email: row.email,
          devName: row.dev_name,
          devAvatar: row.dev_avatar,
          devTitle: row.dev_title,
          devTheme: row.dev_theme,
          completedLessons: JSON.parse(row.completed_lessons || '[]'),
          completedSqlLessons: JSON.parse(row.completed_sql_lessons || '[]'),
          completedFastApiLessons: JSON.parse(row.completed_fastapi_lessons || '[]'),
          completedExpressLessons: JSON.parse(row.completed_express_lessons || '[]'),
          completedPythonLessons: JSON.parse(row.completed_python_lessons || '[]'),
          completedAssignments: JSON.parse(row.completed_assignments || '[]'),
          studentSubmissions: JSON.parse(row.student_submissions || '{}'),
          aiFeedback: JSON.parse(row.ai_feedback || '{}'),
          timerSessionsCount: row.timer_sessions_count || 0,
          quizLog: JSON.parse(row.quiz_log || '[]')
        }));
      } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Profile not found.' }));
      }
    } catch (err) {
      console.error('[DATABASE ERROR]', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to retrieve profile.' }));
    }
    return;
  }

  // Endpoint: Save Profile
  if (url.pathname === '/api/profile' && req.method === 'POST') {
    try {
      const bodyText = await readBody(req);
      const data = JSON.parse(bodyText);
      const {
        email,
        devName,
        devAvatar,
        devTitle,
        devTheme,
        completedLessons,
        completedSqlLessons,
        completedFastApiLessons,
        completedExpressLessons,
        completedPythonLessons,
        completedAssignments,
        studentSubmissions,
        aiFeedback,
        timerSessionsCount,
        quizLog
      } = data;

      if (!email) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Email field is required.' }));
        return;
      }

      const insertStmt = db.prepare(`
        INSERT INTO profiles (
          email, dev_name, dev_avatar, dev_title, dev_theme,
          completed_lessons, completed_sql_lessons, completed_fastapi_lessons,
          completed_express_lessons, completed_python_lessons, completed_assignments,
          student_submissions, ai_feedback, timer_sessions_count, quiz_log
        ) VALUES (
          ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
        )
        ON CONFLICT(email) DO UPDATE SET
          dev_name=excluded.dev_name,
          dev_avatar=excluded.dev_avatar,
          dev_title=excluded.dev_title,
          dev_theme=excluded.dev_theme,
          completed_lessons=excluded.completed_lessons,
          completed_sql_lessons=excluded.completed_sql_lessons,
          completed_fastapi_lessons=excluded.completed_fastapi_lessons,
          completed_express_lessons=excluded.completed_express_lessons,
          completed_python_lessons=excluded.completed_python_lessons,
          completed_assignments=excluded.completed_assignments,
          student_submissions=excluded.student_submissions,
          ai_feedback=excluded.ai_feedback,
          timer_sessions_count=excluded.timer_sessions_count,
          quiz_log=excluded.quiz_log
      `);

      insertStmt.run(
        email.toLowerCase(),
        devName || '',
        devAvatar || '',
        devTitle || '',
        devTheme || '',
        JSON.stringify(completedLessons || []),
        JSON.stringify(completedSqlLessons || []),
        JSON.stringify(completedFastApiLessons || []),
        JSON.stringify(completedExpressLessons || []),
        JSON.stringify(completedPythonLessons || []),
        JSON.stringify(completedAssignments || []),
        JSON.stringify(studentSubmissions || {}),
        JSON.stringify(aiFeedback || {}),
        timerSessionsCount || 0,
        JSON.stringify(quizLog || [])
      );

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ success: true, message: 'Profile synchronized in SQLite.' }));
    } catch (err) {
      console.error('[DATABASE ERROR]', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to synchronize profile.' }));
    }
    return;
  }

  // Endpoint: AI Assignment Grading Arena via Groq API
  if (url.pathname === '/api/grade' && req.method === 'POST') {
    try {
      const bodyText = await readBody(req);
      const data = JSON.parse(bodyText);
      const { email, trackId, title, focusArea, code, starterCode, validationKeywords } = data;

      if (!trackId || !code) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Track ID and student code are required.' }));
        return;
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
To pass, the student must score 80 or above. If they did not modify the starter code, or if the code does not implement the requirements, fail them (score < 80).
List the exact missing checkpoints if any are absent.

You MUST reply with a JSON object ONLY. Do not wrap it in markdown formatting backticks. Output exactly this JSON layout:
{
  "score": number (0 to 100),
  "passed": boolean (true if score >= 80, otherwise false),
  "praise": "detailed engineering compliments highlighting what was done well",
  "critique": "constructive criticisms indicating areas of growth, improvements, or missing keywords"
}`;

      // Call Groq API via native HTTP request
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

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        score: parsedReview.score,
        passed: parsedReview.passed,
        praise: parsedReview.praise,
        critique: parsedReview.critique
      }));

    } catch (err) {
      console.error('[AI GRADER ERROR]', err);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Failed to process AI grading with Groq.' }));
    }
    return;
  }

  // Not found fallback
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Endpoint not found.' }));
});

server.listen(PORT, () => {
  console.log(`[SYSTEM] DebugLab SQLiteSync & Groq API Gateway running on http://localhost:${PORT}`);
});
