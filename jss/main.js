// -----------------------------
// 🚀 NAVIGATION
// -----------------------------
function openSim(type) {
  window.location.href = "simulation.html?sim=" + type;
}

// -----------------------------
// 🎯 CLASS FILTER
// -----------------------------
function filterClass() {
  let val = document.getElementById("classFilter").value;
  console.log("Filtering:", val);

  // (Optional) You can later hide/show cards here
}

// -----------------------------
// 🔐 LOGIN FUNCTION
// -----------------------------
async function login() {
  const email = document.getElementById("email")?.value;
  const password = document.getElementById("password")?.value;

  if (!email || !password) {
    alert("Please enter email and password");
    return;
  }

  try {
    let res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    let data = await res.text();

    if (data === "Success") {
      alert("Login Successful ✅");

      // Save session (basic)
      localStorage.setItem("user", email);

      // Redirect to dashboard
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid Credentials ❌");
    }

  } catch (err) {
    console.error(err);
    alert("Server error. Is backend running?");
  }
}

// -----------------------------
// 🆕 SIGNUP FUNCTION
// -----------------------------
async function signup() {
  const email = document.getElementById("email")?.value;
  const password = document.getElementById("password")?.value;

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }

  try {
    let res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    let data = await res.text();

    alert("Signup Successful 🎉 Now login");

  } catch (err) {
    console.error(err);
    alert("Error connecting to server");
  }
}

// -----------------------------
// 🔓 LOGOUT
// -----------------------------
function logout() {
  localStorage.removeItem("user");
  alert("Logged out");
  window.location.href = "index.html";
}

// -----------------------------
// 👤 CHECK LOGIN STATUS
// -----------------------------
function checkAuth() {
  let user = localStorage.getItem("user");

  if (!user) {
    console.log("Not logged in");
  } else {
    console.log("Logged in as:", user);
  }
}

// Run on page load
checkAuth();

// -----------------------------
// ✨ SCROLL ANIMATION (OPTIONAL)
// -----------------------------
const elements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", () => {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});