function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = +document.querySelector('input').value;
  const boxSize = 30;
  let boxes = '';

  for (let i = 0; i < amount; i++) {
    const box = `
      <div style="
        width: ${boxSize + i * 10}px;
        height: ${boxSize + i * 10}px;
        background-color: ${getRandomHexColor()};
        margin-bottom: 10px;
      "></div>
    `;
    boxes += box;
  }

  boxesContainer.insertAdjacentHTML('beforeend', boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}