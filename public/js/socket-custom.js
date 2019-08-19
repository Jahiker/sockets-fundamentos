var socket = io();

//.on => son para escuchar emiciones
socket.on('connect', function() {
    console.log('Conetado al servidor');
});
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//.emit => son para emitir
socket.emit('enviarMensaje', {
    usuario: 'Jahiker',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respueta Server: ', resp);
});

//Escuchando al servidor
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});