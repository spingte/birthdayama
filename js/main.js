
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Selamat Ulang Tahun, Ama! Hari ini ulang tahun ama yang spesial, sama spesialnya dengan ama . Usia 20 tahun awal dari petualangan yang luar biasa dalam hidup ama. bibiy berdoa agar setiap langkah ama selalu dipenuhi kebahagiaan, keberkahan, dan kesuksesan.Terima kasih yo sayang ama udah menjadi seseorang yang begitu berarti dalam hidup bibiy. amaa adalah alasan bibiy setiap hari, dan bibiy bersyukur bisa merayakan hari istimewa ini bersama ama.  Semoga semua impian ama terwujud, dan cinta kita semakin kuat seiring waktu. Selamat menikmati hari yang penuh cinta dan kebahagiaan ini, sayangku. bibiy sayang ama! ❤️').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 50); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};