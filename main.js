const i18n = {
  ar: {
    main_title: "فحص وتحليل أمان الروابط الإلكترونية",
    main_subtitle: "خدمة حماية فورية للكشف عن الروابط الاحتيالية ومواقع التصيد وسرقة البيانات قبل فتحها",
    tab_single: "فحص رابط",
    tab_batch: "فحص روابط متعددة",
    input_placeholder: "ضع الرابط هنا لفحصه، مثال: https://example.com",
    btn_scan: "فحص الرابط",
    btn_scanning: "جاري الفحص...",
    quick_examples_label: "روابط للتجربة:",
    example_safe: "رابط آمن",
    example_suspicious: "رابط مشبوه",
    example_phishing: "رابط تصيد احتيالي",
    btn_batch_scan: "فحص جميع الروابط",
    result_label: "نتيجة الفحص الأمني:",
    threat_level: "مستوى الخطورة",
    btn_download_report: "📥 تحميل تقرير الفحص",
    security_findings_title: "الملاحظات الأمنية المكتشفة",
    analysis_summary_title: "تفاصيل وتحليل الرابط",
    history_title: "سجل الفحوصات السابقة",
    btn_export_csv: "تصدير CSV",
    btn_clear_history: "مسح السجل",
    th_url: "الرابط",
    th_verdict: "الحالة",
    th_threat: "مستوى الخطورة",
    th_time: "التوقيت",
    th_action: "إجراء",
    btn_retest: "إعادة فحص",
    empty_history: "لا توجد أي فحوصات سابقة.",
    f_url_len: "طول الرابط",
    f_dots: "عدد النقاط",
    f_slashes: "الشرطات المائلة (/)",
    f_subdomains: "النطاقات الفرعية",
    f_ip: "استخدام عنوان IP",
    f_at: "وجود رمز تحويل خفي (@)",
    f_https: "تشفير الاتصال (HTTPS)",
    f_words: "كلمات تسجيل حساسة",
    val_yes: "نعم",
    val_no: "لا",
    verdict_safe: "آمن (Safe)",
    verdict_suspicious: "مشبوه (Suspicious)",
    verdict_phishing: "تصيد احتيالي (Phishing)",
    verdict_safe_desc: "الرابط آمن وموثوق، لا توجد أي مؤشرات تهديد أو احتيال.",
    verdict_suspicious_desc: "رابط مشبوه وغير موثوق بنسبة كبيرة، يُنصح بتجنب إدخال أي بيانات سرية.",
    verdict_phishing_desc: "خطر حقيقي! هذا الرابط صفحة تصيد احتيالية لسرقة الحسابات والبيانات.",
    reason_ip: "تم استخدام عنوان IP مباشر بدلاً من اسم نطاق رسمي موثوق.",
    reason_at: "يحتوي الرابط على رمز (@) الذي يُستخدم عادة لتضليل المتصفح وتوجيهه لموقع خفي.",
    reason_http: "الاتصال غير مشفر ولا يحمل شهادة أمان (HTTP فقط).",
    reason_subdomains: "عدد كبير وغير طبيعي من النطاقات الفرعية ({count} نطاقات).",
    reason_dots: "تكرار غير طبيعي للنقاط داخل الرابط ({count} نقاط).",
    reason_length: "طول الرابط كبير جداً بشكل مريب ({count} حرف).",
    reason_words: "يحتوي الرابط على كلمات حساسة تُستغل في الاحتيال: ({words}).",
    reason_clean: "الرابط يتبع المعايير القياسية الآمنة ولم يتم رصد أي سلوك احتيالي."
  },
  en: {
    main_title: "URL Security & Threat Scanner",
    main_subtitle: "Instant cyber-protection to detect phishing URLs and credential-harvesting websites before clicking",
    tab_single: "Single URL",
    tab_batch: "Batch URLs",
    input_placeholder: "Paste URL to check, e.g., https://example.com",
    btn_scan: "Scan URL",
    btn_scanning: "Scanning...",
    quick_examples_label: "Preset Links:",
    example_safe: "Safe Link",
    example_suspicious: "Suspicious Link",
    example_phishing: "Phishing Link",
    btn_batch_scan: "Scan All Links",
    result_label: "Security Assessment:",
    threat_level: "Threat Level",
    btn_download_report: "📥 Download Security Report",
    security_findings_title: "Detected Security Findings",
    analysis_summary_title: "URL Structure Analysis",
    history_title: "Past Scans History",
    btn_export_csv: "Export CSV",
    btn_clear_history: "Clear History",
    th_url: "URL",
    th_verdict: "Status",
    th_threat: "Threat Level",
    th_time: "Time",
    th_action: "Action",
    btn_retest: "Re-scan",
    empty_history: "No past scans recorded yet.",
    f_url_len: "URL Length",
    f_dots: "Dots Count",
    f_slashes: "Slashes Count (/)",
    f_subdomains: "Subdomains Count",
    f_ip: "Uses Raw IP Host",
    f_at: "Hidden Redirect Symbol (@)",
    f_https: "Encrypted (HTTPS)",
    f_words: "Sensitive Keywords",
    val_yes: "Yes",
    val_no: "No",
    verdict_safe: "Safe",
    verdict_suspicious: "Suspicious",
    verdict_phishing: "Phishing",
    verdict_safe_desc: "This URL appears legitimate and safe to visit without detected security risks.",
    verdict_suspicious_desc: "Suspicious patterns detected. Avoid entering sensitive passwords or payment info.",
    verdict_phishing_desc: "High Risk! Malicious phishing signature detected targeting credentials or accounts.",
    reason_ip: "Raw IP address used in place of an official domain name.",
    reason_at: "Deceptive '@' symbol found, commonly used for hidden redirection.",
    reason_http: "Unencrypted transmission (HTTP connection without SSL).",
    reason_subdomains: "Unusually high number of subdomains ({count} subdomains).",
    reason_dots: "Excessive number of dots in the URL structure ({count} dots).",
    reason_length: "Excessively long URL structure ({count} characters).",
    reason_words: "Targeted authentication keywords detected: ({words}).",
    reason_clean: "Standard legitimate link structure. No threats detected."
  }
};

let currentLang = "ar";
const SUSPICIOUS_WORDS = [
  "login", "verify", "account", "update", "banking", "secure", 
  "signin", "ebayisapi", "paypal", "password", "service", "confirm"
];

let lastScanResult = null;
let scanHistory = JSON.parse(localStorage.getItem("user_scan_history") || "[]");

document.addEventListener("DOMContentLoaded", () => {
  renderHistoryTable();

  const singleTab = document.getElementById("single-scan-tab");
  const batchTab = document.getElementById("batch-scan-tab");
  const singlePanel = document.getElementById("single-scan-panel");
  const batchPanel = document.getElementById("batch-scan-panel");

  singleTab.addEventListener("click", () => {
    singleTab.classList.add("active");
    batchTab.classList.remove("active");
    singlePanel.classList.remove("hidden");
    batchPanel.classList.add("hidden");
  });

  batchTab.addEventListener("click", () => {
    batchTab.classList.add("active");
    singleTab.classList.remove("active");
    batchPanel.classList.remove("hidden");
    singlePanel.classList.add("hidden");
  });

  document.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const url = chip.getAttribute("data-url");
      document.getElementById("url-input").value = url;
      triggerScan(url);
    });
  });

  document.getElementById("scan-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const url = document.getElementById("url-input").value.trim();
    if (url) triggerScan(url);
  });

  document.getElementById("batch-scan-btn").addEventListener("click", async () => {
    const lines = document.getElementById("batch-input").value.split("\n").map(l => l.trim()).filter(Boolean);
    if (!lines.length) return alert(currentLang === "ar" ? "يرجى إدخال رابط واحد على الأقل." : "Please enter at least one URL.");

    for (const url of lines) {
      await triggerScan(url, false);
      await sleep(200);
    }
    alert(currentLang === "ar" ? `تم فحص ${lines.length} رابط بنجاح!` : `Successfully scanned ${lines.length} links!`);
  });

  document.getElementById("clear-history").addEventListener("click", () => {
    scanHistory = [];
    localStorage.removeItem("user_scan_history");
    renderHistoryTable();
  });
  document.getElementById("export-csv-btn").addEventListener("click", exportHistoryToCSV);
  document.getElementById("download-report-btn").addEventListener("click", downloadAuditReport);
});

window.setLanguage = function(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.getElementById("lang-ar-btn").classList.toggle("active", lang === "ar");
  document.getElementById("lang-en-btn").classList.toggle("active", lang === "en");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (i18n[lang][key]) el.setAttribute("placeholder", i18n[lang][key]);
  });

  if (lastScanResult) {
    displayResults(lastScanResult, false);
  }

  renderHistoryTable();
};

async function triggerScan(rawUrl, shouldScroll = true) {
  const scanBtn = document.getElementById("scan-btn");
  scanBtn.disabled = true;
  scanBtn.querySelector(".btn-text").textContent = i18n[currentLang].btn_scanning;

  await sleep(350);
  const normalizedUrl = normalizeUrl(rawUrl);
  const features = extractFeatures(normalizedUrl);
  const assessment = computeSecurityAssessment(features);

  lastScanResult = {
    normalizedUrl,
    features,
    assessment
  };

  saveToHistory({
    url: normalizedUrl,
    threatScore: assessment.threatScore,
    verdictKey: assessment.verdictKey,
    timestamp: new Date().toLocaleTimeString(currentLang === "ar" ? "ar-EG" : "en-US")
  });

  displayResults(lastScanResult, shouldScroll);

  scanBtn.disabled = false;
  scanBtn.querySelector(".btn-text").textContent = i18n[currentLang].btn_scan;
}

function normalizeUrl(url) {
  let cleaned = url.trim();
  if (!/^https?:\/\//i.test(cleaned)) cleaned = "http://" + cleaned;
  return cleaned;
}

function extractFeatures(urlStr) {
  let parsed;
  try {
    parsed = new URL(urlStr);
  } catch (e) {
    parsed = { hostname: urlStr, pathname: "", protocol: "http:" };
  }

  const hostname = parsed.hostname || "";
  const length = urlStr.length;
  const dotsCount = (urlStr.match(/\./g) || []).length;
  const slashesCount = (urlStr.match(/\//g) || []).length;
  const hostParts = hostname.split(".");
  const subdomainsCount = hostParts.length > 2 ? hostParts.length - 2 : 0;
  const hasIp = /^(\d{1,3}\.){3}\d{1,3}$/.test(hostname);
  const hasAtSymbol = urlStr.includes("@");
  const isHttps = parsed.protocol === "https:";
  const foundWords = SUSPICIOUS_WORDS.filter(w => urlStr.toLowerCase().includes(w));

  return {
    urlLength: length,
    dotsCount: dotsCount,
    slashesCount: slashesCount,
    subdomainsCount: subdomainsCount,
    hasIp: hasIp,
    hasAtSymbol: hasAtSymbol,
    isHttps: isHttps,
    suspiciousWordsCount: foundWords.length,
    detectedWords: foundWords
  };
}

function computeSecurityAssessment(f) {
  let threatScore = 0;
  const findingKeys = [];

  if (f.hasIp) {
    threatScore += 35;
    findingKeys.push({ key: "reason_ip", type: "danger" });
  }
  if (f.hasAtSymbol) {
    threatScore += 30;
    findingKeys.push({ key: "reason_at", type: "danger" });
  }
  if (!f.isHttps) {
    threatScore += 15;
    findingKeys.push({ key: "reason_http", type: "warn" });
  }
  if (f.subdomainsCount >= 3) {
    threatScore += 20;
    findingKeys.push({ key: "reason_subdomains", count: f.subdomainsCount, type: "warn" });
  }
  if (f.dotsCount > 4) {
    threatScore += 10;
    findingKeys.push({ key: "reason_dots", count: f.dotsCount, type: "warn" });
  }
  if (f.urlLength > 75) {
    threatScore += 10;
    findingKeys.push({ key: "reason_length", count: f.urlLength, type: "warn" });
  }
  if (f.suspiciousWordsCount > 0) {
    threatScore += f.suspiciousWordsCount * 12;
    findingKeys.push({ key: "reason_words", words: f.detectedWords.join(", "), type: "danger" });
  }

  threatScore = Math.min(threatScore, 100);

  let verdictKey = "verdict_safe";
  let badgeClass = "banner-safe";
  let color = "#10b981";
  let icon = "✅";

  if (threatScore >= 60) {
    verdictKey = "verdict_phishing";
    badgeClass = "banner-phishing";
    color = "#ef4444";
    icon = "🚨";
  } else if (threatScore >= 30) {
    verdictKey = "verdict_suspicious";
    badgeClass = "banner-suspicious";
    color = "#f59e0b";
    icon = "⚠️";
  }

  if (findingKeys.length === 0) {
    findingKeys.push({ key: "reason_clean", type: "safe" });
  }

  return { threatScore, verdictKey, badgeClass, color, icon, findingKeys };
}

function displayResults(data, shouldScroll) {
  const resultsArea = document.getElementById("results-area");
  resultsArea.classList.remove("hidden");

  const { features, assessment } = data;
  const t = i18n[currentLang];

  const banner = document.getElementById("decision-banner");
  banner.className = `card decision-banner ${assessment.badgeClass}`;
  document.getElementById("status-icon").textContent = assessment.icon;
  
  const verdictEl = document.getElementById("final-verdict");
  verdictEl.textContent = t[assessment.verdictKey];
  verdictEl.style.color = assessment.color;

  const summaryKey = assessment.verdictKey + "_desc";
  document.getElementById("verdict-summary").textContent = t[summaryKey];
  
  const scoreVal = document.getElementById("threat-score-val");
  scoreVal.textContent = `${assessment.threatScore}%`;
  scoreVal.style.color = assessment.color;

  const barFill = document.getElementById("threat-bar-fill");
  barFill.style.width = `${assessment.threatScore}%`;
  barFill.style.backgroundColor = assessment.color;

  const findingsList = document.getElementById("findings-list");
  findingsList.innerHTML = assessment.findingKeys.map(item => {
    let msg = t[item.key] || "";
    if (item.count !== undefined) msg = msg.replace("{count}", item.count);
    if (item.words !== undefined) msg = msg.replace("{words}", item.words);
    const symbol = item.type === "danger" ? "❌" : (item.type === "warn" ? "⚠️" : "✔️");
    return `<li class="finding-item ${item.type}"><span>${symbol}</span><span>${msg}</span></li>`;
  }).join("");

  const grid = document.getElementById("features-grid");
  grid.innerHTML = `
    <div class="feature-item">
      <span class="feature-name">${t.f_https}</span>
      <span class="feature-val mono ${features.isHttps ? 'text-success' : 'text-danger'}">${features.isHttps ? t.val_yes : t.val_no}</span>
    </div>
    <div class="feature-item">
      <span class="feature-name">${t.f_ip}</span>
      <span class="feature-val mono ${features.hasIp ? 'text-danger' : 'text-success'}">${features.hasIp ? t.val_yes : t.val_no}</span>
    </div>
    <div class="feature-item">
      <span class="feature-name">${t.f_at}</span>
      <span class="feature-val mono ${features.hasAtSymbol ? 'text-danger' : 'text-success'}">${features.hasAtSymbol ? t.val_yes : t.val_no}</span>
    </div>
    <div class="feature-item">
      <span class="feature-name">${t.f_words}</span>
      <span class="feature-val mono">${features.suspiciousWordsCount}</span>
    </div>
    <div class="feature-item">
      <span class="feature-name">${t.f_url_len}</span>
      <span class="feature-val mono">${features.urlLength}</span>
    </div>
    <div class="feature-item">
      <span class="feature-name">${t.f_dots}</span>
      <span class="feature-val mono">${features.dotsCount}</span>
    </div>
    <div class="feature-item">
      <span class="feature-name">${t.f_slashes}</span>
      <span class="feature-val mono">${features.slashesCount}</span>
    </div>
    <div class="feature-item">
      <span class="feature-name">${t.f_subdomains}</span>
      <span class="feature-val mono">${features.subdomainsCount}</span>
    </div>
  `;

  if (shouldScroll) {
    resultsArea.scrollIntoView({ behavior: "smooth" });
  }
}

function saveToHistory(entry) {
  scanHistory.unshift(entry);
  if (scanHistory.length > 20) scanHistory.pop();
  localStorage.setItem("user_scan_history", JSON.stringify(scanHistory));
  renderHistoryTable();
}

function renderHistoryTable() {
  const tbody = document.getElementById("history-table-body");
  const t = i18n[currentLang];
  if (!scanHistory.length) {
    tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; color: #64748b; padding: 20px;">${t.empty_history}</td></tr>`;
    return;
  }
  tbody.innerHTML = scanHistory.map((item) => `
    <tr>
      <td class="url-cell" title="${item.url}">${item.url}</td>
      <td><strong>${t[item.verdictKey] || item.verdictKey}</strong></td>
      <td class="mono">${item.threatScore}%</td>
      <td style="color: var(--text-muted);">${item.timestamp}</td>
      <td><button class="btn-retest" onclick="retestUrl('${item.url}')">${t.btn_retest}</button></td>
    </tr>
  `).join("");
}

window.retestUrl = function(url) {
  document.getElementById("url-input").value = url;
  triggerScan(url);
};

function downloadAuditReport() {
  if (!lastScanResult) return;
  const { normalizedUrl, assessment } = lastScanResult;
  const t = i18n[currentLang];

  const content = `================================================
SECURITY SCAN REPORT - CYBERSHIELD
================================================
Target URL   : ${normalizedUrl}
Status       : ${t[assessment.verdictKey]}
Threat Score : ${assessment.threatScore}%
Generated At : ${new Date().toLocaleString()}

SUMMARY:
${t[assessment.verdictKey + "_desc"]}

FINDINGS:
${assessment.findingKeys.map(k => {
  let msg = t[k.key] || "";
  if (k.count !== undefined) msg = msg.replace("{count}", k.count);
  if (k.words !== undefined) msg = msg.replace("{words}", k.words);
  return "- " + msg;
}).join("\n")}
================================================`;

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `security-report-${Date.now()}.txt`;
  a.click();
}

function exportHistoryToCSV() {
  if (!scanHistory.length) return alert(currentLang === "ar" ? "لا يوجد سجل لتصديره." : "No logs available to export.");
  const t = i18n[currentLang];
  let csv = "URL,Status,Threat Score,Timestamp\n";
  scanHistory.forEach(i => {
    csv += `"${i.url}","${t[i.verdictKey] || i.verdictKey}",${i.threatScore}%,"${i.timestamp}"\n`;
  });
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `scans-history-${Date.now()}.csv`;
  a.click();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}