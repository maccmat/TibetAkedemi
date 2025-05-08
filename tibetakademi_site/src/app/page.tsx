
import FullscreenHero from "@/components/FullscreenHero";
import Image from 'next/image';
import Link from 'next/link';
import SocialFeed from '@/components/SocialFeed';
import AnimatedSection from '@/components/AnimatedSection';
// import ProjectCard from "@/components/ProjectCard"; // ProjectCard is now used within FeaturedProjectsCarousel
import LoopingVideoBox from "@/components/LoopingVideoBox";
import FeaturedProjectsCarousel from "@/components/FeaturedProjectsCarousel"; // Import FeaturedProjectsCarousel

// Sample data for featured projects - replace with actual data fetching or props later
const featuredProjectsData = [
  {
    id: "alpha",
    title: "Proje Alfa: Gençlik Köprüsü",
    description: "Avrupa'nın farklı köşelerinden gençleri bir araya getiren bu proje, kültürlerarası diyaloğu ve anlayışı güçlendirmeyi amaçladı.",
    imageUrl: "/placeholder-project-1.jpg", // Ensure these images exist in /public/images or similar
    tags: ["erasmusplus", "gençlikdeğişimi", "kültürlerarası"],
    detailsLink: "/projects/alpha",
    category: "Gençlik Değişimi"
  },
  {
    id: "beta",
    title: "Proje Beta: Dayanışmanın Gücü",
    description: "Toplumsal dayanışmayı ve gönüllülüğü ön plana çıkaran bu proje, yerel toplulukların ihtiyaçlarına yönelik çözümler üretti.",
    imageUrl: "/placeholder-project-2.jpg",
    tags: ["sosyalyardım", "gönüllülük", "toplulukkatılımı"],
    detailsLink: "/projects/beta",
    category: "Sosyal Sorumluluk"
  },
  {
    id: "gamma",
    title: "Proje Gamma: Sanatın Evrensel Dili",
    description: "Sanat ve yaratıcılığı kullanarak farklı kültürlerden katılımcıların ortak bir dil oluşturmasını sağlayan atölye çalışmaları düzenlendi.",
    imageUrl: "/placeholder-project-3.jpg",
    tags: ["sanatveeğitim", "yaratıcıatölyeler", "kültürsanat"],
    detailsLink: "/projects/gamma",
    category: "Kültürlerarası Sanat"
  },
  {
    id: "delta",
    title: "Proje Delta: Dijital Dönüşüm Elçileri",
    description: "Gençlerin dijital becerilerini artırmaya yönelik eğitimler ve uygulamalar içeren bu proje, dijital okuryazarlığı teşvik etti.",
    imageUrl: "/placeholder-project-4.jpg", // Add more placeholder images
    tags: ["dijitalbeceriler", "teknoloji", "eğitimdeyenilik"],
    detailsLink: "/projects/delta",
    category: "Dijital Yetkinlik"
  },
    {
    id: "epsilon",
    title: "Proje Epsilon: Çevre Bilinci Hareketi",
    description: "Sürdürülebilirlik ve çevre koruma konularında farkındalık yaratmayı amaçlayan bu proje, çeşitli atölye ve saha çalışmaları içerdi.",
    imageUrl: "/placeholder-project-5.jpg",
    tags: ["çevrebilinci", "sürdürülebilirlik", "doğakoruma"],
    detailsLink: "/projects/epsilon",
    category: "Çevre ve Sürdürülebilirlik"
  }
];

export default function HomePage() {
  return (
    <>
      <FullscreenHero />
      <main className="bg-white dark:bg-slate-900 transition-colors duration-500">
        <AnimatedSection className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 dark:text-cyan-400">Hakkımızda Kısa Bir Bakış</h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 space-y-4">
              <p>
                Biz, sosyal yardım ve dayanışma alanında fark yaratmayı hedefleyen, Avrupa genelinde Erasmus+ projeleri yürüten tutkulu bir ekibiz.
                Projelerimiz, kültürlerarası anlayışı teşvik ederken, katılımcılarımıza benzersiz deneyimler sunar.
              </p>
              <p>
                Bu platform, yürüttüğümüz, katıldığımız ve katkıda bulunduğumuz projeleri, elde ettiğimiz başarıları ve katılımcılarımızın değerli deneyimlerini sizlerle paylaşmak için tasarlandı.
              </p>
            </div>
            <Link href="/about" 
              className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
              Daha Fazla Bilgi Edinin
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-cyan-400">Projelerimizden Kesitler</h2>
            <LoopingVideoBox 
              videoSrc="/sample-video.mp4" 
              className="w-full max-w-4xl mx-auto h-[300px] md:h-[450px] lg:h-[500px]"
            />
             <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
              (Örnek video gösterilmektedir. Gerçek proje kesitleri eklenecektir.)
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-cyan-400">Öne Çıkan Projelerimiz</h2>
            <FeaturedProjectsCarousel projects={featuredProjectsData} />
            <div className="text-center mt-12">
              <Link href="/projects" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
                Tüm Projeleri Gör
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-16">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-cyan-400">Son Gelişmeler ve Paylaşımlar</h2>
            <SocialFeed />
          </div>
        </AnimatedSection>
      </main>
    </>
  );
}

