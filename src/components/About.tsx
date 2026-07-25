"use client";

import { motion } from "framer-motion";
import { Code2, Gamepad2, Users } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { values } from "@/data/site";

const icons = [Gamepad2, Code2, Users];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-shell">
        <SectionTitle
          eyebrow="About TUMI"
          title="一支小而专注、面向全球玩家的创作团队"
          description="我们相信优秀的 Roblox 体验不仅需要好点子，更需要可靠的技术实现、鲜明的视觉语言和持续的内容运营。"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
                className="glass-card rounded-3xl p-7"
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-brand-100 text-brand-700">
                  <Icon size={24} />
                </span>
                <h3 className="mt-7 text-xl font-black text-slate-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
