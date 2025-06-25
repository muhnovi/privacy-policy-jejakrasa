"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, ChevronDown, Eye, Lock, FileText, Users } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PrivacyPolicyOnline() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white min-h-screen flex flex-col">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-20 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          ></div>
          <div
            className="absolute top-40 right-20 w-24 h-24 bg-green-400/20 rounded-full blur-xl animate-pulse delay-1000"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-40 h-40 bg-green-600/20 rounded-full blur-xl animate-pulse delay-500"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          ></div>
        </div>

        {/* Navigation */}
        <nav
          className={`relative z-10 container mx-auto px-6 py-6 transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-10 opacity-0"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 group">
              <Shield className="h-8 w-8 transition-transform duration-300 group-hover:rotate-12" />
              <span className="text-xl font-bold">Privacy Policy Onilne</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#about" className="font-body dark:text-neutral-50">
                About
              </Link>
              <Link
                href="#resources"
                className="font-body dark:text-neutral-50"
              >
                Resources
              </Link>
              <Link href="#contact" className="font-body dark:text-neutral-50">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1
                className={`text-5xl md:text-7xl font-light mb-8 leading-tight transition-all duration-1500 delay-300 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
              >
                Walcome to
                <br />
                <span className="bg-gradient-to-r from-green-200 to-white bg-clip-text text-transparent">
                  Privacy Policy Online
                </span>
              </h1>

              <p
                className={`text-xl md:text-2xl text-green-100 mb-12 leading-relaxed transition-all duration-1500 delay-500 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
              >
                Privacy policy for the application we are developing.
                <br />
                Protecting user data and privacy is our top priority.
              </p>

              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1500 delay-700 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
              >
                <Button
                  size="lg"
                  className="bg-white text-green-700 hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Learn More
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-700 transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="relative z-10 text-center pb-8">
          <ChevronDown className="h-8 w-8 mx-auto text-green-200 animate-bounce" />
        </div>
      </div>

      {/* Features Section */}
      <div id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Why Privacy Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              In our application, protecting user data isn't just about
              compliance—it's about building trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Eye,
                title: "Transparency",
                desc: "Clear data practices",
              },
              { icon: Lock, title: "Security", desc: "Protected information" },
              {
                icon: FileText,
                title: "Compliance",
                desc: "Legal requirements",
              },
              { icon: Users, title: "Trust", desc: "User confidence" },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:bg-green-200 group-hover:scale-110">
                    <item.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div id="resources" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-light text-gray-800 mb-6">
                  Our Application Privacy Policy
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  This privacy policy explains how our application collects,
                  uses, and protects user information. We are committed to
                  maintaining trust and security of your data.
                </p>
                <div className="space-y-4">
                  {[
                    "We collect minimal data necessary for functionality",
                    "User data is encrypted and secure",
                    "No selling of data to third parties",
                    "Users have full control over their data",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 opacity-0 animate-fade-in-up"
                      style={{
                        animationDelay: `${index * 200}ms`,
                        animationFillMode: "forwards",
                      }}
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="h-6 w-6 text-green-600" />
                      <span className="font-semibold text-gray-800">
                        Privacy Policy
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4 animate-pulse delay-100"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse delay-200"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div
        id="contact"
        className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Have Questions?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Contact us if you have any questions about our application's privacy
            policy
          </p>
          <Button
            size="lg"
            className="bg-white text-green-700 hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <a href="">Contact</a>
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <Shield className="h-6 w-6" />
              <span className="text-lg font-semibold">
                Privacy Policy Onilne
              </span>
            </div>
            <div className="flex gap-6 text-sm text-green-200">
              <a
                href="#about"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#resources"
                className="hover:text-white transition-colors duration-300"
              >
                Resources
              </a>
              <a
                href="#contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy
              </a>
            </div>
          </div>
          <div className="border-t border-green-700 mt-8 pt-8 text-center text-sm text-green-200">
            <p>&copy; 2025 Our Application. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}
