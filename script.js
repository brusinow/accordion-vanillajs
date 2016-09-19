var acc = document.querySelectorAll(".acc-btn");
var current, currentContent;
for (var i = 0; i < acc.length; i++){
  acc[i].onclick = function() {
    if (this === current){
      this.classList.remove("active");
      currentContent = this.nextElementSibling;
      currentContent.classList.remove("show");
      current = null;
    }
    else if (current){
      current.classList.remove("active");
      this.classList.add("active");
      currentContent = current.nextElementSibling;
      currentContent.classList.remove("show");
      var thisContent = this.nextElementSibling;
      thisContent.classList.toggle("show");
      current = this;
    } else {
      current = this;
      current.classList.add("active");
      currentContent = current.nextElementSibling;
      currentContent.classList.toggle("show");
    }
    
  }
}