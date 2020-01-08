let tinggiBadanBudi = 180;
let tinggiBadanAni = 170;
let tinggiBadanAdi = 160;

if (tinggiBadanBudi >= tinggiBadanAni) {
  console.log("tinggi badan budi adalah yang terbesar");
} else if (tinggiBadanAni >= tinggiBadanAdi) {
  console.log("tinggi badan ani terbesar kedua");
} else if (tinggiBadanAdi <= tinggiBadanAni) {
  console.log("tinggi badan adi adalah yang terkecil");
}

function tinggiBadan() {
  if (tinggiBadanBudi >= tinggiBadanAni) {
    console.log("tinggi badan budi adalah yang terbesar");
  }
  if (tinggiBadanAni >= tinggiBadanAdi) {
    console.log("tinggi badan ani terbesar kedua");
  }
  if (tinggiBadanAdi <= tinggiBadanAni) {
    console.log("tinggi badan adi adalah yang terkecil");
  }
}
console.log(tinggiBadan());
