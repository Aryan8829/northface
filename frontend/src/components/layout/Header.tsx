"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Search } from "lucide-react";
import { navigation } from "@/config/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { SearchOverlay } from "./SearchOverlay";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setSearchOpen(false);
  }

  const isTransparent = pathname === "/" && !isScrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isTransparent
            ? "bg-transparent border-transparent text-white py-4"
            : "bg-surface/95 backdrop-blur-md border-b border-border text-foreground shadow-sm py-0"
        )}
      >
        <div className="container-enterprise">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 z-50">
              <div className={cn("font-serif font-bold text-2xl tracking-tight transition-colors", isTransparent ? "text-white" : "text-primary")}>
                Nexus<span className="text-accent">.</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 h-full">
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
                        "text-sm font-semibold transition-colors hover:text-accent",
                        isTransparent ? "text-white/90" : "text-foreground/80"
                      )}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      className={cn(
                        "flex items-center gap-1 text-sm font-semibold transition-colors focus:outline-none h-full",
                        isTransparent ? "text-white/90 hover:text-white" : "text-foreground/80 hover:text-primary",
                        activeDropdown === item.label && (isTransparent ? "text-white" : "text-primary")
                      )}
                    >
                      {item.label}
                      <ChevronDown className={cn(
                        "h-4 w-4 opacity-70 transition-transform duration-200",
                        activeDropdown === item.label && "rotate-180"
                      )} />
                    </button>
                  )}

                  {/* Enterprise Mega Menu */}
                  {item.children && (
                    <div
                      className={cn(
                        "absolute top-[calc(100%-1px)] left-1/2 -translate-x-1/2 w-[800px] bg-surface border border-border shadow-premium rounded-b-xl overflow-hidden transition-all duration-300 origin-top text-foreground",
                        activeDropdown === item.label
                          ? "opacity-100 scale-y-100 pointer-events-auto translate-y-0"
                          : "opacity-0 scale-y-95 pointer-events-none -translate-y-2"
                      )}
                    >
                      <div className="grid grid-cols-3 p-8">
                        {/* Left: Links */}
                        <div className="col-span-2 pr-8 border-r border-border">
                          <div className="mb-6">
                            <h3 className="text-lg font-bold text-primary mb-1">{item.label}</h3>
                            {item.description && <p className="text-sm text-muted-foreground">{item.description}</p>}
                          </div>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="group/link p-3 rounded-lg hover:bg-secondary transition-colors"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold text-sm group-hover/link:text-accent transition-colors">{child.label}</span>
                                  <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-accent" />
                                </div>
                                {child.description && (
                                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1">{child.description}</p>
                                )}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Right: Featured */}
                        {item.featured && (
                          <div className="col-span-1 pl-8 flex flex-col">
                            <span className="eyebrow mb-4 block">Featured</span>
                            <div className="bg-secondary rounded-lg p-5 flex-1 flex flex-col items-start border border-border">
                              <h4 className="font-bold text-primary mb-2 leading-snug">{item.featured.title}</h4>
                              <p className="text-sm text-muted-foreground mb-6 flex-1">{item.featured.description}</p>
                              <Link href={item.featured.href}>
                                <Button variant="ghost" className="h-auto p-0 hover:bg-transparent text-accent font-semibold gap-2 group/btn">
                                  {item.featured.cta}
                                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Right (Search + CTA) */}
            <div className="hidden lg:flex items-center gap-6">
              <button 
                onClick={() => setSearchOpen(true)}
                className={cn(
                "flex items-center gap-2 text-sm font-semibold transition-colors group",
                isTransparent ? "text-white/80 hover:text-white" : "text-foreground/80 hover:text-primary"
              )}>
                <Search className="h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Search</span>
              </button>
              <Link href="/contact" tabIndex={-1}>
                <Button
                  variant={isTransparent ? "secondary" : "default"}
                  className={cn(
                    "font-semibold rounded-sm shadow-none",
                    isTransparent && "bg-white text-primary hover:bg-white/90"
                  )}
                >
                  Let&apos;s Talk
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 z-50 text-current"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? (
                <X className={cn("h-6 w-6", !isTransparent && "text-foreground", isTransparent && mobileMenuOpen && "text-foreground")} />
              ) : (
                <Menu className={cn("h-6 w-6", isTransparent ? "text-white" : "text-foreground")} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={cn(
            "fixed inset-0 top-0 pt-24 bg-surface z-40 transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto border-t border-border",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="container-enterprise pb-24 flex flex-col gap-6 text-foreground">
            
            <button 
              onClick={() => { setMobileMenuOpen(false); setSearchOpen(true); }}
              className="flex items-center gap-3 w-full p-4 border border-border rounded-xl bg-background"
            >
              <Search className="h-5 w-5 text-muted-foreground" />
              <span className="font-semibold text-muted-foreground text-left flex-1">Search Nexus...</span>
            </button>

            {navigation.map((item) => (
              <div key={item.label} className="border-b border-border/50 pb-4">
                {item.href && !item.children ? (
                  <Link
                    href={item.href}
                    className="text-xl font-sans font-bold hover:text-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div className="flex flex-col gap-4">
                    <div className="text-xl font-sans font-bold">{item.label}</div>
                    <div className="flex flex-col gap-3 pl-4 border-l-2 border-border">
                      {item.children?.map((child) => (
                        <Link
                           key={child.label}
                           href={child.href}
                           className="flex flex-col gap-1 group/mobile"
                         >
                           <span className="text-sm font-semibold group-hover/mobile:text-accent transition-colors">{child.label}</span>
                           {child.description && (
                             <span className="text-xs text-muted-foreground">{child.description}</span>
                           )}
                         </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button size="lg" className="w-full rounded-sm text-lg h-14">
                  Let&apos;s Talk
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
