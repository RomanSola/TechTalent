class DevJobsAvatar extends HTMLElement{
    constructor(){
        super(); // Llama al constructor de HTMLElement
        
        this.attachShadow({ mode: "open" });
    }

    createUrl(service, username){
        return `https://unavatar.io/${service}/${username}`
    }

    render() {

        const service = this.getAttribute('service') ?? 'github';
        const username = this.getAttribute('username') ?? 'Roman';
        const size = this.getAttribute('size') ?? '40';

        const url = this.createUrl(service, username);

        this.shadowRoot.innerHTML = `
            <style>
            img {
                width: ${size}px;
                height: ${size}px;
                border-radius: 100%;
            }
            </style>

            <img src="${url}"
            alt="Avatar de Roman"
            class="avatar" />
        `
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define('devjobs-avatar', DevJobsAvatar);