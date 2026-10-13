# 🗺️ CODEBASE KNOWLEDGE GRAPH & ARCHITECTURE MAP (ZALO MASTER COMMERCIAL)

> **Bản đồ Tri thức Mã nguồn & Cây quan hệ Phụ thuộc (AST Knowledge Graph)**
> *Được khởi tạo theo chuẩn Codebase Memory MCP & OpenWiki cho hệ thống Zalo Master Commercial.*

---

## 🏛️ 1. TỔNG QUAN KIẾN TRÚC & ĐIỂM VÀO (ENTRY POINTS)

* **Ngôn ngữ:** TypeScript / Next.js 14 App Router
* **Mục tiêu:** Cổng quản lý thương mại & Tự động hóa Zalo AI Agent
* **Triển khai:** Vercel Cloud Auto-Deploy
* **Điểm vào thực thi chính (Entry Points):**
  * `app/layout.tsx` & `app/page.tsx`
  * `app/api/...` (Zalo Webhook & OAuth Endpoints)

---

## 🧭 2. QUY TẮC AGENT
AI Agents luôn tham khảo cấu trúc trong tệp này trước khi sửa đổi logic API và giao diện Next.js.
