export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    const body = await req.json();
    const { text, userName } = body;

    let reply = `Dạ vâng ${userName || 'Anh/Chị'}! Em là Trợ lý Zalo AI Master. Anh/chị cần em hỗ trợ công việc gì ạ?`;
    if (text?.startsWith('/download')) {
      reply = '📥 [Zalo Agent - Nhóm 5 Tải Media] Đã nhận link! Đang trích xuất video không logo qua Cobalt API...';
    } else if (text?.toLowerCase().includes('soạn văn bản')) {
      reply = '📝 [Zalo Agent - Nhóm 8 Văn Phòng Số] Dạ vâng, AI đang khởi tạo mẫu văn bản theo chuẩn Nghị định 30/2020/NĐ-CP!';
    }

    return Response.json({ success: true, reply });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
