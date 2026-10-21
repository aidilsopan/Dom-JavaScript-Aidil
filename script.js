// 1. Mengubah Teks dan Warna Judul
const judul = document.getElementById('judul');
const btnUbahTeks = document.getElementById('btn-ubah-teks');

btnUbahTeks.addEventListener('click', function() {
    judul.innerText = "Latihan DOM Selesai Ditampilkan!";
    judul.style.color = 'blue';
});

// 2. Toggle Class Dark Mode
const btnTheme = document.getElementById('btn-toggle-theme');

btnTheme.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

let count = 0;
const elementAngka = document.getElementById('angka');

document.getElementById('btn-tambah').addEventListener('click', function() {
    count++;
    elementAngka.innerText = count;
});

document.getElementById('btn-kurang').addEventListener('click', function() {
    if (count > 0) {
        count--;
        elementAngka.innerText = count;
    }
});

document.getElementById('btn-reset').addEventListener('click', function() {
    count = 0;
    elementAngka.innerText = count;
});

const inputTugas = document.getElementById('input-tugas');
const btnTambahTugas = document.getElementById('btn-tambah-tugas');

const daftarTugas = document.getElementById('daftar-tugas');

btnTambahTugas.addEventListener('click', function() {
    const teksTugas = inputTugas.value;

    if (teksTugas.trim() !== '') {
        // 1. Buat elemen <li> baru
        const liBaru = document.createElement('li');
        liBaru.innerText = teksTugas;

        // 2. Event listener untuk mencoret tugas
        liBaru.addEventListener('click', function() {
            liBaru.classList.toggle('completed');
        });

        // 3. Sisipkan elemen ke dalam <ul>
        daftarTugas.appendChild(liBaru);

        // 4. Kosongkan bidang input
        inputTugas.value = '';
    } else {
        alert('Tugas tidak boleh kosong!');
    }
});