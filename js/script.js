const portfolioNavLinks = document.querySelectorAll('#projects .nav-link');
const portfolioItems = document.querySelectorAll('.portfolio');

portfolioNavLinks.forEach(link => {
  link.addEventListener('click', function(event) {

    event.preventDefault();

    portfolioNavLinks.forEach(link => link.classList.remove('active'));

    this.classList.add('active');

    const selectedCategory = this.getAttribute('data-category');

    portfolioItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      if (selectedCategory === 'all' || itemCategory === selectedCategory) {
        item.style.display = 'block'; 
      } else {
        item.style.display = 'none'; 
      }
    });
  });
});
