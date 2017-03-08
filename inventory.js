function inventoryColor () {
  var inv = document.getElementById("test");
  if (inv >= 10) {
    inv.style.color = "green";
  }
  if (inv < 10 && inv >= 5) {
    inv.style.color = "yellow";
  }
  if (inv < 5) {
    document.getElementById("test").style.color = "red";
  }
}