const placeholders = document.querySelectorAll('.placeholder');
const draggables = document.querySelectorAll('.draggable');
const continuarBtn = document.getElementById('continuar');
const limpiarBtn = document.getElementById('limpiar');
const resultadoDiv = document.getElementById('resultado');
const licenciasBtn= document.getElementById('licencias');
let seleccionados = {
    lugar: null,
    accion: null,
    persona: null
};

function buscarCoincidencias(grupo, texto) {
  const palabrasGrupo = Array.from(document.querySelectorAll(`.draggable[data-grupo="${grupo}"]`)).map(elem => elem.textContent);
  return palabrasGrupo.filter(palabra => palabra.toLowerCase().startsWith(texto.toLowerCase()));
}

function mostrarSugerencias(placeholder, sugerencias) {
  const listaSugerencias = document.createElement('ul');
  listaSugerencias.classList.add('sugerencias');
  sugerencias.forEach(sugerencia => {
    const elementoLista = document.createElement('li');
    elementoLista.textContent = sugerencia;
    elementoLista.addEventListener('click', () => {
      placeholder.textContent = sugerencia;
      bloquearGrupo(placeholder.getAttribute('data-grupo'));
      // Ocultar la lista de sugerencias
      const listaSugerencias = placeholder.querySelector('.sugerencias');
      if (listaSugerencias) {
        placeholder.removeChild(listaSugerencias);
      }
    });
    listaSugerencias.appendChild(elementoLista);
  });
  placeholder.appendChild(listaSugerencias);
}

function bloquearGrupo(grupo) {
  // Bloquear elementos draggables del grupo
  draggables.forEach(draggable => {
    if (draggable.getAttribute('data-grupo') === grupo && draggable.textContent !== seleccionados[grupo]) {
      draggable.draggable = false;
    }
  });

  // Bloquear placeholders del mismo grupo que aún no se han completado
  placeholders.forEach(placeholder => {
    if (placeholder.getAttribute('data-grupo') === grupo && seleccionados[grupo]) {
      placeholder.classList.add('bloqueado');
    }
  });
}

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', draggable.textContent);
    draggable.classList.add('dragging');
  });

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging');
  });
});

placeholders.forEach(placeholder => {
  placeholder.addEventListener('dragover', e => {
    e.preventDefault();
  });

  placeholder.addEventListener('drop', (e) => {
    e.preventDefault();
    const grupo = placeholder.getAttribute('data-grupo');
    const palabra = e.dataTransfer.getData('text');
    const palabrasGrupo = Array.from(document.querySelectorAll(`.draggable[data-grupo="${grupo}"]`)).map(elem => elem.textContent);

    // Validar si la palabra pertenece al mismo grupo
    if (palabrasGrupo.includes(palabra)) {
      seleccionados[grupo] = palabra;
      placeholder.textContent = palabra; // Establecemos el texto aquí
      bloquearGrupo(grupo);

      // Autocompletar los demás placeholders del mismo grupo
      placeholders.forEach(otherPlaceholder => {
        if (otherPlaceholder.getAttribute('data-grupo') === grupo && otherPlaceholder !== placeholder && otherPlaceholder.textContent === '') {
          otherPlaceholder.textContent = palabra;
          seleccionados[grupo] = palabra;
          bloquearGrupo(grupo);
        }
      });
    } else {
      alert('No puedes colocar esta palabra aquí.');
    }
  });

  placeholder.addEventListener('input', () => {
    const grupo = placeholder.getAttribute('data-grupo');
    const texto = placeholder.textContent;
    const sugerencias = buscarCoincidencias(grupo, texto);
    mostrarSugerencias(placeholder, sugerencias);
  });
});

continuarBtn.addEventListener('click', () => {
  if (seleccionados.lugar && seleccionados.accion && seleccionados.persona) {
    // Almacenar palabras seleccionadas en el almacenamiento local
    localStorage.setItem('seleccionados', JSON.stringify(seleccionados));
    // Redirigir a la página de historia
    window.location.href = 'historia.html';
  } else {
    alert('Por favor, selecciona una opción de cada grupo.');
  }
});

limpiarBtn.addEventListener('click', () => {
    draggables.forEach(draggable => {
        draggable.draggable = true;
        draggable.classList.remove('bloqueado');
    });
    placeholders.forEach(placeholder => {
        placeholder.textContent = placeholder.getAttribute('data-grupo').toUpperCase();
    });
    seleccionados = {
        lugar: null,
        accion: null,
        persona: null
    };
});
document.getElementById("licencias").addEventListener("click", function() {
  window.location.href = "licencias.html";
});