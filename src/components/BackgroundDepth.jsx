export function BackgroundDepth({ disabled }) {
  if (disabled) {
    return null;
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-[-10%] top-[-8%] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,122,24,0.24),transparent_64%)] blur-3xl" />
      <div className="absolute bottom-[-16%] right-[-12%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(86,164,255,0.16),transparent_62%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.04),transparent_38%)]" />
    </div>
  );
}
