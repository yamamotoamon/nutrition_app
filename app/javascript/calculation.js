window.addEventListener("load", function(){
  const pullDown = document.getElementById("keisan");
  pullDown.onchange = function(){
    document.getElementById("get").textContent = this.value;
  }
});