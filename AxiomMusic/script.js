 // scroll button

const scrollTop = function () {
    const scrollBtn = document.createElement("button");
    scrollBtn.innerHTML = "↑";
    scrollBtn.setAttribute("id", "button-scroll");
    document.body.appendChild(scrollBtn);
    const scrollBtnDisplay = function () {
      window.scrollY > window.innerHeight/4
        ? scrollBtn.classList.add("show")
        : scrollBtn.classList.remove("show");
    };
    window.addEventListener("scroll", scrollBtnDisplay);
    const scrollWindow = function () {
      if (window.scrollY != 0) {
        setTimeout(function () {
          window.scrollTo(0, window.scrollY - 500);
          scrollWindow();
        }, 10);
      }
    };
    scrollBtn.addEventListener("click", scrollWindow);
  };
  scrollTop();

  // changing appearance for "Add to Cart" button on click

  const btn = document.getElementById('btn');
  let index = 0;
  
  btn.addEventListener('click', function onClick() {
    const colors = ['#418d92','#c64b4b'];
    btn.style.backgroundColor = colors[index];
    btn.style.color = 'white';
    index = index >= colors.length - 1 ? 0 : index + 1;
  });
  
  btn.addEventListener('click', function handleClick() {
    const initialText = '⊕ Add to Cart';
    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
      btn.textContent = '✔︎ Added';
    } else {
      btn.textContent = initialText;
    }
  });

  // dropdown-on-click commands

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
