// 1. Mengubah Teks dan Warna Judul

const judul = document.getElementById('judul');
const btnUbahTeks = document.getElementById('btn-ubah-teks');

btnUbahTeks.addEventListener('click', function() {
    judul.innerText = 'Latihan DOM Selesai Ditampilkan!';
    judul.style.color = 'blue';
});


// 2. Toggle Class Dark Mode

const btnTheme = document.getElementById('btn-toggle-theme');

btnTheme.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});


// 3. Counter

let count = 0;

const elemenAngka = document.getElementById('angka');

document.getElementById('btn-tambah').addEventListener('click', function() {
    count++;
    elemenAngka.innerText = count;
});

document.getElementById('btn-kurang').addEventListener('click', function() {
    if (count > 0) {
        count--;
    }

    elemenAngka.innerText = count;
});

document.getElementById('btn-reset').addEventListener('click', function() {
    count = 0;
    elemenAngka.innerText = count;
});


// 4. To-Do List

const inputTugas = document.getElementById('input-tugas');
const btnTambahTugas = document.getElementById('btn-tambah-tugas');
const daftarTugas = document.getElementById('daftar-tugas');

btnTambahTugas.addEventListener('click', function() {

    const teksTugas = inputTugas.value;

    if (teksTugas.trim() !== '') {

        // Membuat elemen li baru
        const liBaru = document.createElement('li');

        liBaru.innerText = teksTugas;

        // Mencoret tugas jika diklik
        liBaru.addEventListener('click', function() {
            liBaru.classList.toggle('completed');
        });

        // Masukkan ke dalam ul
        daftarTugas.appendChild(liBaru);

        // Kosongkan input
        inputTugas.value = '';

    } else {
        alert('Tugas tidak boleh kosong!');
    }
});