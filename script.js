$(document).ready(function() {
    // Función para validar el rut
    function validarRut(rut) {
      // Implementar validación del rut
    }
    
    // Función para crear la carta de presentación
    function crearCarta() {
      const form = $('#postulacionForm');
      const rut = form.find('#rut').val();
      const apellidoPaterno = form.find('#apellidoPaterno').val();
      const apellidoMaterno = form.find('#apellidoMaterno').val();
      const nombre = form.find('#nombre').val();
      const fechaNacimiento = form.find('#fechaNacimiento').val();
      const edad = form.find('#edad').val();
      const genero = form.find('#genero').val();
      const email = form.find('#email').val();
      const celular = form.find('#celular').val();
      const profesion = form.find('#profesion').val();
      const motivacion = form.find('#motivacion').val();
    
      const carta = `Estimados,
    
  Me dirijo a ustedes con el fin de expresar mi interés en postular al trabajo de apoyo ambiental en la isla de Chiloé.
    
  Mis datos son los siguientes:
  Rut: ${rut}
  Apellido Paterno: ${apellidoPaterno}
  Apellido Materno: ${apellidoMaterno}
  Nombre: ${nombre}
  Fecha de Nacimiento: ${fechaNacimiento}
  Edad: ${edad}
  Género: ${genero}
  Email: ${email}
  Celular: ${celular}
  Profesión: ${profesion}
    
  Motivación para postular:
  ${motivacion}
    
  Quedo atento a cualquier información adicional que puedan requerir.
    
  Saludos cordiales,
  ${nombre}`;
    
      $('#carta').val(carta);
    }
    
    // Event Listener para el botón "Crear Carta"
    $('#crearCarta').on('click', crearCarta);
  });