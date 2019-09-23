class JoomlaProgressCircle extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  static get observedAttributes() {
    return ['progress'];
  }

  get stroke() {
    return this.getAttribute('stroke') || 4;
  }

  get radius() {
    return this.getAttribute('radius') || 50;
  }

  get progress() {
    return this.getAttribute('progress') || 0;
  }

  get fill() {
    return this.getAttribute('fill') || '#0184FF';
  }

  get emptyFill() {
    return this.getAttribute('empty-fill') || '#F0F3F8';
  }

  connectedCallback() {
    this.querySelector('svg').style.transform = 'rotate(-90deg)';
    this.style.display = 'inline-flex';
    this.calculateProgress();
  }

  attributeChangedCallback() {
    this.calculateProgress();
  }

  render() {
    this.size = this.radius * 2 - this.stroke;
    this.normalizedRadius = this.radius - this.stroke;
    this.cxy = this.radius - (this.stroke / 2);
    this.defaultDashOffset = (this.radius - this.stroke) * Math.PI * 2;

    this.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${this.size}" height="${this.size}">
          <g fill="none" fill-rule="evenodd" stroke-width="${this.stroke}">
              <circle 
                  id="circleBg" 
                  cx="${this.cxy}" 
                  cy="${this.cxy}" 
                  r="${this.normalizedRadius}" 
                  stroke="${this.emptyFill}"
              />
              <circle 
                  id="circleFg" 
                  cx="${this.cxy}" 
                  cy="${this.cxy}" 
                  r="${this.normalizedRadius}" 
                  stroke="${this.fill}"
                  stroke-dashoffset="${this.defaultDashOffset}"
              />
          </g>
      </svg>
    `;
  }

  calculateProgress() {
    const circleFg = this.querySelector('#circleFg');
    this.dashSize = circleFg.getTotalLength();
    this.dashParcent = this.dashSize - ((this.progress / 100) * this.dashSize);
    circleFg.style.strokeLinecap = 'round';
    circleFg.style.transition = '600ms';
    circleFg.style.strokeDasharray = `${this.dashSize} ${this.dashSize}`;
    circleFg.style.strokeDashoffset = this.dashParcent;
  }
}
window.customElements.define('joomla-progress-circle', JoomlaProgressCircle);
