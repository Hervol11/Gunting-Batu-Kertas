const ang1 = document.getElementById("result1");
const ang2 = document.getElementById("result2");
const ang3 = document.getElementById("result3");
const ang4 = document.getElementById("result4");
const ang5 = document.getElementById("result5");
const ang6 = document.getElementById("result6");

const absen = [];
let klik = 0;
let i = 0;

function randomnumber() {
  while (absen.length < 36) {
    klik = Math.floor(Math.random() * 36) + 1;
    if (!absen.includes(klik)) {
      absen.push(klik);
    }
  }
  return absen;
}

function kel() {
  randomnumber();
  i += 1;

  let anggota1 = absen.slice(0, 5).join(", ");
  let anggota2 = absen.slice(6, 11).join(", ");
  let anggota3 = absen.slice(12, 17).join(", ");
  let anggota4 = absen.slice(18, 23).join(", ");
  let anggota5 = absen.slice(24, 29).join(", ");
  let anggota6 = absen.slice(30, 35).join(", ");

  ang1.textContent = "Anggota :" + anggota1;
  ang2.textContent = "Anggota :" + anggota2;
  ang3.textContent = "Anggota :" + anggota3;
  ang4.textContent = "Anggota :" + anggota4;
  ang5.textContent = "Anggota :" + anggota5;
  ang6.textContent = "Anggota :" + anggota6;
}
