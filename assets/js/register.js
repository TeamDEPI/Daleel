const form = document.getElementById("regForm");
const pw = document.getElementById("password");
const cpw = document.getElementById("confirmPassword");
const toggle = document.getElementById("togglePass");
const pwStrength = document.getElementById("pwStrength");
const submitBtn = document.getElementById("submitBtn");
const roleInputs = document.querySelectorAll('input[name="role"]');
const errRole = document.querySelector('[data-error-for="role"]');

toggle.addEventListener("click", () => {
  const t = pw.type === "password" ? "text" : "password";
  pw.type = t;
  cpw.type = t;
  toggle.textContent = t === "password" ? "Show" : "Hide";
});

function estimateStrength(s) {
  let score = 0;
  if (s.length >= 8) score++;
  if (/[A-Z]/.test(s)) score++;
  if (/[0-9]/.test(s)) score++;
  if (/[^A-Za-z0-9]/.test(s)) score++;
  return score;
}

pw.addEventListener("input", () => {
  const score = estimateStrength(pw.value);
  const labels = ["Weak", "Medium", "Strong", "Very Strong"];
  pwStrength.textContent =
    labels[Math.max(0, Math.min(labels.length - 1, score - 1))] || "Weak";
  pw.classList.remove("is-invalid", "is-valid");
  if (score <= 1) {
    pw.classList.add("is-invalid");
  } else if (score === 2) {
  } else {
    pw.classList.add("is-valid");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  [
    ["fullName", "Name is required"],
    ["email", "Invalid email"],
    ["password", "Password is required"],
    ["confirmPassword", "Confirm your password"],
  ].forEach(([id, msg]) => {
    const el = document.getElementById(id);
    const err = document.querySelector(`[data-error-for="${id}"]`);
    const parent = el.closest("div");
    if (!el.value.trim()) {
      valid = false;
      el.classList.add("is-invalid");
      el.classList.remove("is-valid");
      if (err) {
        err.textContent = msg;
        err.classList.remove("hidden");
      }
    } else {
      el.classList.remove("is-invalid");
      if (err) err.classList.add("hidden");
    }
  });

  const errConf = document.querySelector('[data-error-for="confirmPassword"]');
  if (pw.value !== cpw.value) {
    valid = false;
    cpw.classList.add("is-invalid");
    if (errConf) {
      errConf.textContent = "Passwords do not match";
      errConf.classList.remove("hidden");
    }
  } else if (cpw.value.trim()) {
    cpw.classList.remove("is-invalid");
    if (errConf) errConf.classList.add("hidden");
  }

  if (!document.getElementById("terms").checked) {
    valid = false;
    alert("You must agree to the terms");
  }
  const roleSelected = [...roleInputs].some((r) => r.checked);
  if (!roleSelected) {
    valid = false;
    if (errRole) {
      errRole.classList.remove("hidden");
    }
  } else {
    if (errRole) {
      errRole.classList.add("hidden");
    }
  }

  if (valid) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Creating...";
    setTimeout(() => {
      submitBtn.textContent = "Registered ✓";
      submitBtn.classList.add("btn-success");
      submitBtn.classList.remove("btn-warning");
    }, 900);
  }
});
window.addEventListener("load", () => {
  document.querySelectorAll(".glass").forEach((el, i) => {
    el.style.transform = "translateY(12px)";
    el.style.opacity = "0";
    setTimeout(() => {
      el.style.transition = "transform .6s ease, opacity .6s ease";
      el.style.transform = "translateY(0)";
      el.style.opacity = "1";
    }, 120 * i);
  });
});
