export default function Home() {
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
            🟢 Commercial Vercel Deployed
          </span>
        </header>

        {/* Banner Hero */}
        <div style={{ backgroundColor: '#0f172a', padding: '32px', borderRadius: '20px', border: '1px solid #1e293b', marginBottom: '40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', color: '#fff', marginBottom: '12px' }}>Tự Động Hóa Doanh Nghiệp 24/7 Trên Zalo</h2>
          <p style={{ color: '#94a3b8', fontSize: '15px', maxWidth: '600px', margin: '0 auto 24px' }}>Tối ưu 100% chi phí vận hành với 0% RAM local. Tự động trả lời khách hàng tự nhiên như người thật, tải media không logo, soạn văn bản Nghị định 30.</p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <a href="#demo" style={{ backgroundColor: '#2563eb', color: '#fff', padding: '12px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Trải Nghiệm Live Demo</a>
          </div>
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
