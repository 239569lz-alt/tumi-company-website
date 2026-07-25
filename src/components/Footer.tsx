export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/65 py-8">
      <div className="container-shell flex flex-col justify-between gap-5 text-sm text-slate-500 md:flex-row md:items-center">
        <div>
          <strong className="text-slate-950">TUMI Studio</strong>
          <span className="ml-3">Roblox Game Experiences</span>
        </div>
        <p>© {new Date().getFullYear()} TUMI Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}
