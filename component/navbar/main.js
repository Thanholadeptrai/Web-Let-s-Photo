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
    const HeaderComponentAbout = document.querySelector('header-component-about');
    if (HeaderComponentAbout) {
        const shadow = HeaderComponentAbout.shadowRoot;

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
    const HeaderComponentBook = document.querySelector('header-component-book');
    if (HeaderComponentBook) {
        const shadow = HeaderComponentBook.shadowRoot;

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
    const HeaderComponentCom = document.querySelector('header-component-community');
    if (HeaderComponentCom) {
        const shadow = HeaderComponentCom.shadowRoot;

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
    const HeaderComponentPhoto = document.querySelector('header-component-photo');
    if (HeaderComponentPhoto) {
        const shadow = HeaderComponentPhoto.shadowRoot;

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
    const HeaderComponentType = document.querySelector('header-component-type');
    if (HeaderComponentType) {
        const shadow = HeaderComponentType.shadowRoot;

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