'use client';

import { useState } from 'react';

export default function TryOnPage() {
  const [humanImage, setHumanImage] = useState<string | null>(null);
  const [garmentImage, setGarmentImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('upper_body');

  const toBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const handleImage = async (file: File, type: 'human' | 'garment') => {
    const base64 = await toBase64(file);
    if (type === 'human') setHumanImage(base64);
    else setGarmentImage(base64);
  };

  const handleTryOn = async () => {
    if (!humanImage || !garmentImage) {
      setError('يرجى رفع صورة العارض وصورة الملبس');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/tryon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ humanImage, garmentImage, category }),
      });
      const data = await res.json();
      if (data.error) setError(data.error);
      else setResultImage(data.resultImage);
    } catch {
      setError('حدث خطأ، حاولي مرة أخرى');
    }
    setLoading(false);
  };

  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #fafaf8; font-family: 'DM Sans', sans-serif; }
        .page { min-height: 100vh; padding: 40px 60px; }
        .header { margin-bottom: 48px; }
        .header a { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 700; letter-spacing: 3px; color: #0a0a0a; text-decoration: none; }
        .title { font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 700; color: #0a0a0a; margin-bottom: 8px; }
        .subtitle { font-size: 14px; color: #9a9a94; }
        .grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; margin-top: 40px; }
        .card { background: #fff; border: 1px solid #e8e8e4; padding: 28px; }
        .card-title { font-size: 12px; letter-spacing: 2px; text-transform: uppercase; color: #b8952a; margin-bottom: 16px; }
        .upload-area {
          border: 1.5px dashed #e8e8e4; padding: 32px 16px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          cursor: pointer; transition: border-color 0.2s; text-align: center; position: relative;
          min-height: 200px;
        }
        .upload-area:hover { border-color: #b8952a; }
        .upload-area input { position: absolute; inset: 0; opacity: 0; cursor: pointer; }
        .upload-area img { width: 100%; max-height: 200px; object-fit: contain; }
        .upload-icon { font-size: 32px; margin-bottom: 12px; }
        .upload-text { font-size: 13px; color: #9a9a94; }
        .category-select {
          width: 100%; padding: 10px 14px; margin-top: 16px;
          border: 1px solid #e8e8e4; background: #fafaf8;
          font-family: 'DM Sans', sans-serif; font-size: 13px; color: #0a0a0a;
          cursor: pointer;
        }
        .btn {
          width: 100%; padding: 16px; margin-top: 16px;
          background: #0a0a0a; color: #fff; border: none;
          font-family: 'DM Sans', sans-serif; font-size: 13px;
          letter-spacing: 1px; text-transform: uppercase;
          cursor: pointer; transition: background 0.2s;
        }
        .btn:hover { background: #b8952a; }
        .btn:disabled { background: #ccc; cursor: not-allowed; }
        .result-area {
          min-height: 200px; display: flex; align-items: center; justify-content: center;
          border: 1px solid #e8e8e4; background: #f4f4f2;
        }
        .result-area img { width: 100%; object-fit: contain; }
        .result-placeholder { text-align: center; color: #9a9a94; }
        .result-placeholder .icon { font-size: 40px; margin-bottom: 12px; }
        .result-placeholder p { font-size: 13px; }
        .error { color: #e53e3e; font-size: 13px; margin-top: 12px; text-align: center; }
        .loading { text-align: center; color: #b8952a; font-size: 13px; padding: 40px; }
        .download-btn {
          width: 100%; padding: 12px; margin-top: 12px;
          background: #b8952a; color: #fff; border: none;
          font-family: 'DM Sans', sans-serif; font-size: 12px;
          letter-spacing: 1px; text-transform: uppercase;
          cursor: pointer; transition: background 0.2s; text-align: center; display: block;
        }
        .download-btn:hover { background: #0a0a0a; }
        @media (max-width: 900px) {
          .page { padding: 24px; }
          .grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="page">
        <div className="header">
          <a href="/">VTRY</a>
        </div>
        <h1 className="title">Virtual Try-On</h1>
        <p className="subtitle">ارفع صورة العارض وصورة الملبس — شاهد النتيجة في ثوانٍ</p>

        <div className="grid">
          {/* صورة العارض */}
          <div className="card">
            <p className="card-title">Model Photo — صورة العارض</p>
            <div className="upload-area">
              <input type="file" accept="image/*" onChange={e => e.target.files && handleImage(e.target.files[0], 'human')} />
              {humanImage ? (
                <img src={humanImage} alt="human" />
              ) : (
                <>
                  <div className="upload-icon">🧍</div>
                  <p className="upload-text">اضغطي لرفع صورة العارض</p>
                </>
              )}
            </div>
            <select className="category-select" value={category} onChange={e => setCategory(e.target.value)}>
              <option value="upper_body">أعلى الجسم — Upper Body</option>
              <option value="lower_body">أسفل الجسم — Lower Body</option>
              <option value="dresses">فستان كامل — Dresses</option>
            </select>
          </div>

          {/* صورة الملبس */}
          <div className="card">
            <p className="card-title">Garment Photo — صورة الملبس</p>
            <div className="upload-area">
              <input type="file" accept="image/*" onChange={e => e.target.files && handleImage(e.target.files[0], 'garment')} />
              {garmentImage ? (
                <img src={garmentImage} alt="garment" />
              ) : (
                <>
                  <div className="upload-icon">👗</div>
                  <p className="upload-text">اضغطي لرفع صورة الملبس</p>
                </>
              )}
            </div>
            <button className="btn" onClick={handleTryOn} disabled={loading}>
              {loading ? '⏳ جاري المعالجة...' : '✨ ابدأ التجربة الافتراضية'}
            </button>
            {error && <p className="error">{error}</p>}
          </div>

          {/* النتيجة */}
          <div className="card">
            <p className="card-title">Result — النتيجة</p>
            <div className="result-area">
              {loading ? (
                <div className="loading">
                  <div>⏳</div>
                  <p>الذكاء الاصطناعي يعمل...<br />يستغرق 10-30 ثانية</p>
                </div>
              ) : resultImage ? (
                <img src={resultImage} alt="result" />
              ) : (
                <div className="result-placeholder">
                  <div className="icon">✨</div>
                  <p>النتيجة ستظهر هنا</p>
                </div>
              )}
            </div>
            {resultImage && (
              <a href={resultImage} download="vtry-result.jpg" className="download-btn">
                ⬇️ تحميل الصورة
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}