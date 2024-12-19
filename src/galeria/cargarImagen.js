import data from '../datos/fotos';

const galeria = document.getElementById('galeria');
const cargarImagen = (id, nombre, ruta, descripcion) => {
  // Cambiamos la ruta, id, nombre y descripcion de la imagen activa.
  galeria.querySelector('.galeria__imagen').src = ruta;
  galeria.querySelector('.galeria__imagen').dataset.idImagen = id;
  galeria.querySelector('.galeria__titulo').innerText = nombre;
  galeria.querySelector('.galeria__descripcion-imagen-activa').innerText =
    descripcion;

  const categoriaActual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaActual];

  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === id) {
      indexImagenActual = index;
    }
  });

  //Marca la foto activa del carousel
  if (galeria.querySelector('.galeria__carousel-slide')) {
    //Elimina/agrega la clase activa del carousel
    galeria
      .querySelector('.galeria__carousel-slide--active')
      .classList.remove('galeria__carousel-slide--active');
    galeria
      .querySelectorAll('.galeria__carousel-slide')
      [indexImagenActual].classList.add('galeria__carousel-slide--active');
  }
};

//---->CARGAR IMAGEN - ANTERIOR/SIGUIENTE<----
const loadNextPrevImg = (direccion) => {
  const categoriaActual = galeria.dataset.categoria;
  const fotos = data.fotos[categoriaActual];
  const idActualImg = parseInt(
    galeria.querySelector('.galeria__imagen').dataset.idImagen
  );

  let indexImagenActual;
  fotos.forEach((foto, index) => {
    if (foto.id === idActualImg) {
      indexImagenActual = index;
    }
  });

  if (direccion === 'siguiente') {
    if (fotos[indexImagenActual + 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual + 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  } else if (direccion === 'anterior') {
    if (fotos[indexImagenActual - 1]) {
      const { id, nombre, ruta, descripcion } = fotos[indexImagenActual - 1];
      cargarImagen(id, nombre, ruta, descripcion);
    }
  }
};

export { cargarImagen, loadNextPrevImg };
