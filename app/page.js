'use client';
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Dạ vâng! Em là Trợ Lý Zalo Master AI Agent. Em có thể hỗ trợ gì cho anh/chị hôm nay ạ?' }
  ]);
  const [loading, setLoading] = useState(false);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'Zalo Master AI Agent',
    'operatingSystem': 'Cloud Platform',
    'applicationCategory': 'BusinessApplication',
    'description': 'Hệ sinh thái Trợ lý AI Zalo 12 nhóm năng lực tự động hóa doanh nghiệp 24/7 trên Vercel Cloud.',
    'offers': {
      '@type': 'Offer',
      'price': '490000',
      'priceCurrency': 'VND'
    }
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: userMsg, userName: 'Khách Hàng' })
      });
      const data = await res.json();
      if (data.success) {
        setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { sender: 'bot', text: 'Dạ xin lỗi anh/chị, em gặp sự cố xử lý tin nhắn ạ.' }]);
      }
    } catch (err) {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Dạ xin lỗi, không thể kết nối tới máy chủ AI.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ backgroundColor: '#090d16', color: '#f8fafc', fontFamily: 'sans-serif', minHeight: '100vh', margin: 0, padding: 0 }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '20px', marginBottom: '40px' }}>
          <div>
            <h1 style={{ color: '#38bdf8', fontSize: '28px', margin: 0 }}>🤖 Zalo Master AI Agent</h1>
            <p style={{ color: '#94a3b8', fontSize: '14px', marginTop: '6px' }}>Hệ sinh thái Trợ Lý AI - 12 Nhóm Năng Lực - Vercel Cloud Ready</p>
          </div>
          <span style={{ backgroundColor: 'rgba(16,185,129,0.15)', color: '#34d399', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', border: '1px solid rgba(16,185,129,0.3)' }}>
            🟢 Live & Operational
          </span>
        </header>

        {/* Live Demo Interactive Chat Widget */}
        <div id="demo" style={{ backgroundColor: '#0f172a', padding: '24px', borderRadius: '20px', border: '1px solid #3b82f6', marginBottom: '40px', boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.1)' }}>
          <h2 style={{ fontSize: '20px', color: '#38bdf8', marginTop: 0, marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            💬 Dùng Thử Trực Tiếp (Live AI Interactive Demo)
          </h2>

          <div style={{ backgroundColor: '#090d16', borderRadius: '12px', padding: '16px', height: '300px', overflowY: 'auto', marginBottom: '16px', border: '1px solid #1e293b', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '80%',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  backgroundColor: msg.sender === 'user' ? '#2563eb' : '#1e293b',
                  color: '#fff',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  borderBottomRightRadius: msg.sender === 'user' ? '4px' : '16px',
                  borderBottomLeftRadius: msg.sender === 'bot' ? '4px' : '16px'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ backgroundColor: '#1e293b', color: '#94a3b8', padding: '10px 16px', borderRadius: '16px', fontSize: '13px' }}>
                  ⏳ Zalo AI đang phản hồi...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} style={{ display: 'flex', gap: '10px' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập thử: /download https://tiktok.com... hoặc soạn văn bản..."
              style={{ flex: 1, backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none' }}
            />
            <button
              type="submit"
              disabled={loading}
              style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '12px', padding: '12px 24px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer', fontSize: '14px' }}
            >
              Gửi Tin
            </button>
          </form>
        </div>

        {/* 12 Nhóm Năng Lực Grid */}
        <h3 style={{ fontSize: '20px', color: '#fff', marginBottom: '20px' }}>⚡ 12 Nhóm Năng Lực Toàn Năng</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '40px' }}>
          {[
            { icon: '💬', title: '1. Chat Rich Text', desc: 'Định dạng chữ màu, "dạ/vâng/ạ"' },
            { icon: '📑', title: '2. Đa Định Dạng', desc: 'Voice-to-Text, OCR, PDF, Doc' },
            { icon: '🎨', title: '3. Sáng Tạo AI', desc: 'Vẽ ảnh, đọc 2 giọng, nhạc' },
            { icon: '🎬', title: '4. Xưởng Video', desc: 'Video VOX, người que, Chibi' },
            { icon: '📥', title: '5. Tải Media', desc: 'Cobalt Engine không dính logo' },
            { icon: '⏰', title: '6. Lịch Nhắc Việc', desc: 'Hẹn giờ nhắc lịch tự động' },
            { icon: '💼', title: '7. Trợ Lý Chủ', desc: 'Báo gấp tin nhắn VIP qua Telegram' },
            { icon: '📝', title: '8. Văn Phòng Số', desc: 'Soạn văn bản Nghị định 30' },
            { icon: '🔎', title: '9. Deep Search', desc: 'Tra cứu Web & MCP Plugins' },
            { icon: '🧠', title: '10. Trí Nhớ Dài Hạn', desc: 'Nhớ sở thích/lịch sử từng khách' },
            { icon: '🛡️', title: '11. Quản Trị Nhóm', desc: 'Anti-Spam & Auto Kick rác' },
            { icon: '🧠', title: '12. Second Brain', desc: 'Đồng bộ dữ liệu với Notion' }
          ].map((item, idx) => (
            <div key={idx} style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '16px', border: '1px solid #1e293b' }}>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
              <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#e2e8f0', marginBottom: '4px' }}>{item.title}</div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer style={{ borderTop: '1px solid #1e293b', paddingTop: '20px', textAlign: 'center', color: '#64748b', fontSize: '13px' }}>
          Zalo Master AI Agent © 2026 — Triển khai chuẩn Commercial Workflow Standard.
        </footer>
      </div>
    </main>
  );
}
