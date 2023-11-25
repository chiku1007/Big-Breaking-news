// navbar javascript

function toggleMenu() {
    var navbar = document.getElementById("myNavbar");
    if (navbar.className === "navbar") {
      navbar.className += " responsive";
    } else {
      navbar.className = "navbar";
    }
  }

  function toggleReadMore(button) {
    var content = button.parentNode.querySelector('.hidden');
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
      button.innerText = 'Read Less';
    } else {
      content.style.display = 'none';
      button.innerText = 'Read More';
    }
  }

  document.getElementById("privacy-link").addEventListener("click", function() {
    document.getElementById("privacy-policy").style.display = "flex";
  });

  function closePrivacyPolicy() {
    document.getElementById("privacy-policy").style.display = "none";
  }