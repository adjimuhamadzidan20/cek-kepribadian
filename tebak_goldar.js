// cek kepribadian berdasarkan golongan darah
var konfirm = true;

while(konfirm) { 
	alert('Cek Kepribadian Berdasarkan Golongan Darah')
	
	// user meng input nama
	var namaUser = prompt('Siapakah nama kamu?');

	// user diberikan pilihan
	var goldar = prompt('Okey '+ namaUser +', apa golongan darah kamu? (A, B, AB, O)');

	// pilihan
	switch(goldar) {
		case 'A' :
			alert('Orang dengan golongan darah A identik dengan sifatnya yang terorganisir, kritis, tenang dalam menghadapi masalah.');
			break;

		case 'B' :
			alert('Orang dengan golongan darah B memiliki semangat yang tinggi, aktif, kreatif, dan selalu ingin tahu.');
			break;

		case 'AB' :
			alert('Orang dengan golongan darah AB memiliki karakter yang kritis, rasional, bertanggung jawab, suka menolong, dan mudah beradaptasi.');
			break;

		case 'O' :
			alert('Orang dengan golongan darah O identik dengan sikapnya yang mudah beradaptasi dengan lingkungan baru atau easy-going.');
			break;

		default :
			alert('Maaf, sepertinya inputan tidak sesuai');
			break;
	}

	// konfirmasi
	konfirm = confirm('mulai kembali? ');
}

// penutup
alert('Terima kasih'); 
