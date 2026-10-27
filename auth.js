const authI18n = {
  ar: {
    back_home: "← العودة للرئيسية",
    login_title: "تسجيل الدخول إلى حسابك",
    login_subtitle: "مرحباً بك مجدداً، أدخل بياناتك لمتابعة إدارة وفحص الروابط",
    register_title: "إنشاء حساب مستخدم جديد",
    register_subtitle: "احصل على سجل فحص مخصص وتقارير أمنية متقدمة",
    tab_login: "تسجيل الدخول",
    tab_register: "حساب جديد",
    label_name: "الاسم بالكامل",
    placeholder_name: "زياد العدوي",
    label_email: "البريد الإلكتروني",
    label_password: "كلمة المرور",
    label_confirm_password: "تأكيد كلمة المرور",
    remember_me: "تذكرني",
    forgot_password: "نسيت كلمة المرور؟",
    btn_login: "دخول",
    btn_register: "إنشاء الحساب",
    quick_access: "دخول سريع للتجربة:",
    demo_user: "حساب مستخدم عادي",
    demo_admin: "حساب مسؤول (Admin)",
    err_match: "كلمتا المرور غير متطابقتين!",
    welcome_user: "تم تسجيل الدخول بنجاح كمستخدم!",
    welcome_admin: "مرحباً بك في لوحة تحكم الأدمن!"
  },
  en: {
    back_home: "← Back to Home",
    login_title: "Sign In to Your Account",
    login_subtitle: "Welcome back, enter your credentials to manage scans",
    register_title: "Create a New Account",
    register_subtitle: "Get personalized URL logs, audit reports, and security alerts",
    tab_login: "Sign In",
    tab_register: "Register",
    label_name: "Full Name",
    placeholder_name: "Zyad Eladwy",
    label_email: "Email Address",
    label_password: "Password",
    label_confirm_password: "Confirm Password",
    remember_me: "Remember me",
    forgot_password: "Forgot Password?",
    btn_login: "Sign In",
    btn_register: "Create Account",
    quick_access: "Quick Demo Access:",
    demo_user: "Standard User",
    demo_admin: "Admin Console",
    err_match: "Passwords do not match!",
    welcome_user: "Logged in successfully as User!",
    welcome_admin: "Welcome to the Admin Dashboard!"
  }
};

let currentLang = "ar";
let currentMode = "login";

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.getElementById("lang-ar-btn").classList.toggle("active", lang === "ar");
  document.getElementById("lang-en-btn").classList.toggle("active", lang === "en");

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (authI18n[lang][key]) el.textContent = authI18n[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (authI18n[lang][key]) el.setAttribute("placeholder", authI18n[lang][key]);
  });

  updateTextForMode();
}

function switchAuthMode(mode) {
  currentMode = mode;
  const isReg = mode === "register";

  document.getElementById("tab-login").classList.toggle("active", !isReg);
  document.getElementById("tab-register").classList.toggle("active", isReg);

  document.getElementById("group-name").classList.toggle("hidden", !isReg);
  document.getElementById("group-confirm-password").classList.toggle("hidden", !isReg);
  document.getElementById("pw-strength-bar").classList.toggle("hidden", !isReg);
  document.getElementById("login-options").classList.toggle("hidden", isReg);

  updateTextForMode();
}

function updateTextForMode() {
  const t = authI18n[currentLang];
  const isReg = currentMode === "register";
  document.getElementById("auth-title").textContent = isReg ? t.register_title : t.login_title;
  document.getElementById("auth-subtitle").textContent = isReg ? t.register_subtitle : t.login_subtitle;
  document.getElementById("submit-btn").textContent = isReg ? t.btn_register : t.btn_login;
}

function checkPasswordStrength(val) {
  if (currentMode !== "register") return;
  const fill = document.getElementById("pw-fill");
  let score = 0;
  if (val.length > 5) score += 30;
  if (/[A-Z]/.test(val)) score += 30;
  if (/[0-9]/.test(val)) score += 20;
  if (/[^A-Za-z0-9]/.test(val)) score += 20;

  fill.style.width = score + "%";
  if (score < 40) fill.style.backgroundColor = "#ef4444";
  else if (score < 75) fill.style.backgroundColor = "#f59e0b";
  else fill.style.backgroundColor = "#10b981";
}

function fillDemo(type) {
  if (type === "admin") {
    document.getElementById("input-email").value = "admin@cybershield.com";
    document.getElementById("input-password").value = "admin12345";
  } else {
    document.getElementById("input-email").value = "user@demo.com";
    document.getElementById("input-password").value = "user12345";
  }
}

function handleAuthSubmit(e) {
  e.preventDefault();
  const email = document.getElementById("input-email").value.trim();
  const pw = document.getElementById("input-password").value;

  if (currentMode === "register") {
    const cpw = document.getElementById("input-confirm-password").value;
    if (pw !== cpw) {
      alert(authI18n[currentLang].err_match);
      return;
    }
  }

  if (email.includes("admin")) {
    alert(authI18n[currentLang].welcome_admin);
    window.location.href = "admin.html";
  } else {
    alert(authI18n[currentLang].welcome_user);
    window.location.href = "index.html";
  }
}