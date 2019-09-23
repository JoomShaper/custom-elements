(() => {
  class JoomlaProgress extends HTMLElement {
    constructor() {
      super();
      this.isRendered = false;
      this.renderInViewPort = this.renderInViewPort.bind(this);
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

    get duration() {
      return parseInt(this.getAttribute('duration')) || 600;
    }

    connectedCallback() {
      window.addEventListener('scroll', this.renderInViewPort, true)
    }

    renderInViewPort() {
      if(!this.isRendered && this.isInViewport(this)) {
        this.render();
        this.isRendered = true;
        this.querySelector('svg').style.transform = 'rotate(-90deg)';
        this.style.display = 'inline-flex';
        this.calculateProgress();
      }
      if(this.isRendered) {
        window.removeEventListener('scroll', this.renderInViewPort, true)
      }
    }

    attributeChangedCallback(name, oldValue, newValue) {
      if(oldValue !== null && oldValue) {
        this.calculateProgress();
      }
    }

    calculateProgress() {
      const circleFg = this.querySelector('#circleFg');
      this.dashSize = circleFg.getTotalLength();
      this.dashParcent = this.dashSize - ((this.progress / 100) * this.dashSize);
      circleFg.style.strokeLinecap = 'round';
      circleFg.style.transition = `${this.duration}ms`;
      circleFg.style.strokeDasharray = `${this.dashSize} ${this.dashSize}`;
      circleFg.style.strokeDashoffset = this.dashParcent;
      this.animateValue(this.querySelector('.counter'), 0, this.progress, this.duration);
    }

    animateValue(elem, start, end, duration) {
      // assumes integer values for start and end
      if(!elem){
        return;
      }
      const range = end - start;
      // no timer shorter than 50ms (not really visible any way)
      const minTimer = 50;
      // calc step time to show all interediate values
      let stepTime = Math.abs(Math.floor(duration / range));
      
      // never go below minTimer
      stepTime = Math.max(stepTime, minTimer);
      
      // get current time and calculate desired end time
      const startTime = new Date().getTime();
      const endTime = startTime + duration;
      let timer;
    
      function run() {
          const now = new Date().getTime();
          const remaining = Math.max((endTime - now) / duration, 0);
          const value = Math.round(end - (remaining * range));
          elem.innerHTML = value;
          if (value >= Math.floor(end)) {
              clearInterval(timer);
          }
      }
      
      timer = setInterval(run, stepTime);
      run();
    }

    isInViewport(elem) {
      const bounding = elem.getBoundingClientRect();
      return (
          bounding.top >= 0 &&
          bounding.left >= 0 &&
          bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }



    render() {
      this.size = this.radius * 2 - this.stroke;
      this.normalizedRadius = this.radius - this.stroke;
      this.cxy = this.radius - (this.stroke / 2);
      this.defaultDashOffset = (this.radius - this.stroke) * Math.PI * 2;
      this.innerHTML = this.innerHTML.trim() !== '' ? `<div class="progress-inner-text">${this.innerHTML}</div>` : '';

      this.innerHTML += `
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

  }
  customElements.define('joomla-progress', JoomlaProgress);
})();
