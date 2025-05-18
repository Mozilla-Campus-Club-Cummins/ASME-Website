document.addEventListener("DOMContentLoaded", function() {
    let scrollTopBtn = document.createElement("button");
    scrollTopBtn.id = "scrollTopBtn";
    scrollTopBtn.title = "Scroll to top";
    scrollTopBtn.innerHTML = "&#8679;"; 
    document.body.appendChild(scrollTopBtn);
  
    let scrollBottomBtn = document.createElement("button");
    scrollBottomBtn.id = "scrollBottomBtn";
    scrollBottomBtn.title = "Scroll to bottom";
    scrollBottomBtn.innerHTML = "&#8681;"; 
    document.body.appendChild(scrollBottomBtn);
  
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  
    scrollBottomBtn.addEventListener("click", () => {
      window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
    });
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });
  
    scrollTopBtn.style.display = "none";
  });
  