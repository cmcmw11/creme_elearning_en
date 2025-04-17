import { auth } from "../../firebase/firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const userEmail = document.getElementById("userEmail");
const logoutBtn = document.getElementById("logoutBtn");
const wordsLearned = document.getElementById("wordsLearned");

onAuthStateChanged(auth, (user) => {
  if (user) {
    userEmail.textContent = user.email;
    // 🔁 ดึงข้อมูลจาก localStorage / database ว่าเรียนไปกี่คำ
    const learned = JSON.parse(localStorage.getItem(`learnedWords_${user.uid}`)) || [];
    wordsLearned.textContent = learned.length;
  } else {
    window.location.href = "login.html";
  }
});

logoutBtn.addEventListener("click", () => {
  signOut(auth).then(() => {
    window.location.href = "login.html";
  });
});
