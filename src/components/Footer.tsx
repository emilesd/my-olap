import Link from "next/link";
import CubeLogo from "./CubeLogo";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Pricing", href: "#pricing" },
  ],
  Solutions: [
    { label: "Enterprise Analytics", href: "#use-cases" },
    { label: "Financial Modeling", href: "#features" },
    { label: "Strategic Planning", href: "#features" },
    { label: "ERP Integration", href: "#how-it-works" },
  ],
  Company: [
    {
      label: "About GoLive Systems",
      href: "https://golivesystems.com",
      external: true,
    },
    { label: "Contact", href: "#contact" },
    { label: "Book a Demo", href: "#demo" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-0">
              <span className="text-2xl font-bold text-white">My</span>
              <CubeLogo size={32} />
              <span className="text-2xl font-bold text-white">lap</span>
              <span className="text-blue-400 text-2xl font-bold">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-sm">
              Personal multi-dimensional OLAP modeling delivered through a
              familiar Excel Add-in. Cube the power of your spreadsheet.
            </p>
            <p className="mt-6 text-xs text-slate-500">
              A product of{" "}
              <a
                href="https://golivesystems.com"
                className="text-slate-400 hover:text-white transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                GoLive Systems, Ltd.
              </a>
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200"
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} GoLive Systems, Ltd. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a
              href="#"
              className="hover:text-slate-300 transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-slate-300 transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-slate-300 transition-colors duration-200"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
