"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  ["首页", "#home"],
  ["关于我们", "#about"],
  ["产品", "#games"],
  ["招聘", "#careers"],
  ["联系我们", "#contact"]
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/75 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="TUMI Studio 首页">
          <Image
    		src="/images/logo.png"
    		alt="TUMI Studio Logo"
    		width={200}
    		height={100}
    		className="rounded-xl"
		/>
          <span>
            <strong className="block text-base tracking-[0.18em] text-slate-950">TUMI</strong>
            <span className="block text-[10px] font-semibold tracking-[0.28em] text-brand-600">
              GAME STUDIO
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-brand-600">
              {label}
            </a>
          ))}
          <a href="#careers" className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-600">
            加入我们
          </a>
        </nav>

        <button
          onClick={() => setOpen((value) => !value)}
          className="grid size-11 place-items-center rounded-xl border border-slate-200 bg-white md:hidden"
          aria-label="打开导航菜单"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="container-shell mb-4 grid gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-soft md:hidden">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-brand-50 hover:text-brand-700"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
