"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Search } from "lucide-react";
import { navigation } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SearchOverlay } from "./SearchOverlay";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setSearchOpen(false);
  }

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#EAE8E5] text-[#202022] transition-colors duration-200">
        <div className="container-enterprise">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-50 group">
              <div className="font-serif font-bold text-2xl tracking-tight text-[#202022] flex items-center gap-1.5">
                <span>Nexus</span>
                <span className="text-[#FF5B3D] text-[11px] uppercase tracking-widest font-sans font-bold px-1.5 py-0.5 rounded bg-[#FFF3EF] border border-[#FF5B3D]/20">
                  Talent
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7 h-full">
              {navigation.map((item) => (
                <div
                  key={item.label}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.href && !item.children ? (
                    <Link
                      href={item.href}
                      className={cn(
                        "text-sm font-semibold transition-colors hover:text-[#FF5B3D] text-[#202022]/80",
                        pathname === item.href && "text-[#FF5B3D]"
                      )}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className={cn(
                        "flex items-center gap-1 text-sm font-semibold transition-colors focus:outline-none h-full text-[#202022]/80 hover:text-[#FF5B3D]",
                        activeDropdown === item.label && "text-[#FF5B3D]"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 opacity-60 transition-transform duration-200",
                          activeDropdown === item.label && "rotate-180"
                        )}
                      />
                    </button>
                  )}

                  {/* Mega Menu */}
                  {item.children && (
                    <div
                      className={cn(
                        "absolute top-[calc(100%-1px)] left-1/2 -translate-x-1/2 w-[760px] bg-white border border-[#EAE8E5] shadow-xl rounded-b-2xl overflow-hidden transition-all duration-300 origin-top text-[#202022]",
                        activeDropdown === item.label
                          ? "opacity-100 scale-y-100 pointer-events-auto translate-y-0"
                          : "opacity-0 scale-y-95 pointer-events-none -translate-y-2"
                      )}
                    >
                      <div className="grid grid-cols-3 p-8">
                        {/* Left: Links */}
                        <div className="col-span-2 pr-8 border-r border-[#EAE8E5]">
                          <div className="mb-5">
                            <h3 className="text-base font-bold font-serif text-[#202022] mb-1">{item.label}</h3>
                            {item.description && <p className="text-xs text-[#606064]">{item.description}</p>}
                          </div>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="group/link p-2.5 rounded-lg hover:bg-[#FAF9F7] transition-colors"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold text-xs group-hover/link:text-[#FF5B3D] transition-colors text-[#202022]">
                                    {child.label}
                                  </span>
                                  <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-[#FF5B3D]" />
                                </div>
                                {child.description && (
                                  <p className="text-[11px] text-[#606064] mt-0.5 line-clamp-1">{child.description}</p>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Right: Featured */}
                        {item.featured && (
                          <div className="col-span-1 pl-8 flex flex-col justify-between">
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF5B3D] mb-3 block">
                                Spotlight
                              </span>
                              <h4 className="font-bold text-sm text-[#202022] mb-2 leading-snug font-serif">
                                {item.featured.title}
                              </h4>
                              <p className="text-xs text-[#606064] mb-4 leading-relaxed">
                                {item.featured.description}
                              </p>
                            </div>
                            <Link href={item.featured.href}>
                              <Button variant="ghost" className="h-auto p-0 hover:bg-transparent text-[#FF5B3D] text-xs font-semibold gap-1.5 group/btn">
                                <span>{item.featured.cta}</span>
                                <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-1 transition-transform" />
                              </Button>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Right (Search + CTAs) */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 text-xs font-semibold text-[#606064] hover:text-[#202022] transition-colors p-2 rounded-sm"
                aria-label="Search mandates and practices"
              >
                <Search className="h-4 w-4" />
                <span className="hidden xl:inline">Search</span>
              </button>

              <Link href="/jobs" tabIndex={-1}>
                <Button
                  variant="outline"
                  className="font-semibold rounded-sm text-xs px-4 h-10 border-[#EAE8E5] text-[#202022] hover:bg-[#FAF9F7]"
                >
                  Explore Jobs
                </Button>
              </Link>

              <Link href="/employers" tabIndex={-1}>
                <Button
                  className="font-semibold rounded-sm px-5 h-10 text-xs bg-[#202022] text-white hover:bg-[#FF5B3D] transition-colors"
                >
                  <span>Hire Talent</span>
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 z-50 text-[#202022]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={cn(
            "fixed inset-0 top-0 pt-24 bg-white z-40 transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto border-t border-[#EAE8E5]",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="container-enterprise pb-24 flex flex-col gap-6 text-[#202022]">
            <button 
              onClick={() => { setMobileMenuOpen(false); setSearchOpen(true); }}
              className="flex items-center gap-3 w-full p-4 border border-[#EAE8E5] rounded-xl bg-[#FAF9F7]"
            >
              <Search className="h-5 w-5 text-[#606064]" />
              <span className="text-sm font-medium text-[#606064]">Search roles, practices &amp; insights...</span>
            </button>

            <div className="flex flex-col divide-y divide-[#EAE8E5]">
              {navigation.map((item) => (
                <div key={item.label} className="py-4">
                  <div className="font-bold text-base mb-2 font-serif flex items-center justify-between text-[#202022]">
                    <Link href={item.href || "#"} onClick={() => setMobileMenuOpen(false)}>
                      {item.label}
                    </Link>
                  </div>
                  {item.children && (
                    <div className="flex flex-col gap-2 pl-3 pt-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="text-xs text-[#606064] hover:text-[#FF5B3D] py-1 font-medium"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <Link href="/employers" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full h-12 rounded-sm bg-[#FF5B3D] text-white font-semibold text-xs gap-2">
                  <span>Hire Talent</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/jobs" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full h-12 rounded-sm border-[#EAE8E5] text-xs font-semibold">
                  <span>Explore Jobs</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
