export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy pb-14 pt-20 text-cream">
      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        <div className="flex flex-col items-center">
          {/* Split ornament: two halves with the monogram centered between */}
          <div className="flex w-full max-w-[900px] items-center justify-center gap-6 md:gap-10">
            <div
              aria-hidden="true"
              className="h-20 flex-1 opacity-50 md:h-24"
              style={{
                backgroundImage:
                  "url('/landing_page/Footer Ornament Big.png')",
                backgroundSize: "200% 100%",
                backgroundPosition: "left center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <img
              src="/brand/zpt-monogram-light.svg"
              alt="ZPT"
              className="h-16 w-16 shrink-0 md:h-20 md:w-20"
            />
            <div
              aria-hidden="true"
              className="h-20 flex-1 opacity-50 md:h-24"
              style={{
                backgroundImage:
                  "url('/landing_page/Footer Ornament Big.png')",
                backgroundSize: "200% 100%",
                backgroundPosition: "right center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>

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
