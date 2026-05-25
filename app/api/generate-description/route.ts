import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// 1. تهيئة مكتبة جيمناي باستخدام المفتاح السري المضاف في ملف .env.local
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    // 2. استقبال الصورة القادمة من الواجهة الأمامية (تكون بصيغة Base64)
    const { imageBase64 } = await req.json();

    if (!imageBase64) {
      return NextResponse.json({ error: "الصورة مطلوبة" }, { status: 400 });
    }

    // 3. تحديد الموديل السريع والذكي (Gemini 1.5 Flash)
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // 4. كتابة أمر المطور (Prompt) لتوجيه الذكاء الاصطناعي بدقة تخدم منصة Vtry
    const prompt = `
      أنت خبير تسويق رقمي وكتابة محتوى لمنصة Vtry لعارضي الأزياء بالذكاء الاصطناعي.
      بناءً على صورة قطعة الملابس المرفقة، قم بتوليد عنوان جذاب للمنتج ووصف تسويقي احترافي ومقنع ومناسب للمتاجر الإلكترونية الخليجية والسعودية.
      أريد النتيجة بتنسيق JSON يحتوي على الحقول التالية فقط:
      {
        "title": "عنوان المنتج هنا",
        "description": "الوصف التسويقي هنا"
      }
      تأكد من إرجاع كود JSON النظيف فقط بدون أي علامات ماركداون أو نصوص إضافية.
    `;

    // 5. إعداد الصورة وإرسالها مع الأمر لجيمناي
    const imagePart = {
      inlineData: {
        data: imageBase64.split(",")[1] || imageBase64, // تنظيف البايس64 إذا كان يحتوي على مظهر البيانات العام
        mimeType: "image/jpeg"
      }
    };

    const result = await model.generateContent([prompt, imagePart]);
    const responseText = result.response.text().trim();

    // 6. تحويل نص النتيجة إلى كائن JSON وإرساله للمتجر
    const cleanJson = responseText.replace(/```json|```/g, "").trim();
    const data = JSON.parse(cleanJson);

    return NextResponse.json(data);

  } catch (error: any) {
    console.error("Gemini Error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء معالجة الصورة وتوليد الوصف" },
      { status: 500 }
    );
  }
}