// const categoriesList = document.querySelector('#categories');
// const items = categoriesList.querySelectorAll('.item');

// console.log(`Number of categories: ${items.length}`);

// items.forEach(item => {
//   const heading = item.querySelector('h2').textContent;
//   const elements = item.querySelectorAll('li').length;

//   console.dir(`Category: ${heading}`);
//   console.dir(`Elements: ${elements}`);
// })


const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const heading = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children.length;

  console.dir(`Category: ${heading}`);
  console.dir(`Elements: ${elements}`);
})
