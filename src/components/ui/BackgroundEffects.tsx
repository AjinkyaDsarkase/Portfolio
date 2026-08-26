// Ambient background: slow, blurred gradient blobs behind all page content.
// Pure CSS (no client JS) so it renders identically with or without hydration,
// and `motion-safe:` automatically disables the animation for prefers-reduced-motion.
export function BackgroundEffects() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden bg-white pointer-events-none dark:bg-slate-950"
    >
      <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-accent-300/40 blur-3xl motion-safe:animate-blob-1 dark:bg-accent-700/20" />
      <div className="absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent-400/30 blur-3xl motion-safe:animate-blob-2 dark:bg-accent-600/15" />
      <div className="absolute -bottom-40 left-1/4 h-[30rem] w-[30rem] rounded-full bg-accent-200/40 blur-3xl motion-safe:animate-blob-3 dark:bg-accent-800/20" />
    </div>
  );
}
