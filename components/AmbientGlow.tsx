"use client";

export default function AmbientGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Pink glow top-right */}
      <div
        className="absolute -top-[20%] -right-[10%] h-[600px] w-[600px] rounded-full opacity-10 blur-[120px]"
        style={{ background: "radial-gradient(circle, #ff2d7a 0%, transparent 70%)" }}
      />
      {/* Cyan glow bottom-left */}
      <div
        className="absolute -bottom-[20%] -left-[10%] h-[600px] w-[600px] rounded-full opacity-10 blur-[120px]"
        style={{ background: "radial-gradient(circle, #00f0ff 0%, transparent 70%)" }}
      />
      {/* Subtle center glow */}
      <div
        className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-5 blur-[100px]"
        style={{ background: "radial-gradient(circle, #ff2d7a 0%, #00f0ff 50%, transparent 70%)" }}
      />
    </div>
  );
}
