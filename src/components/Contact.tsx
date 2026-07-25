"use client";

import { FormEvent, useState } from "react";
import {
  CheckCircle2,
  ExternalLink,
  Gamepad2,
  Globe2,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Youtube,
} from "lucide-react";

import SectionTitle from "./SectionTitle";

const socialLinks = [
  {
    name: "Roblox Group",
    description: "访问官方群组",
    href: "https://www.roblox.com/share/g/35016763",
    icon: Gamepad2,
  },
  ];

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    // 在这里填写你从 Web3Forms 获得的 Access Key
    formData.append(
      "access_key",
      "aad73ceb-25c7-4e70-b7d6-505e050296c8"
    );

    formData.append("subject", "TUMI Studio 官网收到新的联系消息");
    formData.append("from_name", "TUMI Studio Website");

    try {
      setStatus("submitting");
      setMessage("正在发送消息……");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "提交失败");
      }

      setStatus("success");
      setMessage("消息发送成功，我们会尽快与你联系。");
      form.reset();
    } catch {
      setStatus("error");
      setMessage("发送失败，请稍后重试，或直接通过邮箱联系我们。");
    }
  }

  return (
    <section id="contact" className="pb-24 pt-16">
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* 左侧公司联系信息 */}
          <div>
            <SectionTitle
              eyebrow="Contact"
              title="合作、招聘或商务咨询，欢迎与我们联系"
              description="无论你是品牌方、发行伙伴、创作者，还是正在寻找下一段职业旅程，我们都期待听到你的想法。"
            />

            <div className="mt-9 grid gap-4">
              <a
                href="mailto:2675013690@qq.com"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-soft"
              >
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <Mail size={21} />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="text-sm text-slate-500">商务邮箱</p>
                  <p className="truncate font-bold text-slate-950">
                    2675013690@qq.com
                  </p>
                </div>

                <ExternalLink
                  size={18}
                  className="text-slate-400 transition group-hover:text-brand-600"
                />
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <MapPin size={21} />
                </span>

                <div>
                  <p className="text-sm text-slate-500">工作方式</p>
                  <p className="font-bold text-slate-950">
                    Remote First · China
                	  </p>
                </div>
              </div>
            </div>

            {/* 社交平台 */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
                Follow TUMI Studio
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-soft"
                    >
                      <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-700 transition group-hover:bg-brand-100 group-hover:text-brand-700">
                        <Icon size={19} />
                      </span>

                      <span className="min-w-0 flex-1">
                        <strong className="block text-sm text-slate-950">
                          {social.name}
                        </strong>

                        <span className="block truncate text-xs text-slate-500">
                          {social.description}
                        </span>
                      </span>

                      <ExternalLink
                        size={16}
                        className="text-slate-400 transition group-hover:text-brand-600"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 右侧联系表单 */}
          <form
            onSubmit={handleSubmit}
            className="glass-card rounded-[2rem] p-6 md:p-8"
          >
            <div className="mb-7">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-600">
                Send a Message
              </p>

              <h3 className="mt-2 text-2xl font-black text-slate-950">
                告诉我们你的想法
              </h3>

              <p className="mt-2 leading-7 text-slate-600">
                请填写以下信息，我们通常会在一至三个工作日内回复。
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                姓名
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="请输入你的姓名"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                邮箱
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                />
              </label>
            </div>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                公司或团队
                <input
                  name="company"
                  type="text"
                  placeholder="选填"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                />
              </label>

              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                联系主题
                <select
                  required
                  name="topic"
                  defaultValue="商务合作"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
                >
                  <option value="商务合作">商务合作</option>
                  <option value="职位申请">职位申请</option>
                  <option value="发行合作">发行合作</option>
                  <option value="投资咨询">投资咨询</option>
                  <option value="游戏反馈">游戏反馈</option>
                  <option value="其他咨询">其他咨询</option>
                </select>
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700">
              留言
              <textarea
                required
                name="message"
                rows={7}
                placeholder="请简单介绍你的合作需求、职位申请或其他问题……"
                className="resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-brand-400 focus:ring-4 focus:ring-brand-100"
              />
            </label>

            {/* 防垃圾表单字段 */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              aria-hidden="true"
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-500 px-6 py-4 font-bold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 size={19} className="animate-spin" />
                  正在发送……
                </>
              ) : (
                <>
                  <Send size={19} />
                  发送消息
                </>
              )}
            </button>

            {message && (
              <div
                aria-live="polite"
                className={`mt-5 flex items-start gap-3 rounded-2xl px-4 py-3 text-sm ${
                  status === "success"
                    ? "bg-emerald-50 text-emerald-800"
                    : status === "error"
                      ? "bg-red-50 text-red-700"
                      : "bg-brand-50 text-brand-800"
                }`}
              >
                {status === "success" && (
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                )}

                {status === "submitting" && (
                  <Loader2
                    size={18}
                    className="mt-0.5 shrink-0 animate-spin"
                  />
                )}

                <span>{message}</span>
              </div>
            )}

            <p className="mt-5 text-center text-xs leading-6 text-slate-400">
              提交即表示你同意我们仅将这些信息用于回复本次咨询。
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}