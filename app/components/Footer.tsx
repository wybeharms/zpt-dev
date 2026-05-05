import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy pb-14 pt-20 text-cream">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col items-center">
          <Image
            src="/landing_page/Footer Ornament Big.png"
            alt=""
            aria-hidden="true"
            width={520}
            height={120}
            className="h-auto w-[280px] opacity-50 md:w-[420px]"
          />
          <Image
            src="/brand/zpt-wordmark-light.svg"
            alt="ZPT Partners"
            width={140}
            height={32}
            className="mt-12 h-7 w-auto opacity-90"
          />
          <nav className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] tracking-wide text-cream/65">
            <a
              href="#"
              className="transition-colors duration-150 hover:text-cream"
            >
              Privacy
            </a>
            <a
              href="mailto:wybe@zptpartners.com"
              className="transition-colors duration-150 hover:text-cream"
            >
              Contact
            </a>
            <span className="text-cream/40">
              &copy; {year} ZPT Partners
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
