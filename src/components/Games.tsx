"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { games } from "@/data/site";

export default function Games() {
  return (
    <section id="games" className="py-24">
      <div className="container-shell">
        <SectionTitle
          eyebrow="Our Games"
          title="为不同玩家，创造不同类型的快乐"
          description="从增量模拟器到竞技与社交体验，我们持续探索 Roblox 平台上的更多可能。"
          align="center"
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {games.map((game, index) => (
            <motion.article
              key={game.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.1 }}
              className="group overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-soft"
            >
              <div className={`relative aspect-[16/11] bg-gradient-to-br ${game.accent} p-6`}>
                <div className="absolute inset-0 bg-grid bg-[size:26px_26px] opacity-20" />
                <div className="relative flex h-full items-center justify-center">
                  <div className="grid size-40 place-items-center rounded-[2.5rem] border border-white/20 bg-white/15 text-7xl shadow-2xl backdrop-blur transition duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    {game.icon}
                  </div>
                </div>
              </div>

              <div className="p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-600">{game.category}</p>
                    <h3 className="mt-2 text-2xl font-black text-slate-950">{game.title}</h3>
                  </div>
                  <a
  				href={game.url}
  				target="_blank"
  				rel="noopener noreferrer"
  				className="grid size-11 shrink-0 place-items-center rounded-full border border-slate-200 text-slate-700 transition hover:border-brand-400 hover:bg-brand-50 hover:text-brand-700"
  				aria-label={`在 Roblox 中打开 ${game.title}`}
			>
  				<ArrowUpRight size={19} />
			</a>                
			</div>
                <p className="mt-4 leading-7 text-slate-600">{game.description}</p>
                <div className="mt-6 flex gap-3 text-sm font-semibold text-slate-600">
                  <span className="rounded-full bg-slate-100 px-4 py-2">{game.visits} 访问</span>
                  <span className="rounded-full bg-slate-100 px-4 py-2">{game.rating} 好评</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
