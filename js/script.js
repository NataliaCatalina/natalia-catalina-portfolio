const portfolioNavLinks = document.querySelectorAll('#projects .nav-link');
const portfolioItems = document.querySelectorAll('.portfolio');

portfolioNavLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    const selectedCategory = this.getAttribute('data-category');

    portfolioNavLinks.forEach(link => link.classList.remove('active'));

    if (selectedCategory !== 'photosretouch') {
      event.preventDefault();
    }

    this.classList.add('active');

    portfolioItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      if (selectedCategory === 'all' || itemCategory === selectedCategory || selectedCategory === 'photosretouch') {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
