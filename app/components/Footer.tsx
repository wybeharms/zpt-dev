export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy pb-14 pt-20 text-cream">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col items-center">
          <img
            src="/landing_page/Footer Ornament Navy.png"
            alt=""
            aria-hidden="true"
            className="h-auto w-full max-w-[900px]"
          />

          <nav className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] tracking-wide text-cream/65">
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
