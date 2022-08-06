export default class Animation {
  constructor(container) {
    this.container = container;
  }

  click() {
    this.container.addEventListener('click', (e) => {
      const collapse = document.querySelector('.collapse');

      e.preventDefault();
      if (!e.target.classList.contains('btn-collapse')) {
        return;
      }
      const text = document.querySelector('.text');
      text.classList.toggle('opened');

      if (text.classList.contains('opened')) {
        text.style.maxHeight = `${this.container.clientHeight - collapse.clientHeight}px`;
      } else {
        text.style.maxHeight = '0px';
      }
    });
  }
}
