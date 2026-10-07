export const metadata = {
  title: 'Zalo Master AI Agent - Trợ Lý AI Tự Động Hóa 24/7',
  description: 'Giải pháp Zalo AI Agent 12 nhóm năng lực cho Zalo Cá Nhân, OA và Nhóm. Vận hành 0% RAM local trên Vercel Cloud.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#090d16' }}>{children}</body>
    </html>
  );
}
