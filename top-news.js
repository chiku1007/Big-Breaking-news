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