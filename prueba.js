let day = 'Martes';
let message = '';
switch (day) {
    case 'Lunes':
    message = 'Es lunes.';
    case 'Martes' :
    message = 'Es martes.';
    case 'Miércoles':
    message = 'Es miércoles.';
    default:
    message = 'Es otro día de la semana.';

}

console.log(message);