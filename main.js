var countDownDate = new Date("octobar 24, 2025 15:00:00").getTime();

var countdownfunction = setInterval(function () {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("minutes").innerHTML = minutes + "m ";
  document.getElementById("seconds").innerHTML = seconds + "s ";
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

let currentIndex = 2; // Start with the third image in the center
const slides = document.querySelectorAll('.carousel5');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides - 2) {
        currentIndex = 2;
    } else if (index < 2) {
        currentIndex = totalSlides - 3;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 20;
    document.querySelector('.carousel5-inner').style.transform = `translateX(${offset}%)`;

    slides.forEach((slide, idx) => {
        slide.classList.remove('active', 'prev', 'next', 'blur');
        if (idx === currentIndex) {
            slide.classList.add('active');
        } else if (idx === currentIndex - 1 || idx === currentIndex + 1) {
            slide.classList.add(idx < currentIndex ? 'prev' : 'next');
        }
    });

    slides.forEach(slide => slide.classList.remove('blur'));

    if (currentIndex === 0) {
        slides[1].classList.add('blur'); 
    } else if (currentIndex === totalSlides - 1) {
        slides[totalSlides - 2].classList.add('blur'); 
    } else {
        slides[0].classList.add('blur'); 
        slides[currentIndex + 4].classList.add('blur'); 
    }
}









function nextSlide(event) {
    event.preventDefault();
    showSlide(currentIndex + 1);
}

function prevSlide(event) {
    event.preventDefault();
    showSlide(currentIndex - 1);
}

showSlide(currentIndex);







function handleResize() {
    if (window.innerWidth < 768) {
        let currentIndex = 2; // Start with the third image in the center
        const slides = document.querySelectorAll('.carousel5');
        const totalSlides = slides.length;
        
        function showSlide(index) {
            if (index >= totalSlides - 1) {
                currentIndex = 1;
            } else if (index < 1) {
                currentIndex = totalSlides - 2;
            } else {
                currentIndex = index;
            }
        
            const offset = -currentIndex * 20;
            document.querySelector('.carousel5-inner').style.transform = `translateX(${offset}%)`;
        
            slides.forEach((slide, idx) => {
                slide.classList.remove('active', 'prev', 'next', 'blur');
                if (idx === currentIndex) {
                    slide.classList.add('active');
                } else if (idx === currentIndex - 1 || idx === currentIndex + 1) {
                    slide.classList.add(idx < currentIndex ? 'prev' : 'next');
                }
            });
        
            slides.forEach(slide => slide.classList.remove('blur'));
        
            if (currentIndex === 0) {
                slides[1].classList.add('blur'); 
            } else if (currentIndex === totalSlides - 1) {
                slides[totalSlides - 1].classList.add('blur'); 
            } else {
                slides[0].classList.add('blur'); 
                slides[currentIndex + 2].classList.add('blur'); 
            }
        }
        
        function nextSlide(event) {
            event.preventDefault();
            showSlide(currentIndex + 1);
        }
        
        function prevSlide(event) {
            event.preventDefault();
            showSlide(currentIndex - 1);
        }
        
        showSlide(currentIndex);
    } else {
        let currentIndex = 2; // Start with the third image in the center
        const slides = document.querySelectorAll('.carousel5');
        const totalSlides = slides.length;
        
        function showSlide(index) {
            if (index >= totalSlides - 2) {
                currentIndex = 2;
            } else if (index < 2) {
                currentIndex = totalSlides - 3;
            } else {
                currentIndex = index;
            }
        
            const offset = -currentIndex * 20;
            document.querySelector('.carousel5-inner').style.transform = `translateX(${offset}%)`;
        
            slides.forEach((slide, idx) => {
                slide.classList.remove('active', 'prev', 'next', 'blur');
                if (idx === currentIndex) {
                    slide.classList.add('active');
                } else if (idx === currentIndex - 1 || idx === currentIndex + 1) {
                    slide.classList.add(idx < currentIndex ? 'prev' : 'next');
                }
            });
        
            slides.forEach(slide => slide.classList.remove('blur'));
        
            if (currentIndex === 0) {
                slides[1].classList.add('blur'); 
            } else if (currentIndex === totalSlides - 1) {
                slides[totalSlides - 2].classList.add('blur'); 
            } else {
                slides[0].classList.add('blur'); 
                slides[currentIndex + 4].classList.add('blur'); 
            }
        }
        function nextSlide(event) {
            event.preventDefault();
            showSlide(currentIndex + 1);
        }
        
        function prevSlide(event) {
            event.preventDefault();
            showSlide(currentIndex - 1);
        }
        
        showSlide(currentIndex);
    }
  }

  // استدعاء الوظيفة عند تحميل الصفحة
  handleResize();

  // استدعاء الوظيفة عند تغيير حجم النافذة
  window.addEventListener('resize', handleResize);







function highlightTestimonial(element) {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach((testimonial) => {
        testimonial.classList.remove('highlight');
    });
    element.classList.add('highlight');
}
