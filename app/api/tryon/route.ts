import { NextResponse } from "next/server";

// دالة ذكية لتنظيف صيغة الـ Base64 وحذف البادئة النصية إذا وجدت
const cleanBase64 = (base64String: string) => {
  if (base64String.includes("base64,")) {
    return base64String.split("base64,")[1];
  }
  return base64String;
};

export async function POST(req: Request) {
  try {
    // 1. التحقق من وجود مفتاح الـ API الخاص بـ Segmind
    const apiKey = process.env.SEGMIND_API_KEY;
    if (!apiKey) {
      console.error("❌ خطأ: SEGMIND_API_KEY غير معرف في ملف .env.local");
      return NextResponse.json(
        { error: "إعدادات سيرفر التوليد غير مكتملة، يرجى إضافة مفتاح Segmind في ملف البيئة." },
        { status: 500 }
      );
    }

    // 2. استقبال الصور المرسلة من واجهة التاجر
    const { humanImage, garmentImage, category = "upper_body" } = await req.json();

    if (!humanImage || !garmentImage) {
      return NextResponse.json(
        { error: "يرجى رفع صورة العارض (Model) وصورة قطعة الملابس لبدء المعالجة." },
        { status: 400 }
      );
    }

    // 3. إعداد البيانات وتوجيهها ومسح أي بادئات زائدة في الصور
    const segmindUrl = "https://api.segmind.com/v1/idm-vton";

    const requestBody = {
      human_img: cleanBase64(humanImage),   // تنظيف صورة الشخص
      garm_img: cleanBase64(garmentImage),   // تنظيف صورة اللبس
      category: category,                   // upper_body أو lower_body أو dresses
      crop: false,
      seed: 42,
      steps: 30,
      force_dc: false
    };

    console.log("🔄 جاري إرسال البيانات ومُعالجة تبديل الملابس على Segmind...");

    const response = await fetch(segmindUrl, {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    // 4. التحقق من استجابة المحرك
    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ فشل محرك Segmind في المعالجة البصرية:", errorText);
      return NextResponse.json(
        { error: "فشل المحرك الذكي في دمج الملابس، تأكد من جودة الصور أو صلاحية المفتاح." },
        { status: response.status }
      );
    }

    // 5. استقبال الصورة المولدة ثنائياً وتحويلها بأمان إلى واجهة التاجر
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const base64Output = buffer.toString("base64");

    return NextResponse.json({
      resultImage: `data:image/jpeg;base64,${base64Output}`
    });

  } catch (error: any) {
    console.error("🚨 خطأ غير متوقع في سيرفر Tryon:", error);
    return NextResponse.json(
      { error: "حدث خطأ داخلي في السيرفر أثناء معالجة دمج الملابس." },
      { status: 500 }
    );
  }
}