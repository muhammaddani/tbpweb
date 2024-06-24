
const kirimButton = document.getElementById('kirimButton');

kirimButton.addEventListener('click', () => {
 
  const namaKegiatan = document.getElementById('namaKegiatan').value;
  const tanggal = document.getElementById('tanggal').value;
  const jamMulai = document.getElementById('jamMulai').value;
  const jamSelesai = document.getElementById('jamSelesai').value;
  const kelompokKKN = document.getElementById('kelompokKKN').value;
  const tempatKegiatan = document.getElementById('tempatKegiatan').value;
  const isiKegiatan = document.getElementById('isiKegiatan').value;

  
  if (namaKegiatan === '' || tanggal === '' || jamMulai === '' || jamSelesai === '' || kelompokKKN === '' || tempatKegiatan === '' || isiKegiatan === '') {
    alert('Harap isi semua data!');
    return;
  }

 
});