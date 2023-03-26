const controlEl = document.querySelector('#font-size-control');
controlEl.addEventListener('input', onControl);
function onControl(evt) {
    console.dir(evt.currentTarget.valueAsNumber);
  text.style.fontSize = `${evt.currentTarget.valueAsNumber}px`;
}
