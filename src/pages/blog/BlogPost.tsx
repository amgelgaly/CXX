import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Tag, ArrowLeft } from "lucide-react";

// Extended blog posts data with full content
export const blogPostsData = [
  {
    id: 1,
    title: "كيف تبني استراتيجية تسويق رقمي ناجحة في 2024",
    excerpt: "تعرف على أهم الخطوات والأدوات اللازمة لبناء استراتيجية تسويق رقمي فعالة تناسب عملك",
    content: `
      <h2>مقدمة</h2>
      <p>في عصر التحول الرقمي، أصبح وجود استراتيجية تسويق رقمي قوية أمراً ضرورياً لنجاح أي عمل تجاري. سنستعرض في هذا المقال الخطوات الأساسية لبناء استراتيجية تسويق رقمي فعالة في عام 2024.</p>

      <h2>١. تحديد الأهداف</h2>
      <p>قبل البدء في تنفيذ أي خطة تسويقية، من المهم تحديد أهدافك بدقة. قد تشمل هذه الأهداف:</p>
      <ul>
        <li>زيادة الوعي بالعلامة التجارية</li>
        <li>تحسين معدلات التحويل</li>
        <li>زيادة المبيعات عبر الإنترنت</li>
        <li>تحسين التواجد الرقمي</li>
      </ul>

      <h2>٢. فهم جمهورك المستهدف</h2>
      <p>يعد فهم جمهورك المستهدف أمراً حيوياً لنجاح استراتيجيتك التسويقية. قم بإجراء بحث شامل لفهم:</p>
      <ul>
        <li>الخصائص الديموغرافية</li>
        <li>الاهتمامات والتفضيلات</li>
        <li>سلوك الشراء</li>
        <li>التحديات والمشكلات التي يواجهونها</li>
      </ul>

      <h2>٣. اختيار القنوات المناسبة</h2>
      <p>حدد القنوات الرقمية التي يتواجد فيها جمهورك المستهدف وركز جهودك عليها. قد تشمل:</p>
      <ul>
        <li>وسائل التواصل الاجتماعي</li>
        <li>تحسين محركات البحث</li>
        <li>التسويق عبر البريد الإلكتروني</li>
        <li>إعلانات الدفع لكل نقرة</li>
      </ul>
    `,
    author: "أحمد محمد",
    date: "15 مارس 2024",
    category: "التسويق الرقمي",
    readTime: "7 دقائق",
    image: "/blog/digital-marketing-strategy.jpg"
  },
  {
    id: 2,
    title: "أفضل ممارسات تحسين محركات البحث SEO لعام 2024",
    excerpt: "اكتشف أحدث التقنيات والممارسات المثبتة لتحسين ظهور موقعك في نتائج البحث",
    content: `
      <h2>مقدمة في تحسين محركات البحث</h2>
      <p>يعد تحسين محركات البحث (SEO) عنصراً أساسياً في نجاح أي موقع إلكتروني. في هذا المقال، سنستعرض أحدث الممارسات والتقنيات التي يجب اتباعها في عام 2024.</p>

      <h2>١. تحسين تجربة المستخدم</h2>
      <p>أصبحت تجربة المستخدم عاملاً رئيسياً في ترتيب نتائج البحث. تأكد من:</p>
      <ul>
        <li>سرعة تحميل الموقع</li>
        <li>سهولة التنقل</li>
        <li>تصميم متجاوب مع الأجهزة المحمولة</li>
        <li>محتوى سهل القراءة</li>
      </ul>

      <h2>٢. المحتوى عالي الجودة</h2>
      <p>يظل المحتوى الجيد هو الملك. اهتم بـ:</p>
      <ul>
        <li>كتابة محتوى شامل ومفيد</li>
        <li>استخدام الكلمات المفتاحية بشكل طبيعي</li>
        <li>تحديث المحتوى بانتظام</li>
        <li>إضافة الوسائط المتعددة</li>
      </ul>
    `,
    author: "سارة أحمد",
    date: "10 مارس 2024",
    category: "SEO",
    readTime: "5 دقائق",
    image: "/blog/seo-practices.jpg"
  },
  {
    id: 3,
    title: "دليلك الشامل لإدارة وسائل التواصل الاجتماعي",
    excerpt: "تعلم كيفية إدارة حسابات التواصل الاجتماعي بفعالية وبناء جمهور متفاعل",
    content: `
      <h2>أهمية إدارة وسائل التواصل الاجتماعي</h2>
      <p>تعد وسائل التواصل الاجتماعي من أهم قنوات التواصل مع الجمهور في العصر الحديث. سنتعرف في هذا الدليل على أفضل الممارسات لإدارة حساباتك بفعالية.</p>

      <h2>١. تخطيط المحتوى</h2>
      <p>يعد التخطيط الجيد للمحتوى أساس النجاح في وسائل التواصل الاجتماعي:</p>
      <ul>
        <li>إنشاء تقويم محتوى</li>
        <li>تنويع أنواع المحتوى</li>
        <li>تحديد أوقات النشر المثالية</li>
        <li>الاستفادة من المناسبات والأحداث</li>
      </ul>

      <h2>٢. التفاعل مع الجمهور</h2>
      <p>التفاعل المستمر مع الجمهور يساعد في بناء مجتمع نشط:</p>
      <ul>
        <li>الرد على التعليقات والرسائل</li>
        <li>إنشاء محتوى تفاعلي</li>
        <li>إجراء استطلاعات رأي</li>
        <li>مشاركة قصص المتابعين</li>
      </ul>
    `,
    author: "محمد علي",
    date: "5 مارس 2024",
    category: "التواصل الاجتماعي",
    readTime: "6 دقائق",
    image: "/blog/social-media-guide.jpg"
  },
  {
    id: 4,
    title: "كيف تنشئ محتوى جذاب يحقق نتائج",
    excerpt: "نصائح وإرشادات عملية لإنشاء محتوى يجذب الجمهور المستهدف ويحقق أهداف عملك",
    content: `
      <h2>أساسيات إنشاء المحتوى الجذاب</h2>
      <p>يعد المحتوى الجذاب أساس نجاح أي استراتيجية تسويقية. سنتعرف في هذا المقال على كيفية إنشاء محتوى يحقق النتائج المرجوة.</p>

      <h2>١. فهم احتياجات الجمهور</h2>
      <p>قبل إنشاء المحتوى، من المهم فهم:</p>
      <ul>
        <li>اهتمامات الجمهور المستهدف</li>
        <li>المشكلات التي يواجهونها</li>
        <li>نوع المحتوى المفضل لديهم</li>
        <li>توقيت البحث عن المعلومات</li>
      </ul>

      <h2>٢. تنظيم وهيكلة المحتوى</h2>
      <p>المحتوى المنظم يسهل قراءته وفهمه:</p>
      <ul>
        <li>استخدام العناوين الفرعية</li>
        <li>تقسيم النص إلى فقرات قصيرة</li>
        <li>إضافة القوائم النقطية</li>
        <li>استخدام الصور والرسوم التوضيحية</li>
      </ul>
    `,
    author: "ليلى عمر",
    date: "1 مارس 2024",
    category: "إنشاء المحتوى",
    readTime: "8 دقائق",
    image: "/blog/content-creation.jpg"
  },
  {
    id: 5,
    title: "أحدث اتجاهات التسويق الرقمي في 2024",
    excerpt: "تعرف على أبرز التوجهات والتقنيات الجديدة في عالم التسويق الرقمي",
    content: `
      <h2>التوجهات الحديثة في التسويق الرقمي</h2>
      <p>يشهد عالم التسويق الرقمي تطورات مستمرة. سنستعرض أهم الاتجاهات التي تشكل مستقبل التسويق في 2024.</p>

      <h2>١. الذكاء الاصطناعي في التسويق</h2>
      <p>يلعب الذكاء الاصطناعي دوراً متزايداً في:</p>
      <ul>
        <li>تخصيص تجربة المستخدم</li>
        <li>تحليل سلوك العملاء</li>
        <li>أتمتة التسويق</li>
        <li>تحسين خدمة العملاء</li>
      </ul>

      <h2>٢. تسويق المحتوى الصوتي والمرئي</h2>
      <p>تزايد أهمية المحتوى المتعدد الوسائط:</p>
      <ul>
        <li>البودكاست</li>
        <li>مقاطع الفيديو القصيرة</li>
        <li>البث المباشر</li>
        <li>تجارب الواقع المعزز</li>
      </ul>
    `,
    author: "عمر خالد",
    date: "20 فبراير 2024",
    category: "التسويق الرقمي",
    readTime: "6 دقائق",
    image: "/blog/digital-trends.jpg"
  },
  {
    id: 6,
    title: "استراتيجيات التسويق عبر البريد الإلكتروني",
    excerpt: "دليلك الشامل لبناء حملات بريد إلكتروني ناجحة تحقق معدلات تحويل عالية",
    content: `
      <h2>أهمية التسويق عبر البريد الإلكتروني</h2>
      <p>يظل البريد الإلكتروني من أكثر قنوات التسويق فعالية. تعرف على كيفية استخدامه بشكل فعال.</p>

      <h2>١. بناء قائمة بريدية قوية</h2>
      <p>خطوات بناء قائمة بريدية فعالة:</p>
      <ul>
        <li>تقديم محتوى قيم مقابل الاشتراك</li>
        <li>استخدام نماذج اشتراك جذابة</li>
        <li>تقسيم القائمة حسب اهتمامات المشتركين</li>
        <li>تنظيف القائمة بشكل دوري</li>
      </ul>

      <h2>٢. تصميم حملات فعالة</h2>
      <p>عناصر الحملة الناجحة:</p>
      <ul>
        <li>عناوين جذابة</li>
        <li>محتوى شخصي</li>
        <li>تصميم متجاوب</li>
        <li>دعوات للعمل واضحة</li>
      </ul>
    `,
    author: "نور محمد",
    date: "15 فبراير 2024",
    category: "التسويق الرقمي",
    readTime: "7 دقائق",
    image: "/blog/email-marketing.jpg"
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPostsData.find(post => post.id === Number(id));

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">المقال غير موجود</h1>
        <Button onClick={() => navigate('/blog')} className="mt-4">
          العودة للمدونة
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Button
        variant="ghost"
        className="mb-8 flex items-center gap-2"
        onClick={() => navigate('/blog')}
      >
        <ArrowLeft className="w-4 h-4" />
        العودة للمدونة
      </Button>

      <div className="max-w-4xl mx-auto">
        <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <Badge className="absolute top-4 right-4 bg-primary text-white">
            {post.category}
          </Badge>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          {post.title}
        </h1>

        <div className="flex items-center justify-between mb-8 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div>{post.date}</div>
        </div>

        <div 
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default BlogPost;
