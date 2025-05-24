const images = [
  'img1.jpeg',
  'img2.jpeg',
  'img3.jpeg',
  'img4.jpeg',
  'img5.jpeg',
  'img6.jpeg',
  'img7.jpeg',
  'img8.jpeg',
  'img9.jpeg',
  'img10.jpeg'
    ];

    let currentImageIndex = 0;

    function openLightbox(index) {
      currentImageIndex = index;
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      const currentCounter = document.getElementById('current-image');
      
      lightboxImg.src = images[currentImageIndex];
      currentCounter.textContent = currentImageIndex + 1;
      lightbox.classList.add('active');
    }

    function closeLightbox() {
      const lightbox = document.getElementById('lightbox');
      lightbox.classList.remove('active');
    }

    function changeImage(direction) {
      currentImageIndex += direction;
      
      // Loop around if at the end or beginning
      if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
      } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
      }
      
      const lightboxImg = document.getElementById('lightbox-img');
      const currentCounter = document.getElementById('current-image');
      
      lightboxImg.src = images[currentImageIndex];
      currentCounter.textContent = currentImageIndex + 1;
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      const lightbox = document.getElementById('lightbox');
      if (lightbox.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
          changeImage(-1);
        } else if (e.key === 'ArrowRight') {
          changeImage(1);
        } else if (e.key === 'Escape') {
          closeLightbox();
        }
      }
    });

    // Close lightbox when clicking outside the image
    document.getElementById('lightbox').addEventListener('click', function(e) {
      if (e.target === this) {
        closeLightbox();
      }
    });
  