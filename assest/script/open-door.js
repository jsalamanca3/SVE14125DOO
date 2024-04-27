function toggleDoor() {
  fetch('https://192.168.1.15/toggle_door', {
    method: 'GET'
  })
  .then(response => console.log('Estado de la puerta cambiado correctamente'))
  .catch(error => console.error('Error al cambiar estado de la puerta:', error));
}