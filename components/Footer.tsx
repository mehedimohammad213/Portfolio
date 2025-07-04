"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full text-white py-8">
      <div className="w-full">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">
            🚀 Let’s Build Something Amazing Together!
          </h2>
          <p className="text-gray-400">
            Whether it’s a groundbreaking project, a tech innovation, or just a
            friendly chat about the future of software engineering, I’m all ears.
            Let’s connect and create something extraordinary!
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href="https://www.linkedin.com/in/mehedi-hasan-14b984241/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/mehedimohammad213"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              GitHub
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <Link
              href="https://mehedi213.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="https://www.linkedin.com/in/mehedi-hasan-14b984241/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm mt-4">
          <p>
            © {
              new Date().getFullYear()
            } <strong>Mehedi Hasan</strong>. All rights reserved.
            <br />
          </p>
        </div>
      </div>
    </footer>
  );
}