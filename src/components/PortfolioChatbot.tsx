"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";

type Role = "user" | "assistant";

interface Message {
  role: Role;
  content: string;
}

interface QuickQuestion {
  label: string;
  en: string;
  ar: string;
}

const QUICK_QUESTIONS: QuickQuestion[] = [
  { label: "🛠️ مهاراتك إيه؟", en: "What are your skills?", ar: "مهاراتك إيه؟" },
  { label: "💼 مشاريعك", en: "Tell me about your projects", ar: "كلمني عن مشاريعك" },
  { label: "📬 أتواصل معاك إزاي؟", en: "How can I contact you?", ar: "أتواصل معاك إزاي؟" },
  { label: "🎓 خلفيتك التعليمية", en: "What's your education?", ar: "خلفيتك التعليمية إيه؟" },
];

interface PortfolioChatbotProps {
  locale?: string;
}

export default function PortfolioChatbot({ locale = "ar" }: PortfolioChatbotProps) {
  const isAr = locale === "ar";
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "أهلاً! 👋 أنا المساعد الذكي لـ Mohamed Osama. اسألني أي حاجة عن مهاراته، مشاريعه، أو طريقة التواصل معه!\n\nHi! I'm Mohamed's AI assistant. Ask me anything about his skills, projects, or how to reach him!",
    },
  ]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showQuick, setShowQuick] = useState<boolean>(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100);
  }, [isOpen]);

  const sendMessage = async (text?: string): Promise<void> => {
    const userText = text || input.trim();
    if (!userText || isLoading) return;

    setShowQuick(false);
    setInput("");
    const newMessages: Message[] = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // ✅ الـ API call بتروح لـ Next.js route — الـ API key مش ظاهر في المتصفح
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
const reply = data.content?.[0]?.text || data.choices?.[0]?.message?.content || "عذراً، حدث خطأ ما.";
      setMessages([...newMessages, { role: "assistant", content: reply }]);
    } catch {
      setMessages([
        ...newMessages,
        { role: "assistant", content: "عذراً، في مشكلة في الاتصال. حاول تاني! 🙏" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 24px rgba(99,102,241,0.4)",
          zIndex: 1000,
          transition: "transform 0.2s, box-shadow 0.2s",
          fontSize: "24px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.boxShadow = "0 6px 32px rgba(99,102,241,0.5)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(99,102,241,0.4)";
        }}
        aria-label="Open chat"
      >
        {isOpen ? "✕" : "💬"}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
    style={{
      position: "fixed",
      bottom: "90px",
      right: "24px",
      width: "360px",
      maxHeight: "520px",
      borderRadius: "20px",
      background: "#0f0f13",
      border: "1px solid rgba(99,102,241,0.2)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      display: "flex",
      flexDirection: "column",
      zIndex: 999,
      overflow: "hidden",
      animation: "slideUp 0.25s ease",
      // 👇 السطرين دول هيظبطوا التوجيه لو البورتفوليو عربي أو إنجليزي
      direction: isAr ? "rtl" : "ltr",
      textAlign: isAr ? "right" : "left",
    }}
  >
          {/* Header */}
          <div
            style={{
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "18px",
                flexShrink: 0,
              }}
            >
              🤖
            </div>
            <div>
              <div style={{ color: "#fff", fontWeight: "700", fontSize: "15px" }}>
                Mohamed&apos;s Assistant
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#4ade80",
                    display: "inline-block",
                  }}
                />
                Online now
              </div>
            </div>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(99,102,241,0.3) transparent",
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
                }}
              >
                <div
                  style={{
                    maxWidth: "80%",
                    padding: "10px 14px",
                    borderRadius:
                      msg.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
                    background:
                      msg.role === "user"
                        ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                        : "rgba(255,255,255,0.07)",
                    color: "#f1f1f5",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    border:
                      msg.role === "assistant" ? "1px solid rgba(255,255,255,0.08)" : "none",
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isLoading && (
              <div style={{ display: "flex", justifyContent: "flex-start" }}>
                <div
                  style={{
                    padding: "12px 16px",
                    borderRadius: "18px 18px 18px 4px",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                  }}
                >
                  {[0, 0.15, 0.3].map((delay, i) => (
                    <span
                      key={i}
                      style={{
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        background: "#8b5cf6",
                        animation: `bounce 1s infinite ${delay}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Quick questions */}
            {showQuick && messages.length === 1 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginTop: "4px" }}>
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q.label}
                    onClick={() => sendMessage(isAr ? q.ar : q.en)}
                    style={{
                      background: "rgba(99,102,241,0.1)",
                      border: "1px solid rgba(99,102,241,0.25)",
                      borderRadius: "10px",
                      color: "#a5b4fc",
                      padding: "8px 12px",
                      fontSize: "13px",
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "rgba(99,102,241,0.2)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "rgba(99,102,241,0.1)")
                    }
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div
            style={{
              padding: "12px 16px",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              background: "rgba(255,255,255,0.02)",
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isAr ? "اكتب سؤالك هنا..." : "Ask me anything..."}
              disabled={isLoading}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                padding: "10px 14px",
                color: "#f1f1f5",
                fontSize: "14px",
                outline: "none",
                transition: "border-color 0.15s",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(99,102,241,0.6)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
            />
            <button
              onClick={() => sendMessage()}
              disabled={isLoading || !input.trim()}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background:
                  input.trim() && !isLoading
                    ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                    : "rgba(255,255,255,0.08)",
                border: "none",
                cursor: input.trim() && !isLoading ? "pointer" : "not-allowed",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "16px",
                transition: "all 0.15s",
                flexShrink: 0,
              }}
            >
              ➤
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-5px); }
        }
      `}</style>
    </>
  );
}