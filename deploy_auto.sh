#!/bin/bash

echo "=================================================================="
echo "🚀 SCRIPT TỰ ĐỘNG ĐẨY CODE LÊN GITHUB & DEPLOY VERCEL"
echo "=================================================================="
echo ""

# 1. Kiểm tra vị trí mã nguồn
PROJECT_DIR="/Users/gbholding/.gemini/antigravity/scratch/zalo-master-ai-agent-commercial"
cd "$PROJECT_DIR" || exit 1

echo "📂 Đang ở thư mục mã nguồn: $PROJECT_DIR"
echo ""

# 2. Nhập GitHub Username
read -p "👉 Nhập Tên Tài Khoản GitHub của anh/chị (ví dụ: doanquochoa): " GH_USER

if [ -z "$GH_USER" ]; then
  echo "❌ Chưa nhập Tên tài khoản GitHub. Vui lòng chạy lại script!"
  exit 1
fi

REPO_URL="https://github.com/$GH_USER/zalo-master-ai-agent-commercial.git"

echo ""
echo "🔗 Đã tạo liên kết GitHub Remote: $REPO_URL"
git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"

echo ""
echo "⬆️ Đang đẩy mã nguồn lên GitHub..."
git push -u origin main

echo ""
echo "=================================================================="
echo "✅ ĐÃ ĐẨY CODE LÊN GITHUB THÀNH CÔNG!"
echo "👉 Mời anh/chị mở https://vercel.com/new để bấm Deploy mượt mà 1-Click!"
echo "=================================================================="
