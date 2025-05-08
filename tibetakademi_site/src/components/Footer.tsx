import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 pt-10 pb-4 mt-auto">
      <div className="container mx-auto px-4">
        {/* Subscribe Section */}
        <div className="bg-blue-600 dark:bg-blue-700 text-white p-8 rounded-lg shadow-lg mb-10 text-center">
          <h3 className="text-3xl font-bold mb-4">Bültenimize Abone Olun!</h3>
          <p className="mb-6 text-blue-100 dark:text-blue-200">En son güncellemeleri, haberleri ve projelerimizi doğrudan gelen kutunuza alın.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="text"
              placeholder="Adınız"
              className="bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            />
            <Input
              type="email"
              placeholder="E-posta Adresiniz"
              className="bg-white dark:bg-gray-700 dark:text-white border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
            />
            <Button type="submit" className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 font-semibold px-6 py-2.5">
              Gönder
            </Button>
          </form>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} tibetakademi.com. Tüm hakları saklıdır.</p>
          <p>Next.js ve Tailwind CSS ile oluşturulmuştur.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

