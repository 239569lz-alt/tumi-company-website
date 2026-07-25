"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32 md:pb-32 md:pt-44"
    >
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="container-shell grid items-center gap-10 lg:grid-cols-[1.04fr_.96fr] lg:gap-14">
        {/* 左侧内容 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3 py-2 text-xs font-semibold text-brand-700 shadow-sm sm:mb-6 sm:px-4 sm:text-sm">
            <Sparkles size={16} />
            为 Roblox 玩家创造下一段精彩旅程
          </div>

          <h1 className="text-balance text-4xl font-black leading-[1.05] tracking-[-0.045em] text-slate-950 sm:text-5xl md:text-7xl">
            创造值得被
            <span className="block bg-gradient-to-r from-brand-500 to-cyan-400 bg-clip-text text-transparent">
              千万玩家记住
            </span>
            的游戏世界
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:mt-7 sm:text-lg sm:leading-8">
            TUMI Studio 专注于 Roblox 平台的游戏研发、内容更新与社区运营。
            我们将创意、技术和玩家反馈结合，打造具有长期生命力的互动体验。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#games"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-5 py-3.5 font-bold text-white shadow-lg shadow-brand-500/25 transition hover:-translate-y-1 hover:bg-brand-600 sm:px-6 sm:py-4"
            >
              探索我们的游戏
              <ArrowRight size={18} />
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3.5 font-bold text-slate-800 transition hover:-translate-y-1 hover:border-brand-300 sm:px-6 sm:py-4"
            >
              <Play size={18} />
              了解工作室
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-slate-200 pt-6 sm:mt-12 sm:gap-5 sm:pt-7">
            {[
              ["100M+", "累计访问"],
              ["12+", "核心成员"],
              ["40+", "已发布体验"],
            ].map(([value, label]) => (
              <div key={label}>
                <strong className="block text-xl font-black text-slate-950 sm:text-2xl md:text-3xl">
                  {value}
                </strong>
                <span className="mt-1 block text-xs text-slate-500 sm:text-sm">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 右侧游戏卡片 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.75, delay: 0.12 }}
          className="relative w-full max-w-xl justify-self-center lg:max-w-none"
        >
          <div className="absolute -left-10 top-12 size-40 rounded-full bg-cyan-300/30 blur-3xl" />
          <div className="absolute -right-8 bottom-10 size-48 rounded-full bg-brand-500/20 blur-3xl" />

          <div className="glass-card relative overflow-hidden rounded-[1.6rem] p-3 sm:rounded-[2.2rem] sm:p-4">
            <div className="relative overflow-hidden rounded-[1.3rem] bg-gradient-to-br from-slate-950 via-brand-800 to-cyan-500 p-5 text-white sm:rounded-[1.7rem] sm:p-7">
              <div className="absolute inset-0 bg-grid bg-[size:28px_28px] opacity-20" />

              <div className="relative flex flex-col gap-5 sm:gap-7">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-3 py-2 text-[10px] font-bold backdrop-blur sm:px-4 sm:text-xs">
                    FEATURED EXPERIENCE
                  </span>

                  <span className="grid size-10 place-items-center rounded-xl bg-white/15 text-xl backdrop-blur sm:size-12 sm:rounded-2xl sm:text-2xl">
                    ☁️
                  </span>
                </div>

                <div className="relative mx-auto aspect-square w-full max-w-[220px] overflow-hidden rounded-[1.7rem] border border-white/20 bg-white/10 shadow-2xl backdrop-blur sm:max-w-[288px] sm:rounded-[2.5rem]">
                  <Image
                    src="/images/Top.png"
                    alt="Get Fat to Break Tape 游戏封面"
                    fill
                    priority
                    sizes="(max-width: 640px) 220px, 288px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100 sm:text-sm sm:tracking-[0.2em]">
                    Incremental Simulator
                  </p>

                  <h2 className="mt-2 text-2xl font-black leading-tight sm:text-4xl">
                    Get Fat to Break Tape 🍗
                  </h2>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs sm:mt-5 sm:gap-3 sm:text-sm">
                    <span className="rounded-full bg-white/15 px-3 py-2 backdrop-blur sm:px-4">
                      34M+ Visits
                    </span>

                    <span className="rounded-full bg-white/15 px-3 py-2 backdrop-blur sm:px-4">
                      98% Rating
                    </span>
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