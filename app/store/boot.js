
// Generate a student object.
export const student = (index, name, score) => ({
  index,
  name,
  score,
});

// The most popular boy & girl names in America. Source: nameberry.com
const defaultNames = [
  'Emma', 'Noah', 'Olivia', 'Liam', 'Sophia', 'Mason', 'Ava', 'Jacob',
];

// Random number in range.
const getRandomInRange = (min, max) => Math.round(Math.random() * (max - min) + min);

// Generate our initial list.
const generateStudents = (names = []) => names.map((n, k) =>
  student(k, n, getRandomInRange(50, 100)));

// Export our default student scores.
export const defaultStudents = generateStudents(defaultNames);
