#!/bin/bash
PROJECT_DIR="/Users/gbholding/.gemini/antigravity/scratch/ZALO_MASTER_AI_AGENT_COMMERCIAL"
cd "$PROJECT_DIR" || exit 1

echo "=================================================================="
echo "🚀 ĐANG TỰ ĐỘNG ĐẨY CODE LÊN GITHUB CỦA BẠN"
echo "=================================================================="
echo ""

# Thử lấy Username từ git config hoặc hỏi
GH_USER=$(git config user.name | tr -d ' ')

if [ -z "$GH_USER" ]; then
  GH_USER="goldquocbao"
fi

REPO_URL="https://github.com/$GH_USER/zalo-master-ai-agent-commercial.git"

git remote remove origin 2>/dev/null || true
git remote add origin "$REPO_URL"

echo "⬆️ Đang đẩy mã nguồn lên $REPO_URL ..."
git push -u origin main

if [ $? -eq 0 ]; then
  echo ""
  echo "=================================================================="
  echo "✅ THÀNH CÔNG 100%! CODE ĐÃ LÊN GITHUB!"
  echo "=================================================================="
else
  echo ""
  echo "⚠️ Nếu bị báo 'Repository not found', bạn hãy tạo Repo tên 'zalo-master-ai-agent-commercial' tại https://github.com/new rồi chạy lại script này nhé!"
fi
