document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for subscribing!');
  this.reset();
});
