function typeWriter(element, text, speed = 40, callback) {
  let i = 0;
  element.innerHTML = ""; // kosongin dulu
  element.classList.add("typing");

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else {
      element.classList.remove("typing"); // hapus cursor setelah selesai
      if (callback) callback();
    }
  }
  typing();
}