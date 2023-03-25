const categoriesList = document.querySelector('#categories');
const items = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const heading = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li').length;

  console.log(`Category: ${heading}`);
  console.log(`Elements: ${elements}`);
})
