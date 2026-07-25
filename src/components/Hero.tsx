"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Image from "next/image";
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="container-shell grid items-center gap-14 lg:grid-cols-[1.04fr_.96fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm">
            <Sparkles size={16} />
            为 Roblox 玩家创造下一段精彩旅程
          </div>

          <h1 className="text-balance text-5xl font-black leading-[1.05] tracking-[-0.045em] text-slate-950 md:text-7xl">
            创造值得被
            <span className="block bg-gradient-to-r from-brand-500 to-cyan-400 bg-clip-text text-transparent">
              千万玩家记住
            </span>
            的游戏世界
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
            TUMI Studio 专注于 Roblox 平台的游戏研发、内容更新与社区运营。
            我们将创意、技术和玩家反馈结合，打造具有长期生命力的互动体验。
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#games" className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-4 font-bold text-white shadow-lg shadow-brand-500/25 transition hover:-translate-y-1 hover:bg-brand-600">
              探索我们的游戏
              <ArrowRight size={18} />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 font-bold text-slate-800 transition hover:-translate-y-1 hover:border-brand-300">
              <Play size={18} />
              了解工作室
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-5 border-t border-slate-200 pt-7">
            {[
              ["100M+", "累计访问"],
              ["12+", "核心成员"],
              ["40+", "已发布体验"]
            ].map(([value, label]) => (
              <div key={label}>
                <strong className="block text-2xl font-black text-slate-950 md:text-3xl">{value}</strong>
                <span className="mt-1 block text-sm text-slate-500">{label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="relative"
        >
          <div className="absolute -left-10 top-12 size-40 rounded-full bg-cyan-300/30 blur-3xl" />
          <div className="absolute -right-8 bottom-10 size-48 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="glass-card relative overflow-hidden rounded-[2.2rem] p-4">
            <div className="relative aspect-[4/4.4] overflow-hidden rounded-[1.7rem] bg-gradient-to-br from-slate-950 via-brand-800 to-cyan-500 p-7 text-white">
              <div className="absolute inset-0 bg-grid bg-[size:28px_28px] opacity-20" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-bold backdrop-blur">
                    FEATURED EXPERIENCE
                  </span>
                  <span className="grid size-12 place-items-center rounded-2xl bg-white/15 text-2xl backdrop-blur">☁️</span>
                </div>

                <div className="relative mx-auto grid size-56 place-items-center rounded-[3rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur md:size-72">
                  <div className="absolute inset-5 rounded-[2.2rem] border border-white/15" />
                  <div className="relative h-full w-full overflow-hidden rounded-[2.2rem]">
  				<Image
    				src="/images/Top.png"
    				alt="游戏封面"
    				fill
    				sizes="(max-width: 768px) 224px, 288px"
    				className="object-cover"
  				/>
			  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-100">
                    Incremental Simulator
                  </p>
                  <h2 className="mt-2 text-4xl font-black">Get Fat to Break Tape 🍗</h2>
                  <div className="mt-5 flex gap-3 text-sm">
                    <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">34M+ Visits</span>
                    <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur">98% Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
