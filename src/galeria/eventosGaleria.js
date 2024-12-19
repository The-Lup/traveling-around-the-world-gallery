import cerrarGaleria from './cerrarGaleria';
import slideClick from './slideClick';
import { loadNextPrevImg } from './cargarImagen';
import carousel from './carousel';

const galeria = document.getElementById('galeria');
galeria.addEventListener('click', (e) => {
  const boton = e.target.closest('button');

  //---->CLOSE GALLERY<----
  if (boton?.dataset?.accion === 'cerrar-galeria') {
    cerrarGaleria();
  }

  //---->CAROUSEL SLIDE CLICK<----
  if (e.target.dataset.id) {
    slideClick(e);
  }

  //---->NEXT IMG<----
  if (boton?.dataset?.accion === 'siguiente-imagen') {
    loadNextPrevImg('siguiente');
  }

  //---->PREVIOUS IMG<----
  if (boton?.dataset?.accion === 'anterior-imagen') {
    loadNextPrevImg('anterior');
  }

  //---->NEXT IMG CAROUSEL<----
  if (boton?.dataset?.accion === 'siguiente-slide') {
    carousel('adelante');
  }

  //---->PREVIOUS IMG CAROUSEL<----
  if (boton?.dataset?.accion === 'anterior-slide') {
    carousel('atras');
  }
});
