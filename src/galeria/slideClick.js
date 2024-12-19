import datos from './../datos/fotos';
import { cargarImagen } from './cargarImagen';

const slideClick = (e) => {
  let ruta, nombre, descripcion;

  //Obtension del id de la imagen que recibio el click.
  const id = parseInt(e.target.dataset.id);

  //Obtencion de la categoria activa.
  const galeria = document.getElementById('galeria');
  const categoriaActiva = galeria.dataset.categoria;

  //Recorre las fotos en busca de la foto que obtuvo el click.
  datos.fotos[categoriaActiva].forEach((foto) => {
    if (foto.id === id) {
      ruta = foto.ruta;
      nombre = foto.nombre;
      descripcion = foto.descripcion;
    }
  });

  //cargamos la imagen activa.
  cargarImagen(id, nombre, ruta, descripcion);
};

export default slideClick;
