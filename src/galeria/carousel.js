const galeria = document.getElementById('galeria');

const carousel = (direccion) => {
  const opciones = {
    root: document.querySelector('.galeria__carousel'),
    rootMargin: '0px',
    threshold: 0.9,
  };

  const observer = new IntersectionObserver((entradas) => {
    const slidesVisibles = entradas.filter((entrada) => {
      if (entrada.isIntersecting === true) {
        return entrada;
      }
    });

    if (direccion === 'atras') {
      const firstVisibleSlide = slidesVisibles[0];
      const firstIndexVisSlide = entradas.indexOf(firstVisibleSlide);

      if (firstIndexVisSlide >= 1) {
        entradas[firstIndexVisSlide - 1].target.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
        });
      }
    } else if (direccion === 'adelante') {
      const lastVisSlide = slidesVisibles[slidesVisibles.length - 1];
      const lastIndexVisSlide = entradas.indexOf(lastVisSlide);

      if (entradas.length - 1 > lastIndexVisSlide) {
        entradas[lastIndexVisSlide + 1].target.scrollIntoView({
          behavior: 'smooth',
          inline: 'start',
        });
      }
    }

    const slides = galeria.querySelectorAll('.galeria__carousel-slide');
    slides.forEach((slide) => {
      observer.unobserve(slide);
    });
  }, opciones);

  const slides = galeria.querySelectorAll('.galeria__carousel-slide');
  slides.forEach((slide) => {
    observer.observe(slide);
  });
};

export default carousel;
