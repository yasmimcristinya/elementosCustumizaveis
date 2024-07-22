class CustomImage extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const img = document.createElement('img');
        
       
        img.src = this.getAttribute('src');
        img.alt = this.getAttribute('alt');

      
        const style = document.createElement('style');
        style.textContent = `
            img {
                max-width: 100%;
                border: 2px solid #000;
                border-radius: 10px;
            }
        `;

        
        shadow.appendChild(style);
        shadow.appendChild(img);
    }
}


customElements.define('custom-img', CustomImage);