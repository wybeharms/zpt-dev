const SignInScreen = ({ onSignIn }) => {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const submit = (e) => {
    e && e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); onSignIn && onSignIn(email || "demo@zptpartners.com"); }, 600);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-off-white px-6">
      <div className="w-full max-w-sm rounded-xl border border-border-warm bg-white p-8 shadow-sm">
        <div className="flex items-center gap-2.5 font-logo text-base font-medium tracking-tight text-navy">
          <img src="../../assets/favicon.png" alt="" className="h-6 w-6" />
          ZPT Partners
        </div>
        <h1 className="mt-6 font-heading text-2xl font-semibold text-navy">Sign in to the portal</h1>
        <p className="mt-1 text-sm text-text-muted">We'll send a magic link to your work email.</p>

        <form className="mt-6" onSubmit={submit}>
          <label className="mb-1 block text-xs font-medium text-text-muted">Work email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full rounded border border-border-warm bg-white px-3 py-2 text-sm text-text-primary outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold"
          />
          <button
            type="submit"
            className="mt-4 w-full rounded bg-gold px-4 py-2.5 font-logo text-sm font-medium text-navy transition-colors hover:bg-gold-light"
            disabled={loading}
          >
            {loading ? "Sending link..." : "Send magic link"}
          </button>
        </form>

        <div className="mt-6 border-t border-border-warm pt-4 text-center text-xs text-text-muted">
          Trouble signing in? Email{" "}
          <a className="text-slate-blue underline underline-offset-2 transition-colors hover:text-navy cursor-pointer">request@zptpartners.com</a>
        </div>
      </div>
    </div>
  );
};

window.SignInScreen = SignInScreen;
