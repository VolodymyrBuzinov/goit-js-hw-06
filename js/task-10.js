// reduce, filter, sort
// Получи массив всех умений всех пользователей
//     (поле skills), при этом не должно быть повторяющихся
// умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = (array) =>
  array
    .reduce((arr, { skills }) => [...arr, ...skills], [])
    .sort()
    .filter(
      (skill, index, [...skills]) => [...skills].indexOf(skill) === index
    );

console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
