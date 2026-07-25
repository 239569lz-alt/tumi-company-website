"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("演示提交成功。正式上线前请接入 Formspree、Web3Forms 或后端接口。");
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="pb-24 pt-16">
      <div className="container-shell grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <SectionTitle
            eyebrow="Contact"
            title="合作、招聘或商务咨询，欢迎与我们联系"
            description="无论你是品牌方、发行伙伴、创作者，还是正在寻找下一段职业旅程，我们都期待听到你的想法。"
          />

          <div className="mt-9 grid gap-4">
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <span className="grid size-11 place-items-center rounded-xl bg-brand-100 text-brand-700">
                <Mail size={20} />
              </span>
              <div>
                <p className="text-sm text-slate-500">商务邮箱</p>
                <p className="font-bold text-slate-950">hello@tumistudio.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
              <span className="grid size-11 place-items-center rounded-xl bg-brand-100 text-brand-700">
                <MapPin size={20} />
              </span>
              <div>
                <p className="text-sm text-slate-500">工作方式</p>
                <p className="font-bold text-slate-950">Remote First · Asia</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-card rounded-[2rem] p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              姓名
              <input required name="name" placeholder="请输入你的姓名" className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100" />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              邮箱
              <input required type="email" name="email" placeholder="name@example.com" className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100" />
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
            联系主题
            <select name="topic" className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100">
              <option>商务合作</option>
              <option>加入团队</option>
              <option>游戏反馈</option>
              <option>其他咨询</option>
            </select>
          </label>

          <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
            留言
            <textarea required name="message" rows={6} placeholder="请简单介绍你的需求……" className="resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100" />
          </label>

          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-500 px-6 py-4 font-bold text-white transition hover:bg-brand-600">
            <Send size={18} />
            发送消息
          </button>

          {message && (
            <p className="mt-4 rounded-xl bg-brand-50 px-4 py-3 text-sm text-brand-800">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
