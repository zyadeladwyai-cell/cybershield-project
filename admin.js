const adminI18n = {
  ar: {
    btn_view_site: "🌐 واجهة الفحص الرئيسية",
    btn_logout: "خروج",
    admin_title: "لوحة إدارة قواعد الأمان والتهديدات",
    admin_subtitle: "التحكم في القوائم السوداء والبيضاء، وضبط محرك القواعد، ومراقبة السجلات الأمنية المباشرة",
    stat_users: "المستخدمين المسجلين",
    stat_active_now: "🟢 23 نشط الآن",
    stat_blocked_urls: "نطاقات القائمة السوداء",
    stat_manual_auto: "محدثة تلقائياً ويدوياً",
    stat_whitelist: "نطاقات القائمة البيضاء",
    stat_trusted_domains: "نطاقات موثوقة دائماً",
    stat_engine_status: "حالة المحرك الهجين",
    stat_active: "نشط 100%",
    stat_zero_downtime: "بدون أي توقف",
    tab_lists: "إدارة القوائم (Blacklist & Whitelist)",
    tab_rules: "ضبط قواعد الفحص (Rule Engine Config)",
    tab_logs: "سجل عمليات النظام (Audit Logs)",
    opt_blacklist: "قائمة سوداء (Blacklist)",
    opt_whitelist: "قائمة بيضاء (Whitelist)",
    btn_add_domain: "+ إضافة نطاق",
    heading_blacklist: "⛔ القائمة السوداء (محظورة فورياً)",
    heading_whitelist: "✅ القائمة البيضاء (آمنة ومستثناة)",
    rule_ip_title: "فحص عناوين الـ IP المباشرة",
    rule_ip_desc: "اعتبار الروابط التي تستخدم أرقام IP كخطر تصيد فوري",
    rule_at_title: "فحص رمز التوجيه الخفي (@)",
    rule_at_desc: "حجب أي رابط يستغل رمز @ لخداع الضحية بعنوان مضلل",
    rule_https_title: "إلزامية بروتوكول HTTPS",
    rule_https_desc: "إضافة نقاط خطورة على المواقع التي لا تحتوي على شهادات SSL",
    rule_keywords_title: "رصد الكلمات الحساسة (Keywords Monitor)",
    rule_keywords_desc: "تتبع كلمات مثل: login, verify, banking, account, paypal",
    th_url: "الرابط",
    th_ip: "عنوان المستخدم",
    th_verdict: "القرار",
    th_time: "التوقيت",
    th_action: "إجراء",
    btn_block: "حظر فوري",
    btn_del: "حذف"
  },
  en: {
    btn_view_site: "🌐 Scanner Interface",
    btn_logout: "Sign Out",
    admin_title: "Security & Threat Admin Console",
    admin_subtitle: "Manage dynamic Blacklists/Whitelists, tweak detection rules, and view real-time audit logs",
    stat_users: "Registered Users",
    stat_active_now: "🟢 23 Active Now",
    stat_blocked_urls: "Blacklisted Domains",
    stat_manual_auto: "Updated auto & manual",
    stat_whitelist: "Whitelisted Domains",
    stat_trusted_domains: "Always trusted domains",
    stat_engine_status: "Hybrid Engine Status",
    stat_active: "Active 100%",
    stat_zero_downtime: "Zero downtime",
    tab_lists: "Domain Lists (Blacklist & Whitelist)",
    tab_rules: "Rule Engine Tuning",
    tab_logs: "System Audit Logs",
    opt_blacklist: "Blacklist (Malicious)",
    opt_whitelist: "Whitelist (Trusted)",
    btn_add_domain: "+ Add Domain",
    heading_blacklist: "⛔ Blacklist (Immediate Block)",
    heading_whitelist: "✅ Whitelist (Always Safe)",
    rule_ip_title: "Inspect Raw IP Hosts",
    rule_ip_desc: "Flag numeric IP hosts as instant high-risk threat",
    rule_at_title: "Deceptive '@' Redirect Monitor",
    rule_at_desc: "Instantly block URLs exploiting @ symbol redirection",
    rule_https_title: "Enforce HTTPS Protocol",
    rule_https_desc: "Penalize insecure plain HTTP connections without SSL",
    rule_keywords_title: "Sensitive Keywords Detection",
    rule_keywords_desc: "Trace terms like: login, verify, banking, account, paypal",
    th_url: "URL",
    th_ip: "Client IP",
    th_verdict: "Verdict",
    th_time: "Timestamp",
    th_action: "Action",
    btn_block: "Block Now",
    btn_del: "Delete"
  }
};

let currentLang = "ar";
let blacklist = JSON.parse(localStorage.getItem("admin_blacklist") || '["fake-paypal-verify.xyz", "appleid-login-secure.net", "banking-update-auth.com"]');
let whitelist = JSON.parse(localStorage.getItem("admin_whitelist") || '["google.com", "microsoft.com", "github.com", "paypal.com"]');

const mockLogs = [
  { url: "http://192.168.1.15/login.php", ip: "197.34.12.9", verdict: "Phishing", time: "09:14 PM" },
  { url: "https://www.google.com", ip: "156.204.88.3", verdict: "Safe", time: "09:12 PM" },
  { url: "http://secure-update.freehost.cc", ip: "41.68.221.70", verdict: "Suspicious", time: "09:05 PM" }
];

document.addEventListener("DOMContentLoaded", () => {
  renderLists();
  renderLogs();
});

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.getElementById("lang-ar-btn").classList.toggle("active", lang === "ar");
  document.getElementById("lang-en-btn").classList.toggle("active", lang === "en");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (adminI18n[lang][key]) el.textContent = adminI18n[lang][key];
  });
  renderLogs();
}

function switchAdminTab(tab) {
  ["lists", "rules", "logs"].forEach(t => {
    document.getElementById(`tab-${t}`).classList.toggle("active", t === tab);
    document.getElementById(`panel-${t}`).classList.toggle("hidden", t !== tab);
  });
}

function renderLists() {
  const bUl = document.getElementById("blacklist-ul");
  const wUl = document.getElementById("whitelist-ul");

  bUl.innerHTML = blacklist.map((d, i) => `
    <li class="domain-item">
      <span>${d}</span>
      <button class="btn-del" onclick="removeDomain('black', ${i})">✖</button>
    </li>
  `).join("");

  wUl.innerHTML = whitelist.map((d, i) => `
    <li class="domain-item">
      <span>${d}</span>
      <button class="btn-del" onclick="removeDomain('white', ${i})">✖</button>
    </li>
  `).join("");

  document.getElementById("count-blacklist").textContent = blacklist.length;
  document.getElementById("count-whitelist").textContent = whitelist.length;
}

function addDomainEntry() {
  const input = document.getElementById("new-domain-input");
  const val = input.value.trim().toLowerCase();
  const type = document.getElementById("domain-list-type").value;
  if (!val) return;

  if (type === "blacklist") {
    if (!blacklist.includes(val)) blacklist.unshift(val);
    localStorage.setItem("admin_blacklist", JSON.stringify(blacklist));
  } else {
    if (!whitelist.includes(val)) whitelist.unshift(val);
    localStorage.setItem("admin_whitelist", JSON.stringify(whitelist));
  }
  input.value = "";
  renderLists();
}

function removeDomain(type, idx) {
  if (type === "black") {
    blacklist.splice(idx, 1);
    localStorage.setItem("admin_blacklist", JSON.stringify(blacklist));
  } else {
    whitelist.splice(idx, 1);
    localStorage.setItem("admin_whitelist", JSON.stringify(whitelist));
  }
  renderLists();
}

function renderLogs() {
  const tbody = document.getElementById("admin-logs-tbody");
  tbody.innerHTML = mockLogs.map((log) => `
    <tr>
      <td class="url-cell mono">${log.url}</td>
      <td class="mono">${log.ip}</td>
      <td><strong>${log.verdict}</strong></td>
      <td style="color: var(--text-muted);">${log.time}</td>
      <td><button class="btn-retest text-danger" onclick="alert('تم حظر النطاق!')">${adminI18n[currentLang].btn_block}</button></td>
    </tr>
  `).join("");
}

function logout() {
  window.location.href = "auth.html";
}