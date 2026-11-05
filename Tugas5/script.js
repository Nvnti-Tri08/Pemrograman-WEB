
// Mengambil elemen dari HTML
const form = document.getElementById("searchForm");
const result = document.getElementById("result");

// Menjalankan pencarian saat form dikirim
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();

    if (username === "") {
        result.innerHTML = "Masukkan username terlebih dahulu!";
        return;
    }

    cariUser(username);
});

// Fungsi untuk mencari profil GitHub
async function cariUser(username) {
    const button = form.querySelector("button");

    // Menampilkan loading
    result.innerHTML = '<p class="loading">Sedang mencari profil...</p>';
    button.disabled = true;

    try {
        // Mengambil data pengguna dari GitHub API
        const response = await fetch(
            `https://api.github.com/users/${username}`
        );

        // Mengecek apakah username ditemukan
        if (response.status === 404) {
            result.innerHTML = "User tidak ditemukan!";
            return;
        }

        if (!response.ok) {
            throw new Error("Gagal mengambil data dari GitHub");
        }

        // Mengubah data menjadi JSON
        const data = await response.json();

        // Menampilkan informasi profil pengguna
        result.innerHTML = `
            <div class="profile-card">
                <img src="${data.avatar_url}" alt="Foto profil">

                <h2>${data.name || data.login}</h2>

                <p class="bio">
                    ${data.bio || "Tidak ada bio"}
                </p>

                <div class="profile-info">
                    <div>
                        <strong>${data.public_repos}</strong>
                        <p>Repositories</p>
                    </div>

                    <div>
                        <strong>${data.followers}</strong>
                        <p>Followers</p>
                    </div>

                    <div>
                        <strong>${data.following}</strong>
                        <p>Following</p>
                    </div>
                </div>

                <a href="${data.html_url}" target="_blank"
                   rel="noopener noreferrer">
                    Lihat Profil GitHub
                </a>
            </div>
        `;

    } catch (error) {
        result.innerHTML = "Terjadi kesalahan. Periksa koneksi internet!";
        console.log(error);

    } finally {
        // Mengaktifkan kembali tombol Cari
        button.disabled = false;
    }
}
