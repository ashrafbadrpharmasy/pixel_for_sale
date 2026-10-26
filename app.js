// Pixel has been disconnected from Supabase. Database-backed features are intentionally disabled.
document.addEventListener('DOMContentLoaded',()=>{
  const banner=document.createElement('div');
  banner.setAttribute('role','status');
  banner.style.cssText='position:fixed;z-index:99999;inset:12px 12px auto;padding:16px 18px;background:#fff1d6;color:#854d0e;border:1px solid #f5d28a;border-radius:12px;font:16px/1.8 Arial,sans-serif;text-align:center;box-shadow:0 5px 20px #0002';
  banner.textContent='تم فصل Pixel عن قاعدة البيانات. تسجيل الدخول والطلبات والبيكسلات والإدارة متوقفة مؤقتًا. لم يتم حذف بيانات الستور.';
  document.body.prepend(banner);
});