import Card from "@/components/custom/ColorCard";
import Utils from "@/lib/colorUtils/main";
import Link from "next/link";

export default function Home() {
  const u = new Utils();
  // Generating a smaller sample for the homepage demo
  const colors = u.generateColors(8);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 cursor-pointer">
            ColorMaster
          </div>
          {/* Nav */}
          <nav className="hidden md:flex space-x-8 font-medium">
            <Link href="#" className="hover:text-blue-600 transition-colors">
              Tools
            </Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">
              Palettes
            </Link>
            <Link href="#" className="hover:text-blue-600 transition-colors">
              About
            </Link>
          </nav>
          {/* CTA */}
          <button className="px-5 py-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-medium hover:opacity-90 transition-opacity">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Master Your <span className="text-blue-600">Colors</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10">
            The all-in-one suite for developers and designers to generate,
            analyze, and visualize color palettes for modern web applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Explore Tools
            </button>
            <button className="px-8 py-4 rounded-full border border-gray-300 dark:border-gray-700 font-bold text-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
              View Documentation
            </button>
          </div>
        </div>
        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* Tools Grid Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Color Tools
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Everything you need to create the perfect design system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tool 1 */}
            <div className="group p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-blue-500/50 transition-all hover:shadow-xl hover:shadow-blue-500/10 cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                Material Generator
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Generate dynamic Material You color schemes from a single source
                color.
              </p>
            </div>

            {/* Tool 2 */}
            <div className="group p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-purple-500/50 transition-all hover:shadow-xl hover:shadow-purple-500/10 cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 transition-colors">
                Palette Extractor
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Extract beautiful color palettes from images using AI-powered
                algorithms.
              </p>
            </div>

            {/* Tool 3 */}
            <div className="group p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-pink-500/50 transition-all hover:shadow-xl hover:shadow-pink-500/10 cursor-pointer">
              <div className="w-12 h-12 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 mb-6">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-pink-600 transition-colors">
                Contrast Checker
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Ensure your designs are accessible with our real-time contrast
                ratio analyzer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Demo Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold">Live Demo: Material You</h2>
            <Link
              href="#"
              className="text-blue-600 font-medium hover:underline"
            >
              View All Generated Colors &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {colors.map((each_color, id) => {
              const main_color = u.makeHexToMaterialYou(each_color.main.color);
              const opposite_color = u.makeHexToMaterialYou(
                each_color.opposite.color,
              );
              return (
                <div key={id} className="flex justify-center">
                  <Card
                    materialSource={each_color.main.color}
                    main={main_color.sourceColor}
                    opposite={opposite_color.sourceColor}
                    id={id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                ColorMaster
              </div>
              <p className="text-gray-600 dark:text-gray-400 max-w-xs">
                Empowering creators with advanced color tools for the modern
                web.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    API
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-blue-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} ColorMaster. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
