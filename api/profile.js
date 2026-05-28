import { DatabaseSync } from 'node:sqlite';
import path from 'node:path';

const isVercel = process.env.VERCEL === '1' || process.env.VERCEL === 'true' || process.env.NOW_REGION !== undefined;
const dbPath = isVercel ? '/tmp/database.db' : path.resolve(process.cwd(), 'database.db');

const db = new DatabaseSync(dbPath);
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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // GET: Retrieve Profile
  if (req.method === 'GET') {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({ error: 'Email parameter is required.' });
    }

    try {
      const selectStmt = db.prepare('SELECT * FROM profiles WHERE email = ?');
      const row = selectStmt.get(email.toLowerCase());

      if (row) {
        return res.status(200).json({
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
        });
      } else {
        return res.status(404).json({ message: 'Profile not found.' });
      }
    } catch (err) {
      console.error('[DATABASE ERROR]', err);
      return res.status(500).json({ error: 'Failed to retrieve profile.' });
    }
  }

  // POST: Save Profile
  if (req.method === 'POST') {
    try {
      const data = req.body;
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
        return res.status(400).json({ error: 'Email field is required.' });
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

      return res.status(200).json({ success: true, message: 'Profile synchronized in SQLite.' });
    } catch (err) {
      console.error('[DATABASE ERROR]', err);
      return res.status(500).json({ error: 'Failed to synchronize profile.' });
    }
  }

  return res.status(455).json({ error: 'Method not allowed' });
}
