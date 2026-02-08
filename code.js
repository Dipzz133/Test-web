const usernameInput = document.querySelector(".LOGIN-USERNAME");
const emailInput = document.querySelector(".LOGIN-EMAIL");
const passwordInput = document.querySelector(".LOGIN-PASSWORD");
const submitBtn = document.getElementById("submitBtn");
const myForm = document.getElementById("myform");

// Fungsi pengecekan input
function checkInputs() {
    // .value mengambil teks, .trim() menghapus spasi kosong
    const isUserOk = usernameInput.value.trim() !== "";
    const isEmailOk = emailInput.value.trim() !== "";
    const isPassOk = passwordInput.value.trim() !== "";

    // Tombol aktif (disabled = false) jika semua OK
    if (isUserOk && isEmailOk && isPassOk) {
        submitBtn.disabled = false;
        submitBtn.style.backgroundColor = "#fc4848"; // Warna hijau saat aktif
        submitBtn.style.color = "white";
    } else {
        submitBtn.disabled = true;
        submitBtn.style.backgroundColor = ""; // Kembali ke warna default
    }
}

// Pantau setiap ketikan di kolom input
usernameInput.addEventListener('input', checkInputs);
emailInput.addEventListener('input', checkInputs);
passwordInput.addEventListener('input', checkInputs);

// Logika perpindahan halaman saat tombol ditekan
myForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form refresh halaman
    
    alert("Login Berhasil! Menuju ke halaman berikutnya...");
    
    // Berpindah ke halaman lain
    window.location.href = "home.html"; 
});
