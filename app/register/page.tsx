'use client';

import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  async function handleRegister() {
    if (!name || !email || !password) {
      setIsError(true);
      setMessage('يرجى ملء جميع الحقول');
      return;
    }
    setLoading(true);
    setMessage('');

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } }
    });

    setLoading(false);
    if (error) {
      setIsError(true);
      setMessage(error.message);
    } else {
      setIsError(false);
      setMessage('🎉 تم التسجيل بنجاح! جاري تحويلك...');
setTimeout(() => { window.location.href = '/dashboard'; }, 1500);
    }
  }

  async function handleGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin + '/dashboard' }
    });
  }

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #fafaf8; font-family: 'DM Sans', sans-serif; }
        .page { min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: 40px 24px; }
        .card { width: 100%; max-width: 440px; background: #fff; border: 1px solid #e8e8e4; padding: 48px 40px; }
        .logo { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 700; letter-spacing: 3px; color: #0a0a0a; text-align: center; margin-bottom: 8px; }
        .logo-dot { display: inline-block; width: 6px; height: 6px; background: #b8952a; border-radius: 50%; margin-left: 2px; vertical-align: middle; }
        .tagline { font-family: 'Noto Kufi Arabic', sans-serif; font-size: 13px; color: #9a9a94; text-align: center; margin-bottom: 36px; direction: rtl; }
        .label { font-size: 11px; letter-spacing: 1px; text-transform: uppercase; color: #5a5a56; margin-bottom: 8px; display: block; }
        .input { width: 100%; padding: 12px 16px; border: 1px solid #e8e8e4; background: #fafaf8; font-family: 'DM Sans', sans-serif; font-size: 14px; color: #0a0a0a; margin-bottom: 20px; outline: none; transition: border-color 0.2s; }
        .input:focus { border-color: #b8952a; }
        .btn-main { width: 100%; padding: 14px; background: #0a0a0a; color: #fff; border: none; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 0.5px; cursor: pointer; transition: background 0.2s; margin-bottom: 12px; }
        .btn-main:hover { background: #b8952a; }
        .btn-main:disabled { background: #ccc; cursor: not-allowed; }
        .divider { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .divider-line { flex: 1; height: 1px; background: #e8e8e4; }
        .divider-text { font-size: 12px; color: #9a9a94; }
        .btn-google { width: 100%; padding: 13px; background: #fff; color: #0a0a0a; border: 1px solid #e8e8e4; font-family: 'DM Sans', sans-serif; font-size: 13px; cursor: pointer; transition: border-color 0.2s; display: flex; align-items: center; justify-content: center; gap: 8px; margin-bottom: 24px; }
        .btn-google:hover { border-color: #0a0a0a; }
        .google-icon { width: 18px; height: 18px; }
        .message { padding: 12px 16px; font-size: 13px; margin-bottom: 16px; text-align: center; }
        .message-error { background: #fef2f2; color: #dc2626; border: 1px solid #fecaca; }
        .message-success { background: #f0fdf4; color: #16a34a; border: 1px solid #bbf7d0; }
        .footer-link { text-align: center; font-size: 13px; color: #9a9a94; }
        .footer-link a { color: #b8952a; text-decoration: none; }
        .footer-link a:hover { text-decoration: underline; }
        .free-badge { background: #f5edd6; border: 1px solid rgba(184,149,42,0.3); padding: 10px 16px; text-align: center; margin-bottom: 28px; }
        .free-badge p { font-size: 12px; color: #b8952a; letter-spacing: 0.5px; }
      `}</style>

      <div className="page">
        <div className="card">
          <div className="logo">VTRY<span className="logo-dot"></span></div>
          <p className="tagline">ابدأ تجربتك المجانية — 3 تجارب مجانية بدون بطاقة</p>

          <div className="free-badge">
            <p>✦ 3 تجارب افتراضية مجانية عند التسجيل</p>
          </div>

          {message && (
            <div className={`message ${isError ? 'message-error' : 'message-success'}`}>
              {message}
            </div>
          )}

          <label className="label">الاسم الكامل</label>
          <input
            className="input"
            type="text"
            placeholder="فاطمة محمد"
            value={name}
            onChange={e => setName(e.target.value)}
          />

          <label className="label">البريد الإلكتروني</label>
          <input
            className="input"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <label className="label">كلمة المرور</label>
          <input
            className="input"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button className="btn-main" onClick={handleRegister} disabled={loading}>
            {loading ? 'جاري التسجيل...' : 'إنشاء حساب مجاني'}
          </button>

          <div className="divider">
            <div className="divider-line"></div>
            <span className="divider-text">أو</span>
            <div className="divider-line"></div>
          </div>

          <button className="btn-google" onClick={handleGoogle}>
            <svg className="google-icon" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            التسجيل بـ Google
          </button>

          <p className="footer-link">
            عندك حساب؟ <a href="/login">سجّل دخول</a>
          </p>
        </div>
      </div>
    </>
  );
}