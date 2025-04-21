document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      const category = button.dataset.category;
      const books = document.querySelectorAll('.book-card');
  
      books.forEach(book => {
        if (category === 'all' || book.dataset.category === category) {
          book.style.display = 'block';
        } else {
          book.style.display = 'none';
        }
      });
    });
  });
  