var number = +prompt('Введите число ,которое является точной степенью ДВОЙКИ:')

function exponent_of_two_rec(x) {
  if (x === 1) {
      alert ('YES - рекурсия');
  } else if (x > 1) {
    exponent_of_two_rec(x / 2);
  } else {
      alert('NO - рекурсия');
  }
}

exponent_of_two_rec(number)

function exponent_of_two_cyc(x) {
  for (i = 1; i <= x; i *= 2) {
    if (i === x) {
      alert('YES - цыкл');
      break;
    } 
   }
  if (i > x) {
    alert('NO - цыкл')
   }
}

exponent_of_two_cyc(number);