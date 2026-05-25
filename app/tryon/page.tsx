'use client'

import { useState } from 'react'

export default function TryOnPage() {
  // حالات رفع الصور والتحميل
  const [humanImage, setHumanImage] = useState<string | null>(null)
  const [garmentImage, setGarmentImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [resultImage, setResultImage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  // دالة تحويل الملف المرفوع إلى صيغة Base64 لتمريره للـ API
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'human' | 'garment') => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        if (type == 'human') setHumanImage(reader.result as string)
        if (type == 'garment') setGarmentImage(reader.result as string)
      };
      reader.readAsDataURL(file)
    }
  }

  // إرسال الطلب للسيرفر وتفعيل حالة الانتظار
  const handleGenerate = async () => {
    if (!humanImage || !garmentImage) return

    setIsLoading(true)
    setError(null)
    setResultImage(null)

    try {
      const response = await fetch('/api/tryon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          humanImage: humanImage,
          garmentImage: garmentImage,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'فشلت عملية دمج الملابس، يرجى التحقق من الرصيد أو المحاولة لاحقاً.')
      }

      setResultImage(data.resultImage)
    } catch (err: any) {
      setError(err.message || 'حدث خطأ غير متوقع.')
    } finally {
      setIsLoading(false) // إيقاف التحميل سواء نجحت العملية أو فشلت
    }
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'sans-serif', direction: 'rtl' }}>
      {/* الهيدر المتناسق مع التصميم العام */}
      <div style={{ borderBottom: '1px solid #000', padding: '24px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="/" style={{ fontSize: '20px', fontWeight: '700', color: '#000', textDecoration: 'none' }}>Vtry</a>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', color: '#666' }}>لوحة تحكم التاجر</span>
          <a href="/" style={{ fontSize: '14px', color: '#000', textDecoration: 'none' }}>الرئيسية</a>
        </div>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#000', marginBottom: '12px', textAlign: 'center' }}>غرفة القياس الذكية للتجار</h2>
        <p style={{ fontSize: '15px', color: '#666', marginBottom: '40px', textAlign: 'center' }}>ارفع صورة الموديل وصورة المنتج وقم بدمجهما فوراً لعرضها في متجرك.</p>

        {/* شبكة رفع الصور والنتائج */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '40px' }}>
          
          {/* القسم الأيمن: أدوات الرفع */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* 1. رفع صورة الموديل البشري */}
            <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '12px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '12px', fontSize: '14px' }}>1. صورة الموديل (أو التاجر):</label>
              <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, 'human')} style={{ marginBottom: '10px', display: 'block' }} />
              {humanImage && <img src={humanImage} alt="Model" style={{ width: '100%', maxHeight: '150px', objectFit: 'contain', borderRadius: '6px', marginTop: '10px' }} />}
            </div>

            {/* 2. رفع صورة قطعة الملابس */}
            <div style={{ border: '1px solid #eee', padding: '20px', borderRadius: '12px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '12px', fontSize: '14px' }}>2. صورة قطعة الملابس (المنتج):</label>
              <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, 'garment')} style={{ marginBottom: '10px', display: 'block' }} />
              {garmentImage && <img src={garmentImage} alt="Garment" style={{ width: '100%', maxHeight: '150px', objectFit: 'contain', borderRadius: '6px', marginTop: '10px' }} />}
            </div>

            {/* زر التوليد التفاعلي الذكي الذي يغلق نفسه عند التحميل */}
            <button
              onClick={handleGenerate}
              disabled={isLoading || !humanImage || !garmentImage}
              style={{
                width: '100%',
                backgroundColor: isLoading || (!humanImage || !garmentImage) ? '#666' : '#000',
                color: '#fff',
                padding: '16px',
                borderRadius: '8px',
                border: 'none',
                fontSize: '16px',
                fontWeight: '600',
                cursor: isLoading || (!humanImage || !garmentImage) ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.2s'
              }}
            >
              {isLoading ? 'جاري دمج الملابس بالذكاء الاصطناعي...' : 'توليد المظهر الافتراضي الآن ✨'}
            </button>
          </div>

          {/* القسم الأيسر: شاشة النتيجة وحالة الانتظار */}
          <div style={{ 
            border: '1px solid #000', 
            borderRadius: '12px', 
            backgroundColor: '#fafafa', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '20px',
            minHeight: '400px'
          }}>
            {isLoading ? (
              /* تصميم الـ Loading البصري الفاخر */
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  border: '3px solid #ccc',
                  borderTop: '3px solid #000',
                  borderRadius: '50%',
                  margin: '0 auto 20px',
                  animation: 'spin 1s linear infinite'
                }}></div>
                <style>{`
                  @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
                `}</style>
                <p style={{ fontSize: '15px', fontWeight: '600', color: '#000', margin: '0 0 4px' }}>يتم الآن تلبيس الموديل...</p>
                <p style={{ fontSize: '13px', color: '#666', margin: 0 }}>يستغرق محرك Vtry حوالي 10 ثوانٍ لضبط القياسات</p>
              </div>
            ) : error ? (
              /* إظهار الخطأ بشكل ودي إذا حدث */
              <div style={{ textAlign: 'center', padding: '0 20px' }}>
                <p style={{ fontSize: '32px', margin: '0 0 10px' }}>⚠️</p>
                <p style={{ fontSize: '14px', color: '#cc0000', fontWeight: '600', lineHeight: '1.4' }}>{error}</p>
              </div>
            ) : resultImage ? (
              /* عرض النتيجة النهائية */
              <div style={{ width: '100%', textAlign: 'center' }}>
                <img src={resultImage} alt="Vtry Result" style={{ width: '100%', maxHeight: '350px', objectFit: 'contain', borderRadius: '8px', marginBottom: '16px' }} />
                <p style={{ fontSize: '14px', color: 'green', fontWeight: '600' }}>🚀 تم التجهيز بنجاح!</p>
              </div>
            ) : (
              /* الحالة الافتراضية قبل الرفع */
              <div style={{ textAlign: 'center', color: '#999' }}>
                <p style={{ fontSize: '40px', margin: '0 0 16px' }}>✨</p>
                <p style={{ fontSize: '14px' }}>صورة القياس النهائي للتاجر ستظهر هنا</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  )
}