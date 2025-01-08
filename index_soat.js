setInterval(() => {
  const d = new Date().toLocaleTimeString();
  document.getElementById("soat").innerHTML = d;
  console.log(d);
}, 1000);
