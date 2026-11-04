
const form = document.getElementById("searchForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value.trim();

    if (username === "") {
        document.getElementById("result").innerHTML =
            "Masukkaan Username terlebih dahulu!";
        return;
    }

    cariUser(username);

});

async function cariUser(username) {

    const result = document.getElementById("result");

    // Menampilkan loading
    result.innerHTML = "Sedang mencari profil...";

    try{
        const response = await fetch(
        `https://api.github.com/users/${username}`
    
    );

    // Memeriksa apakah user ditemukan
    if (response.status === 404) {
        result.innerHTML = "User tidak ditemukan!";
        return;
    }

    // Memeriksa apakah terjadi error lain
    if (!response.ok) {
        throw new Error("Terjadi kesalahan saat mengambil data!");
    }

    const data = await response.json();

    // Menampilkan profil user
    result.innerHTML = `
        <img src="${data.avatar_url}" width="100">

        <h2>${data.name}</h2>

        <p>${data.bio || "Tidak ada bio"}</p>

        <p>Username: ${data.login}</p>

        <p>Public Repositories: ${data.public_repos}</p>

        <a href="${data.html_url}" target="_blank">
            Lihat Profil GitHub
        </a>
    `;

} catch (error) {

    result.innerHTML = "Terjadi Kesalahan. Periksa Koneksi Internet Anda!";
    console.log(error);

    }
}