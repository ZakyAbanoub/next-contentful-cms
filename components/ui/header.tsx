import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import { getContentForNavigation } from "@/content/queries";

export default async function Header() {
  const data = await getContentForNavigation("Header");
  const links = data.navigationCollection.items[0].linksCollection.items;

  return (
    <header className="absolute z-30 w-full">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-1">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex flex-wrap items-center justify-center grow">
              {links &&
                links.length > 0 &&
                links.map((link) => (
                  <li key={link.label}>
                    <Link
                      className="mx-4 text-sm font-medium transition duration-150 ease-in-out text-slate-300 hover:text-white lg:mx-5"
                      href={link.link}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex items-center justify-end flex-1">
            <li>
              <Link
                className="text-sm font-medium transition duration-150 ease-in-out text-slate-300 hover:text-white whitespace-nowrap"
                href="/signin"
              >
                Sign in
              </Link>
            </li>
            <li className="ml-6">
              <Link
                className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
                href="/signup"
              >
                <span className="relative inline-flex items-center">
                  Sign up{" "}
                  <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </span>
              </Link>
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
