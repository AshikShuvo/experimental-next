import Link from "next/link";
import Image from "next/image";
import {
  ShoppingCart,
  Search,
  User,
  Menu,
  ChevronDown,
  LogOut,
} from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useTranslations } from "next-intl";

// This is a placeholder - replace with actual auth state management
const isLoggedIn = true;

// Get logo URL from environment variable with fallback
const logoUrl = process.env.VERCEL_PUBLIC_LOGO_URL || "/logo.svg";
console.log(process.env.VERCEL_PUBLIC_LOGO_URL);

export default function Navbar() {
  const t = useTranslations("navbar");
  return (
    <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <div className="flex items-center justify-center gap-[64px]">
          <div className="flex items-center justify-center">
            <Link href="/" className="flex items-center justify-center">
              <div className="relative h-16 w-16 flex items-center justify-center">
                <Image
                  src={logoUrl}
                  alt="Logo"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Navigation Links - Hidden on Mobile */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <Link href="/menu" className="nav-link-layout nav-links-text">
              {t("menu")}
            </Link>
          </div>
        </div>

        {/* Right Section - Icons */}
        <div className="flex items-center justify-center space-x-4">
          <button
            className="hover:text-foreground/80 transition-colors flex items-center justify-center h-8 w-8"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          {isLoggedIn ? (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger className="flex items-center justify-center space-x-1 hover:text-foreground/80 transition-colors h-8">
                <User className="h-5 w-5" />
                <ChevronDown className="h-4 w-4" />
              </DropdownMenu.Trigger>

              <DropdownMenu.Portal>
                <DropdownMenu.Content className="min-w-[200px] bg-background rounded-md p-2 shadow-md border mt-2">
                  <DropdownMenu.Item className="flex items-center space-x-2 px-3 py-2 text-sm outline-none cursor-pointer hover:bg-accent rounded-sm">
                    <Link
                      href="/profile"
                      className="flex items-center space-x-2 w-full"
                    >
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="flex items-center space-x-2 px-3 py-2 text-sm outline-none cursor-pointer hover:bg-accent rounded-sm text-red-500">
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          ) : (
            <button
              className="hover:text-foreground/80 transition-colors flex items-center justify-center h-8 w-8"
              aria-label="Login"
            >
              <User className="h-5 w-5" />
            </button>
          )}
          <Link
            href="/cart"
            className="hover:text-foreground/80 transition-colors flex items-center justify-center h-8 w-8"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </Link>

          {/* Mobile Menu Button - Only visible on mobile */}
          <button
            className="md:hidden hover:text-foreground/80 transition-colors flex items-center justify-center h-8 w-8"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
