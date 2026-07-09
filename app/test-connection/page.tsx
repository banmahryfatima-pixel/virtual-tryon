'use client';

import { useState } from 'react';
import { supabase } from '../../supabaseClient'; // استدعاء ملف الربط الذي أنشأناه

export default function TestConnectionPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  async function handleTestInsert() {
    setLoading(true);
    setMessage('');

    // إرسال بيانات تجريبية لجدول التجار
    const { data, error } = await supabase
      .from('merchants')
      .insert([
        { 
          store_name: 'متجر عبايات تجريبي', 
          email: 'test-store@vtry.com',
          phone: '0500000000'
        }
      ])
      .select(); // جلب البيانات بعد الحفظ للتأكيد

    setLoading(false);

    if (error) {
      setMessage(`❌ فشل الاتصال بالحفظ: ${error.message}`);
    } else {
      setMessage('🎉 تم الاتصال والحفظ في Supabase بنجاح تام!');
      console.log('البيانات المحفوظة:', data);
    }
  }

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: '#333' }}>صفحة اختبار اتصال قاعدة البيانات لـ Vtry 🚀</h1>
      <p style={{ color: '#666' }}>اضغطي على الزر بالأسفل لتجربة حفظ أول تاجر وهمي في Supabase</p>
      
      <button 
        onClick={handleTestInsert} 
        disabled={loading}
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: loading ? '#ccc' : '#0070f3',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginTop: '20px'
        }}
      >
        {loading ? 'جاري الحفظ والاتصال...' : 'اضغطي لاختبار الحفظ'}
      </button>

      {message && (
        <div style={{ marginTop: '30px', fontSize: '18px', fontWeight: 'bold' }}>
          {message}
        </div>
      )}
    </div>
  );
}