const select = document.querySelector('.formulario__cursos--seleccionar')
const containerCursosSeleccionados = document.querySelector('.container--cursos-seleccionados')

select.addEventListener('change', ()=>{
  if (select.selectedIndex > 0) {
    const cursoSeleccionado = select.value
    const div_Container = document.createElement('div')
    const spanNombreCurso = document.createElement('span')
    const iconoDeleteCurso = document.createElement('i')
    div_Container.classList.add('item--cursos-seleccionados')
    spanNombreCurso.classList.add('nombre--curso-seleccionado')
    iconoDeleteCurso.classList.add('fa-solid')
    iconoDeleteCurso.classList.add('fa-xmark')
    iconoDeleteCurso.classList.add('icon_equis')
    iconoDeleteCurso.classList.add(`icono_delete_curso_${cursoSeleccionado}`)
    spanNombreCurso.textContent = cursoSeleccionado
    containerCursosSeleccionados.appendChild(div_Container)
    div_Container.appendChild(spanNombreCurso)
    div_Container.appendChild(iconoDeleteCurso)
    arrayCursosSeleccionados.push(cursoSeleccionado)
    for (const option of select) {
      if (option.value === cursoSeleccionado) option.classList.add('ocultar')
    }
    select.selectedIndex = 0
    iconoDeleteCurso.addEventListener('click', ()=>{
      containerCursosSeleccionados.removeChild(div_Container)
      for (const option of select) {
        if (option.value === cursoSeleccionado){
          //Obtengo el indice del curso en el array
          const indiceCurso = arrayCursosSeleccionados.indexOf(cursoSeleccionado)
          //elimino el curso que deselecciono
          arrayCursosSeleccionados.splice(indiceCurso, 1)
          option.classList.remove('ocultar')
        } 
      }
    })
  } else {
    console.log('Seleccione alguna opción')
  }
})

const nombreUsuario = document.getElementById('nombre')
const correoUsuario = document.getElementById('correo')
const botonRegistrar = document.querySelector('.formulario__boton--registrar')
const containerUsuarioRegistrado = document.querySelector('.container--nuevo-usuario')
const spanNombreusuario = document.querySelector('.nombre--usuario')
const nu_container = document.querySelector('.nu__container--cursos-seleccionados')
const nu_icon_delete = document.querySelector('.nu_icon_delete_HTML')

const arrayCursosSeleccionados = []
const arrayElementos = []
botonRegistrar.addEventListener('click', () => {
  containerUsuarioRegistrado.classList.remove('ocultar')
  spanNombreusuario.textContent = nombreUsuario.value
  for (const item of arrayCursosSeleccionados) {
    const nuDivContainerCurso = document.createElement('div')
    const nuSpanNombreCurso = document.createElement('span')
    const nuIconoDelete = document.createElement('i')
    nuDivContainerCurso.classList.add('item--curso-seleccionado')
    nuDivContainerCurso.classList.add(`item--cursos-seleccionados-${item}`)
    nuSpanNombreCurso.classList.add('nu__nombre--curso-seleccionado')
    nuIconoDelete.classList.add('fa-solid')
    nuIconoDelete.classList.add('fa-trash-can')
    nuIconoDelete.classList.add('nu_icon_delete')
    nuIconoDelete.classList.add(`nu_icon_delete_${item}`)
    nuSpanNombreCurso.textContent = item
    nu_container.appendChild(nuDivContainerCurso)
    nuDivContainerCurso.appendChild(nuSpanNombreCurso)
    nuDivContainerCurso.appendChild(nuIconoDelete)
    nuIconoDelete.addEventListener('click', () => {
      nu_container.removeChild(nuDivContainerCurso)
    });
  }
  nombreUsuario.value = ''
  correoUsuario.value = ''
  containerCursosSeleccionados.classList.add('ocultar')
  for (const item of arrayCursosSeleccionados) {
    for (const option of select) {
      if (item === option.value) option.classList.remove('ocultar')
    }
  }
  arrayElementos.push(nu_container.children)
  
})