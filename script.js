
    
        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });

        // Carousel pause on hover
        const carousel = document.querySelector('.carousel');
        carousel.addEventListener('mouseenter', () => carousel.style.animationPlayState = 'paused');
        carousel.addEventListener('mouseleave', () => carousel.style.animationPlayState = 'running');
    