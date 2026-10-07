'use client';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('chat');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Dạ vâng Anh Quốc Bảo! Em là Trợ Lý Cá Nhân Zalo Master AI. Em đã sẵn sàng hỗ trợ Anh quản lý công việc, tải media, soạn văn bản và nhắc lịch ạ!' }
  ]);
  const [loading, setLoading] = useState(false);

  // Settings state
  const [geminiKey, setGeminiKey] = useState('');
  const [zaloPhone, setZaloPhone] = useState('0908xxxxxx');
  const [ownerTelegramId, setOwnerTelegramId] = useState('');
  const [isZaloConnected, setIsZaloConnected] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');

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
        body: JSON.stringify({ text: userMsg, userName: 'Anh Quốc Bảo' })
      });
      const data = await res.json();
      if (data.success) {
        setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
      } else {
        setMessages((prev) => [...prev, { sender: 'bot', text: 'Dạ xin lỗi Anh, em gặp sự cố xử lý tin nhắn ạ.' }]);
      }
    } catch (err) {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Dạ xin lỗi Anh, không thể kết nối tới máy chủ AI.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setSaveStatus('🟢 Đã lưu cấu hình cá nhân thành công!');
    setTimeout(() => setSaveStatus(''), 4000);
  };

  const handleConnectZalo = () => {
    setLoading(true);
    setTimeout(() => {
      setIsZaloConnected(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <main style={{ backgroundColor: '#090d16', color: '#f8fafc', fontFamily: 'system-ui, -apple-system, sans-serif', minHeight: '100vh', margin: 0, padding: '0 0 40px 0' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '24px 20px' }}>
        
        {/* Top Personal Header */}
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '20px', marginBottom: '24px' }}>
          <div>
            <h1 style={{ color: '#38bdf8', fontSize: '24px', margin: 0, display: 'flex', alignItems: 'center', gap: '10px' }}>
              👤 Zalo Master AI — Trợ Lý Cá Nhân
            </h1>
            <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '4px' }}>
              Chủ sở hữu: <strong style={{ color: '#f8fafc' }}>Anh Quốc Bảo</strong> | Vận hành Serverless Cloud 24/7 (0% RAM Local)
            </p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ backgroundColor: isZaloConnected ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)', color: isZaloConnected ? '#34d399' : '#fbbf24', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', border: `1px solid ${isZaloConnected ? 'rgba(16,185,129,0.3)' : 'rgba(245,158,11,0.3)'}`, fontWeight: 'bold' }}>
              {isZaloConnected ? '🟢 Zalo Cá Nhân: ĐÃ KẾT NỐI' : '🟠 Zalo: CHỜ QUÉT QR'}
            </span>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '1px solid #1e293b', paddingBottom: '12px' }}>
          {[
            { id: 'chat', label: '💬 Bàn Làm Việc & Chat AI', icon: '💬' },
            { id: 'zalo_qr', label: '📱 Kết Nối QR Zalo Cá Nhân', icon: '📱' },
            { id: 'settings', label: '⚙️ Cấu Hình API & Telegram VIP', icon: '⚙️' },
            { id: 'skills', label: '⚡ 12 Nhóm Năng Lực', icon: '⚡' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                backgroundColor: activeTab === tab.id ? '#2563eb' : '#0f172a',
                color: activeTab === tab.id ? '#fff' : '#94a3b8',
                border: activeTab === tab.id ? '1px solid #3b82f6' : '1px solid #1e293b',
                padding: '10px 18px',
                borderRadius: '12px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '13px',
                transition: 'all 0.2s'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* TAB 1: INTERACTIVE WORKSPACE & AI CHAT */}
        {activeTab === 'chat' && (
          <div>
            <div style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '20px', border: '1px solid #1e293b', marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '18px', color: '#38bdf8', margin: 0 }}>💬 Khung Điều Hành Trợ Lý AI</h2>
                <span style={{ fontSize: '12px', color: '#64748b' }}>Phản hồi theo chuẩn Giọng điệu Tự nhiên: "dạ/vâng/ạ"</span>
              </div>

              {/* Chat Message Box */}
              <div style={{ backgroundColor: '#090d16', borderRadius: '12px', padding: '16px', height: '340px', overflowY: 'auto', marginBottom: '16px', border: '1px solid #1e293b', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {messages.map((msg, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
                    <div style={{
                      maxWidth: '82%',
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
                      ⏳ Trợ Lý AI đang xử lý...
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Action Suggestion Chips */}
              <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '12px' }}>
                {[
                  '📥 /download https://tiktok.com/...',
                  '📝 Soạn hợp đồng dịch vụ chuẩn NĐ 30',
                  '⏰ Nhắc lịch họp chiều nay lúc 15h',
                  '💼 Báo cáo tin nhắn VIP qua Telegram'
                ].map((cmd, idx) => (
                  <button
                    key={idx}
                    onClick={() => setInput(cmd)}
                    style={{ backgroundColor: '#1e293b', color: '#38bdf8', border: '1px solid #334155', borderRadius: '20px', padding: '6px 12px', fontSize: '12px', cursor: 'pointer', whiteSpace: 'nowrap' }}
                  >
                    {cmd}
                  </button>
                ))}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSend} style={{ display: 'flex', gap: '10px' }}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Nhập yêu cầu trợ lý cá nhân (ví dụ: tải video, soạn văn bản, nhắc việc...)..."
                  style={{ flex: 1, backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none' }}
                />
                <button
                  type="submit"
                  disabled={loading}
                  style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '12px', padding: '12px 24px', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer', fontSize: '14px' }}
                >
                  Gửi Yêu Cầu
                </button>
              </form>
            </div>
          </div>
        )}

        {/* TAB 2: ZALO QR CONNECT */}
        {activeTab === 'zalo_qr' && (
          <div style={{ backgroundColor: '#0f172a', padding: '28px', borderRadius: '20px', border: '1px solid #1e293b', textAlign: 'center' }}>
            <h2 style={{ fontSize: '20px', color: '#38bdf8', marginTop: 0, marginBottom: '8px' }}>📱 Kết Nối Trợ Lý Với Zalo Cá Nhân Của Anh</h2>
            <p style={{ color: '#94a3b8', fontSize: '14px', maxWidth: '600px', margin: '0 auto 24px' }}>
              Quét mã QR dưới đây bằng ứng dụng Zalo trên điện thoại để cấp quyền tự động trả lời, quản lý nhóm và tải media cho tài khoản Zalo cá nhân của Anh.
            </p>

            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '16px', display: 'inline-block', marginBottom: '20px', border: '4px solid #2563eb' }}>
              {/* Dummy QR placeholder SVG for Zalo Personal Auth */}
              <svg width="180" height="180" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" fill="white"/>
                <path d="M10 10H40V40H10V10ZM15 15V35H35V15H15Z" fill="#090D16"/>
                <path d="M20 20H30V30H20V20Z" fill="#2563EB"/>
                <path d="M60 10H90V40H60V10ZM65 15V35H85V15H65Z" fill="#090D16"/>
                <path d="M70 20H80V30H70V20Z" fill="#2563EB"/>
                <path d="M10 60H40V90H10V60ZM15 65V85H35V65H15Z" fill="#090D16"/>
                <path d="M20 70H30V80H20V70Z" fill="#2563EB"/>
                <rect x="50" y="50" width="15" height="15" fill="#090D16"/>
                <rect x="70" y="50" width="20" height="10" fill="#2563EB"/>
                <rect x="50" y="75" width="25" height="15" fill="#090D16"/>
                <rect x="80" y="70" width="10" height="20" fill="#2563EB"/>
              </svg>
            </div>

            <div>
              {!isZaloConnected ? (
                <button
                  onClick={handleConnectZalo}
                  disabled={loading}
                  style={{ backgroundColor: '#10b981', color: '#fff', border: 'none', borderRadius: '12px', padding: '14px 28px', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}
                >
                  {loading ? '⏳ Đang xác nhận kết nối...' : '✅ Giả Lập Đã Quét Mã QR Zalo'}
                </button>
              ) : (
                <div style={{ backgroundColor: 'rgba(16,185,129,0.15)', color: '#34d399', padding: '12px 24px', borderRadius: '12px', display: 'inline-block', fontWeight: 'bold', border: '1px solid rgba(16,185,129,0.3)' }}>
                  🎉 Tài khoản Zalo Cá Nhân đã kết nối thành công! Trợ lý AI đang chạy tự động 24/7.
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: CONFIGURATION */}
        {activeTab === 'settings' && (
          <div style={{ backgroundColor: '#0f172a', padding: '24px', borderRadius: '20px', border: '1px solid #1e293b' }}>
            <h2 style={{ fontSize: '18px', color: '#38bdf8', marginTop: 0, marginBottom: '16px' }}>⚙️ Cấu Hình Khóa Cá Nhân (API Keys & Protection)</h2>
            
            {saveStatus && (
              <div style={{ backgroundColor: 'rgba(16,185,129,0.15)', color: '#34d399', padding: '12px', borderRadius: '10px', marginBottom: '20px', fontSize: '13px', border: '1px solid rgba(16,185,129,0.3)' }}>
                {saveStatus}
              </div>
            )}

            <form onSubmit={handleSaveSettings} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginBottom: '6px' }}>🔑 Google Gemini API Key (Bộ Não AI Cá Nhân)</label>
                <input
                  type="password"
                  value={geminiKey}
                  onChange={(e) => setGeminiKey(e.target.value)}
                  placeholder="AIzaSy... (Để trống nếu dùng mặc định trên Vercel Server)"
                  style={{ width: '100%', backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '13px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginBottom: '6px' }}>📱 Số Điện Thoại Zalo Cá Nhân Khai Thác</label>
                <input
                  type="text"
                  value={zaloPhone}
                  onChange={(e) => setZaloPhone(e.target.value)}
                  style={{ width: '100%', backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '13px', outline: 'none' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', color: '#94a3b8', marginBottom: '6px' }}>💼 Telegram Chat ID (Báo Gấp Tin Nhắn VIP Khẩn Cấp)</label>
                <input
                  type="text"
                  value={ownerTelegramId}
                  onChange={(e) => setOwnerTelegramId(e.target.value)}
                  placeholder="Ví dụ: 123456789 (Nhận báo cáo khi có khách VIP cần Anh tiếp quản)"
                  style={{ width: '100%', backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '10px', padding: '10px 14px', color: '#fff', fontSize: '13px', outline: 'none' }}
                />
              </div>

              <button
                type="submit"
                style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '10px', padding: '12px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px', marginTop: '8px' }}
              >
                💾 Lưu Cấu Hình Cá Nhân
              </button>
            </form>
          </div>
        )}

        {/* TAB 4: 12 CAPABILITY MODULES */}
        {activeTab === 'skills' && (
          <div>
            <h3 style={{ fontSize: '18px', color: '#fff', marginBottom: '16px' }}>⚡ 12 Nhóm Năng Lực Trợ Lý Cá Nhân Zalo</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
              {[
                { icon: '💬', title: '1. Chat Rich Text', desc: 'Xưng hô "Anh Quốc Bảo", định dạng chữ màu' },
                { icon: '📑', title: '2. Đa Định Dạng', desc: 'Chuyển giọng nói thành chữ, đọc PDF/Word' },
                { icon: '🎨', title: '3. Sáng Tạo AI', desc: 'Vẽ ảnh AI, tạo giọng đọc truyền cảm' },
                { icon: '🎬', title: '4. Xưởng Video', desc: 'Tạo video VOX, video ngắn nhanh' },
                { icon: '📥', title: '5. Tải Media', desc: 'Cobalt Engine tải TikTok/FB không dính logo' },
                { icon: '⏰', title: '6. Lịch Nhắc Việc', desc: 'Tự động hẹn giờ nhắc lịch làm việc' },
                { icon: '💼', title: '7. Trợ Lý Chủ', desc: 'Gửi thông báo khẩn qua Telegram cho Anh' },
                { icon: '📝', title: '8. Văn Phòng Số', desc: 'Soạn thảo văn bản chuẩn Nghị định 30' },
                { icon: '🔎', title: '9. Deep Search', desc: 'Tra cứu tin tức Web & MCP Plugins' },
                { icon: '🧠', title: '10. Trí Nhớ Dài Hạn', desc: 'Lưu nhớ lịch sử giao tiếp từng khách' },
                { icon: '🛡️', title: '11. Quản Trị Nhóm', desc: 'Tự động xóa tin rác, duyêt người vào nhóm' },
                { icon: '🧠', title: '12. Second Brain', desc: 'Đồng bộ toàn bộ ghi chú sang Notion' }
              ].map((item, idx) => (
                <div key={idx} style={{ backgroundColor: '#0f172a', padding: '20px', borderRadius: '16px', border: '1px solid #1e293b' }}>
                  <div style={{ fontSize: '24px', marginBottom: '8px' }}>{item.icon}</div>
                  <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#e2e8f0', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <footer style={{ borderTop: '1px solid #1e293b', marginTop: '40px', paddingTop: '20px', textAlign: 'center', color: '#64748b', fontSize: '13px' }}>
          Zalo Master AI Agent — Trợ Lý Cá Nhân Dành Cho Anh Quốc Bảo © 2026.
        </footer>
      </div>
    </main>
  );
}
