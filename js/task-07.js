//const controlEl = document.querySelector('#font-size-control');
text.style.fontSize = `16px`; ///в початковий фонтсайз спана поставити початкове значення інпута
const controlEl = document.querySelector('input#font-size-control');

controlEl.addEventListener('input', onControl);
function onControl(evt) {
    console.dir(evt.currentTarget.valueAsNumber);
  text.style.fontSize = `${evt.currentTarget.valueAsNumber}px`;
}

з врахуванням зауважень