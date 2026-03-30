export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold text-gray-900">DrCode</div>
          <div className="flex gap-8 text-gray-600">
            <a href="#" className="hover:text-gray-900 transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-12 text-center text-gray-500">
          © {new Date().getFullYear()} DrCode. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
