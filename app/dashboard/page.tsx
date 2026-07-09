'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [credits, setCredits] = useState(3);

  useEffect(() => {
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) {
        window.location.href = '/register';
      } else {
        setUser(data.user);
        const { data: creditsData } = await supabase
          .from('user_credits')
          .select('credits')
          .eq('user_id', data.user.id)
          .single();
        if (creditsData) {
          setCredits(creditsData.credits);
        } else {
          await supabase.from('user_credits').insert({ user_id: data.user.id, credits: 3 });
          setCredits(3);
        }
        setLoading(false);
      }
    });
  }, []);

  if (loading) return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',background:'#fafaf8'}}>
      <p style={{color:'#b8952a',fontSize:'16px'}}>جاري التحميل...</p>
    </div>
  );

  return (
    <div style={{minHeight:'100vh',background:'#fafaf8',fontFamily:'DM Sans, sans-serif'}}>
      <div style={{background:'#fff',borderBottom:'1px solid #e8e8e4',padding:'18px 48px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <span style={{fontFamily:'Playfair Display, serif',fontSize:'20px',fontWeight:700,letterSpacing:'3px',color:'#0a0a0a'}}>VTRY</span>
        <div style={{display:'flex',alignItems:'center',gap:'16px'}}>
          <span style={{fontSize:'13px',color:'#9a9a94'}}>{user?.email}</span>
          <button onClick={async () => { await supabase.auth.signOut(); window.location.href = '/'; }} style={{background:'transparent',border:'1px solid #e8e8e4',padding:'8px 16px',fontSize:'12px',cursor:'pointer',color:'#5a5a56'}}>تسجيل خروج</button>
        </div>
      </div>

      <div style={{padding:'48px',maxWidth:'1100px',margin:'0 auto'}}>
        <div style={{marginBottom:'40px',textAlign:'right'}}>
          <h1 style={{fontFamily:'Playfair Display, serif',fontSize:'36px',fontWeight:700,color:'#0a0a0a',marginBottom:'8px'}}>مرحباً، <span style={{color:'#b8952a',fontStyle:'italic'}}>استوديو Vtry</span></h1>
          <p style={{fontSize:'16px',color:'#9a9a94'}}>لديك {credits} تجارب — ابدأي الآن</p>
        </div>

        <div style={{background:'#fff',border:'1px solid #e8e8e4',padding:'32px 40px',marginBottom:'32px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:'20px'}}>
          <div>
            <p style={{fontSize:'11px',letterSpacing:'2px',textTransform:'uppercase',color:'#9a9a94',marginBottom:'8px'}}>FREE CREDITS REMAINING</p>
            <div style={{fontFamily:'Playfair Display, serif',fontSize:'52px',fontWeight:700,color:'#0a0a0a',lineHeight:1}}>{credits} <span style={{fontSize:'20px',color:'#b8952a'}}>تجارب</span></div>
          </div>
          <button onClick={() => window.location.href = '/pricing'} style={{background:'#0a0a0a',color:'#fff',padding:'14px 32px',border:'none',fontSize:'13px',cursor:'pointer'}}>ترقية الخطة ↗</button>
        </div>

        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'16px',marginBottom:'40px'}}>
          {[
            {icon:'👗',title:'Virtual Try-On',ar:'تجربة افتراضية',desc:'ارفع صورة الملبس وشاهد النتيجة فوراً',href:'/tryon'},
            {icon:'✍️',title:'AI Description',ar:'وصف المنتج',desc:'توليد وصف احترافي بالعربي والإنجليزي',href:'/tryon'},
            {icon:'⚡',title:'Upgrade Plan',ar:'ترقية الخطة',desc:'500 تجربة شهرياً ومميزات إضافية',href:'/pricing'},
          ].map((item,i) => (
            <a key={i} href={item.href} style={{background:'#fff',border:'1px solid #e8e8e4',padding:'32px',cursor:'pointer',textDecoration:'none',display:'block'}}>
              <div style={{fontSize:'28px',marginBottom:'12px'}}>{item.icon}</div>
              <h3 style={{fontSize:'15px',fontWeight:600,color:'#0a0a0a',marginBottom:'4px'}}>{item.title}</h3>
              <span style={{fontSize:'13px',color:'#b8952a',display:'block',marginBottom:'8px',textAlign:'right'}}>{item.ar}</span>
              <p style={{fontSize:'12px',color:'#9a9a94',lineHeight:1.6,textAlign:'right'}}>{item.desc}</p>
            </a>
          ))}
        </div>

        <div style={{background:'#fff',border:'1px solid #e8e8e4',padding:'60px',textAlign:'center'}}>
          <div style={{fontSize:'48px',marginBottom:'16px'}}>📸</div>
          <h3 style={{fontFamily:'Playfair Display, serif',fontSize:'24px',fontWeight:700,color:'#0a0a0a',marginBottom:'8px'}}>لا توجد تجارب بعد</h3>
          <p style={{fontSize:'14px',color:'#9a9a94',marginBottom:'24px'}}>ابدأي أول تجربة افتراضية لمنتجاتك</p>
          <button onClick={() => window.location.href = '/tryon'} style={{background:'#0a0a0a',color:'#fff',padding:'14px 40px',border:'none',fontSize:'13px',cursor:'pointer'}}>ابدأي الآن ✨</button>
        </div>
      </div>
    </div>
  );
}