'use client';

import { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleLogin() {
    if (!email || !password) {
      setError('يرجى ملء جميع الحقول');
      return;
    }
    setLoading(true);
    setError('');

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);
    if (error) {
      setError('البريد الإلكتروني أو كلمة المرور غير صحيحة');
    } else {
      window.location.href = '/dashboard';
    }
  }

  async function handleGoogle() {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: window.location.origin + '/dashboard' }
    });
  }

  return (
    <div style={{minHeight:'100vh',background:'#fafaf8',display:'flex',alignItems:'center',justifyContent:'center',padding:'40px 24px',fontFamily:'DM Sans, sans-serif'}}>
      <div style={{width:'100%',maxWidth:'420px',background:'#fff',border:'1px solid #e8e8e4',padding:'48px 40px'}}>

        <div style={{textAlign:'center',marginBottom:'32px'}}>
          <span style={{fontFamily:'Playfair Display, serif',fontSize:'22px',fontWeight:700,letterSpacing:'3px',color:'#0a0a0a'}}>VTRY</span>
          <p style={{fontSize:'13px',color:'#9a9a94',marginTop:'8px'}}>سجّل دخولك لمتابعة عملك</p>
        </div>

        <div style={{background:'#f5edd6',border:'1px solid rgba(184,149,42,0.3)',padding:'10px 16px',marginBottom:'24px',textAlign:'center'}}>
          <p style={{fontSize:'12px',color:'#b8952a'}}>✦ لديك 3 تجارب مجانية بانتظارك</p>
        </div>

        {error && (
          <div style={{background:'#fef2f2',border:'1px solid #fecaca',padding:'12px 16px',marginBottom:'16px',fontSize:'13px',color:'#dc2626',textAlign:'center'}}>
            {error}
          </div>
        )}

        <div style={{marginBottom:'16px'}}>
          <label style={{fontSize:'11px',letterSpacing:'1px',textTransform:'uppercase',color:'#5a5a56',display:'block',marginBottom:'8px'}}>البريد الإلكتروني</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{width:'100%',padding:'12px 16px',border:'1px solid #e8e8e4',background:'#fafaf8',fontSize:'14px',color:'#0a0a0a',outline:'none',fontFamily:'DM Sans, sans-serif'}}
          />
        </div>

        <div style={{marginBottom:'24px'}}>
          <label style={{fontSize:'11px',letterSpacing:'1px',textTransform:'uppercase',color:'#5a5a56',display:'block',marginBottom:'8px'}}>كلمة المرور</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            style={{width:'100%',padding:'12px 16px',border:'1px solid #e8e8e4',background:'#fafaf8',fontSize:'14px',color:'#0a0a0a',outline:'none',fontFamily:'DM Sans, sans-serif'}}
          />
        </div>

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{width:'100%',padding:'14px',background:loading?'#ccc':'#0a0a0a',color:'#fff',border:'none',fontSize:'13px',fontWeight:500,letterSpacing:'0.5px',cursor:loading?'not-allowed':'pointer',marginBottom:'12px',fontFamily:'DM Sans, sans-serif'}}
        >
          {loading ? 'جاري الدخول...' : 'تسجيل الدخول'}
        </button>

        <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'12px'}}>
          <div style={{flex:1,height:'1px',background:'#e8e8e4'}}></div>
          <span style={{fontSize:'12px',color:'#9a9a94'}}>أو</span>
          <div style={{flex:1,height:'1px',background:'#e8e8e4'}}></div>
        </div>

        <button
          onClick={handleGoogle}
          style={{width:'100%',padding:'13px',background:'#fff',color:'#0a0a0a',border:'1px solid #e8e8e4',fontSize:'13px',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',gap:'8px',marginBottom:'24px',fontFamily:'DM Sans, sans-serif'}}
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          الدخول بـ Google
        </button>

        <p style={{textAlign:'center',fontSize:'13px',color:'#9a9a94'}}>
          ما عندك حساب؟{' '}
          <a href="/register" style={{color:'#b8952a',textDecoration:'none'}}>سجّل مجاناً</a>
        </p>

        <p style={{textAlign:'center',fontSize:'13px',color:'#9a9a94',marginTop:'8px'}}>
          <a href="/" style={{color:'#9a9a94',textDecoration:'none'}}>← العودة للرئيسية</a>
        </p>

      </div>
    </div>
  );
}