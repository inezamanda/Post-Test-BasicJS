// 3A
// Program menghitung luas segitiga
let base = prompt(`Berapa cm alas segitiga yang akan dihitung luasnya?`);
let height = prompt(`Berapa cm tinggi segitiga yang akan dihitung luasnya?`);
let triArea = (base*height)/2;
alert(triArea + ` cm^2`);


// 3B
// Program menghitung luas lingkaran
let radius = prompt(`Berapa cm radius lingkaran yang akan dihitung luasnya?`);
let cirArea = Math.PI * Math.pow(radius, 2);
alert(cirArea + ` cm^2`);


// 3C
// Menampilkan value dari object
let mhs = {
    nim : `05111940000208`,
    namaLengkap : `Inez Yulia Amanda`,
    tempatTanggalLahir : `Makassar, 16 Juli 2002`,
    jurusan : 'Teknik Informatika',
    universitas : `Institut Teknologi Sepuluh Nopember`,
};

// menampilkan value dengan func alert
// alert(mhs.namaLengkap);
// alert(mhs.jurusan);

// menampilkan value di console
console.log(mhs);


// 3D
// Menampilkan value dari Array
let nilaiMtk = [90, 100, 74, 59, 67, 88];
let index = 1;
nilaiMtk.forEach(function(item){
    // menampilkan data dengan func alert
    // alert(`Data ${index} dari nilai matematika adalah ${item}`);
    
    // menampilkan data di console
    console.log(`Data ke-${index} dari nilai matematika adalah ${item}`);
    index+=1;
})
