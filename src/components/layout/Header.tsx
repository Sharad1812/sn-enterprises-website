"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { mainNav } from "@/data/testimonials";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border-subtle bg-surface transition-shadow duration-300",
        scrolled && "shadow-sm"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Logo className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 text-sm font-bold ring-1 ring-cyan-500/30" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            if (item.label === "Services") {
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface-muted hover:text-cyan-600 dark:hover:text-cyan-400",
                      pathname.startsWith(item.href) && "text-cyan-600 dark:text-cyan-400"
                    )}
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </Link>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full w-72 pt-2">
                      <div className="grid gap-1 rounded-2xl border border-border-subtle bg-surface p-3 shadow-xl">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            href={`/services/${s.slug}`}
                            className="rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-surface-muted hover:text-cyan-600 dark:hover:text-cyan-400"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-surface-muted hover:text-cyan-600 dark:hover:text-cyan-400",
                  pathname === item.href && "text-cyan-600 dark:text-cyan-400"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-cyan-600 dark:hover:text-cyan-400"
          >
            <Phone size={16} />
            {siteConfig.contact.phoneDisplay}
          </a>
          <ThemeToggle />
          <ButtonLink href="/contact" size="sm">
            Get a Quote
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border-subtle text-foreground"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border-subtle bg-surface px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/85 hover:bg-surface-muted"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm font-medium text-foreground/80"
            >
              <Phone size={16} />
              {siteConfig.contact.phoneDisplay}
            </a>
            <ButtonLink href="/contact" size="sm" className="w-full">
              Get a Quote
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
