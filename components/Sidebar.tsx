"use client";

import {
  Home,
  Briefcase,
  Rocket,
  PenLine,
  User,
  Mail,
  Wrench,
  ExternalLink,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import { LinkPreview } from "@/components/ui/link-preview";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Experience", href: "/experience", icon: Briefcase },
  { name: "Projects", href: "/projects", icon: Rocket },
  { name: "Blogs", href: "/blogs", icon: PenLine },
  { name: "About", href: "/about", icon: User },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "Tools", href: "/tools", icon: Wrench },
];

const socials = [
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/mahtabul-shourav/",
    icon: Linkedin,
  },
  { name: "Medium", href: "https://medium.com", icon: PenLine },
  { name: "Github", href: "https://github.com/mahtabulsouravv", icon: Github },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mahtabul_gfy/",
    icon: Instagram,
  },
];

const typingTexts = ["Building Software", "From Bangladesh", "Coffee Freak"];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Sidebar({ children }: LayoutProps) {
  const pathname = usePathname();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 30 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          // Wait before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex]);

  return (
    <div className="flex min-h-screen w-full justify-center items-center flex-col">
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#f0f0f0] z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Image
            width={400}
            height={400}
            loading="lazy"
            src="/Profile.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <div className="font-semibold text-sm">Mahtabul Shourav</div>
            <div className="text-xs h-4 flex items-center">
              {displayText}
              <span className="inline-block w-0.5 h-4 bg-gray-400 ml-0.5 animate-pulse"></span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-sidebar-accent rounded-md transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </header>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-65 bg-[#f0f0f0] flex flex-col z-50 transition-transform duration-300 lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button for mobile */}
        <div className="lg:hidden flex justify-end p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:bg-sidebar-accent rounded-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile */}
        <div className="pl-6 pr-9 pb-9 pt-6 lg:pt-12">
          <div className="flex items-center gap-3">
            <Image
              width={200}
              height={200}
              src="/Profile.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-base">Mahtabul Shourav</div>
              <div className="text-sm h-4 flex items-center">
                {displayText}
                <span className="inline-block w-0.5 h-4 bg-gray-400 ml-0.5 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "text-sidebar-foreground hover:bg-sidebar-accent hover:translate-x-1"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Connect Section */}
          <div className="mt-8">
            <div className="text-xs font-semibold text-muted-foreground mb-3 px-3">
              Connect
            </div>
            <ul className="space-y-1">
              {socials.map((social) => (
                <li key={social.name}>
                  <LinkPreview url={social.href}>
                    <Link
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-3 py-2 text-sm text-sidebar-foreground rounded-md group"
                    >
                      <div className="flex items-center gap-2">
                        <social.icon className="w-4 h-4" />
                        <span className="group-hover:underline">
                          {social.name}
                        </span>
                      </div>
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </LinkPreview>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-52 flex-1 pt-16 lg:pt-0">{children}</main>

      <Footer />
    </div>
  );
}
