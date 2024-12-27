window.addEventListener('DOMContentLoaded', (event) => {
    const headerComponent = document.querySelector('header-component');
    if (headerComponent) {
        const shadow = headerComponent.shadowRoot;

        let menu = shadow.querySelector('#menu-icon');
        let navlist = shadow.querySelector('.navlist');
        let scrollButton = shadow.getElementById('scroll-up');

        menu.onclick = () => {
            menu.classList.toggle('bx-x');
            navlist.classList.toggle('open');
        }

        window.onscroll = () => {
            menu.classList.remove('bx-x');
            navlist.classList.remove('open');
        }

        window.addEventListener("scroll", function() {
            if (window.scrollY > 100) {
                scrollButton.classList.add("show-scroll");
                scrollButton.style.display = 'block';
            } else {
                scrollButton.classList.remove("show-scroll");
                scrollButton.style.display = 'none';
            }
        });
    }
});