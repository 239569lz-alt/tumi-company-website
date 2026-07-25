"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import { roles } from "@/data/site";

export default function Careers() {
  return (
    <section id="careers" className="py-24">
      <div className="container-shell">
        <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-10 text-white shadow-soft md:px-12 md:py-16">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <div>
              <SectionTitle
                eyebrow="Careers"
                title="和我们一起，把大胆的创意变成真实世界"
                description="我们寻找热爱游戏、重视细节并愿意持续学习的伙伴。欢迎程序、美术、设计和运营人才加入。"
              />
              <p className="mt-7 text-sm leading-7 text-slate-400">
                投递邮箱：2675013690@qq.com
                <br />
                请附上简历、作品集和你最喜欢的一款 Roblox 游戏。
              </p>
            </div>

            <div className="grid gap-4">
              {roles.map((role, index) => (
                <motion.article
                  key={role.title}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
                >
                  <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                    <div>
                      <p className="text-sm font-semibold text-cyan-300">{role.type}</p>
                      <h3 className="mt-2 text-xl font-black">{role.title}</h3>
                      <p className="mt-3 leading-7 text-slate-300">{role.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {role.skills.map((skill) => (
                          <span key={skill} className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-slate-200">
                            <CheckCircle2 size={13} />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                   <a
  				href="#contact"
  				className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100"
				>
  				立即投递
  				<ArrowRight size={16} />
			  </a>                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
