
function moc() {
    const contentElement = document.getElementById('content');
    contentElement.innerHTML += '<br>|‾‾|';
  }

  setInterval(moc, 100);
  window.addEventListener('scroll', function() {
    const contentHeight = document.getElementById('content').clientHeight;
    const currentScroll = window.scrollY;
    const windowHeight = window.innerHeight;

    if (currentScroll + windowHeight >= contentHeight) {
      scrollToTop();
    }
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
