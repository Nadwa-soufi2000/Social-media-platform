import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="p-2 flex flex-col justify-center items-center gap-5 mt-7 max-w-3xl">
         <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold leading-tight">
           أنشئ محتوى احترافي للسوشال ميديا <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">بالذكاء الاصطناعي</span>
         </h1>
         <p className="text-sm sm:text-base font-medium text-gray-600 max-w-xl text-center leading-7">
           وفَر وقتك وجهدك وأنشئ منشورات جذابة في ثوان
           أفكار نصوص هاشتاغات و المزيد
         </p>
         <Button className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-500 px-5 py-4 sm:px-6 sm:py-5 text-sm sm:text-base font-semibold text-white shadow-xl shadow-violet-500/15 hover:shadow-violet-500/30">
           إبدأ مجاناً الآن
         </Button>
      </div>
      <p className="text-sm sm:text-base font-medium text-gray-600 max-w-md text-center leading-7">
         أكئر من 40,000 مستخدم حول العالم
      </p>
    </div>
  );
}
