"use client";

export function NewsletterForm() {
  return (
    <form
      className="mt-4 flex w-full max-w-sm overflow-hidden rounded-pill border border-white/15 bg-white/5"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="you@example.com"
        aria-label="Email address"
        className="flex-1 bg-transparent px-4 py-2 text-body-sm text-white placeholder-white/40 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-primary px-4 text-body-sm font-semibold text-white transition-colors duration-smooth ease-smooth hover:bg-hsq-gold-hover"
      >
        Join
      </button>
    </form>
  );
}
