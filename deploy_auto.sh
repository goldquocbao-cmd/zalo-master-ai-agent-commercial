#!/bin/bash
echo "=================================================================="
echo "🚀 SCRIPT TỰ ĐỘNG ĐẨY CODE LÊN GITHUB & AUTO DEPLOY VERCEL"
echo "=================================================================="
echo ""

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_DIR" || exit 1
echo "📂 Thư mục mã nguồn: $PROJECT_DIR"

GH_USER=$(git config user.name | tr -d ' ')
if [ -z "$GH_USER" ]; then
  GH_USER="goldquocbao-cmd"
fi

REPO_URL="https://github.com/$GH_USER/zalo-master-ai-agent-commercial.git"
echo "🔗 Liên kết GitHub Remote: $REPO_URL"

git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"

echo "⬆️ Đang đẩy mã nguồn lên GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "=================================================================="
  echo "✅ THÀNH CÔNG 100%! CODE ĐÃ LÊN GITHUB VÀ SẴN SÀNG VERCEL AUTO-DEPLOY!"
  echo "=================================================================="
else
  echo ""
  echo "⚠️ Vui lòng kiểm tra quyền truy cập hoặc tạo repo tại: https://github.com/new"
fi
