
const formPenilaian = document.getElementById("form-penilaian");
const nilaiPelaksanaan = document.getElementById("nilai-pelaksanaan");
const nilaiKinerja = document.getElementById("nilai-kinerja");
const nilai3 = document.getElementById("nilai-3");
const nilai4 = document.getElementById("nilai-4");

formPenilaian.addEventListener("submit", (event) => {
    event.preventDefault();

    const pelaksanaanProgram = parseInt(document.querySelector('input[name="pelaksanaan_program"]').value);
    const kinerjaLaporan = parseInt(document.querySelector('input[name="kinerja_laporan"]').value);
    const bobot3 = parseInt(document.querySelector('input[name="bobot_3"]').value);
    const bobot4 = parseInt(document.querySelector('input[name="bobot_4"]').value);

    nilaiPelaksanaan.textContent = convertNilaiHuruf(pelaksanaanProgram);
    nilaiKinerja.textContent = convertNilaiHuruf(kinerjaLaporan);
    nilai3.textContent = convertNilaiHuruf(bobot3);
    nilai4.textContent = convertNilaiHuruf(bobot4);

   
});

function convertNilaiHuruf(nilai) {
    if (nilai >= 90) {
        return "A";
    } else if (nilai >= 80) {
        return "B";
    } else if (nilai >= 70) {
        return "C";
    } else if (nilai >= 60) {
        return "D";
    } else {
        return "E";
    }
}