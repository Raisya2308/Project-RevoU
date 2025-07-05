document.addEventListener("DOMContentLoaded", () => {
      const name = prompt("Masukkan nama Anda:");
      const welcomeText = document.getElementById("welcome-text");
      if (name) {
        welcomeText.textContent = `Hi ${name}!`;
      }
    });

    document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const dob = document.getElementById("dob").value.trim();
      const gender = document.querySelector('input[name="gender"]:checked')?.value;
      const message = document.getElementById("message").value.trim();

      if (name && dob && gender && message) {
        const resultHTML = `
          <p>Terima kasih, <strong>${name}</strong>!</p>
          <p>Tanggal Lahir: ${dob}</p>
          <p>Jenis Kelamin: ${gender}</p>
          <p>Pesan: ${message}</p>
        `;
        document.getElementById("formResult").innerHTML = resultHTML;
        this.reset();
      } else {
        alert("Mohon lengkapi semua field.");
      }
    });