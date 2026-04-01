import { Instagram, Facebook, Twitter } from "lucide-react";

function FooterSection() {
  return (
    <footer className="bg-[#0B1A2B] text-gray-300 px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-white text-2xl font-bold mb-4">DigiTools</h2>
            <p className="text-sm leading-6 text-gray-400 max-w-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm mb-6">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>

            <h3 className="text-white font-semibold mb-3">Social Links</h3>
            <div className="flex gap-3">
              <div className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition cursor-pointer">
                <Instagram size={16} />
              </div>
              <div className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition cursor-pointer">
                <Facebook size={16} />
              </div>
              <div className="w-9 h-9 flex items-center justify-center bg-white text-black rounded-full hover:scale-110 transition cursor-pointer">
                <Twitter size={16} />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2026 Digitools. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
