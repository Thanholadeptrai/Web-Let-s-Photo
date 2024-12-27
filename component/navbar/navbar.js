class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
                @import url('https://unpkg.com/boxicons@latest/css/boxicons.min.css');
                @import url('https://unicons.iconscout.com/release/v4.0.8/css/line.css');
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
                
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-family: 'Poppins', sans-serif;
                    color: black;
                    font-size: 18px;
                    text-decoration: none;
                    scroll-behavior: smooth;
                    list-style: none;
                }
                
                @font-face {
                    font-family: 'SVN-Beast';
                    src: url('../../font/SVN-Beast.ttf') format('truetype');
                    font-weight: normal;
                    font-style: normal;
                }

                header {
                    position: fixed;
                    width: 100%;
                    top: 0;
                    right: 0;
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 18px 8%;
                    transition: all .30s ease;
                    background: #FFEAC4;
                    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px;
                }

                .logo {
                    color: #6B8E40;
                    font-family: 'SVN-Beast';
                    font-size: 35px;
                    font-weight: 600;
                    letter-spacing: 1px;
                }

                .logo span {
                    font-family: 'SVN-Beast';
                    font-size: 35px;
                    font-weight: 600;
                    color: black;
                }

                .navlist {
                    display: flex;
                    list-style: none;
                }

                .navlist a {
                    font-size: 18px;
                    font-weight: 300;
                    margin: 0 25px;
                    transition: all .30s ease;
                }

                .navlist a::before {
                    transform: scaleX(0);
                    transform-origin: bottom right;
                }

                .navlist a:hover::before {
                    transform: scaleX(1);
                    transform-origin: bottom left;
                }

                .navlist a:hover {
                    color: #6B8E40;
                }

                .navlist a::before {
                    content: " ";
                    display: block;
                    position: absolute;
                    top: 0; right: 0; bottom: 0; left: 0;
                    inset: 0 0 0 0;
                    background: white;
                    z-index: -1;
                    transition: transform .3s ease;
                }

                .navlist a {
                    position: relative;
                }

                .language {
                    border: none;
                    background-color: transparent;
                    text-align-last: right;
                }

                .signinbtn {
                    background: linear-gradient(to right, #6B8E40, #A5BC73);
                    color: white;
                    border: none;
                    width: 218px;
                    height: 42px;
                    border-radius: 10px;
                }

                .signinbtn:hover {
                    box-shadow: rgba(0, 0, 0, 0.589) 0px 2px 4px;
                    transform: translateX(8px);
                }

                .fix {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 10px;
                }

                #menu-icon {
                    font-size: 30px;
                    color: #6B8E40;
                    z-index: 1001;
                    cursor: pointer;
                    margin-left: 25px;
                    display: none;
                }

                #scroll-up {
                    position: fixed;
                    right: 30px;
                    bottom: 80px;
                    text-align: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    background-color: #DECADA;
                    color: #6B8E40;
                    border-radius: 8px;
                    line-height: 40px;
                    font-size: 20px;
                    cursor: pointer;
                    display: none;
                }

                @media (max-width: 1480px) {
                    header {
                        padding: 12px 2.5%;
                        transition: .1s;
                    }
                }

                @media (max-width: 1300px) {
                    #menu-icon {
                        display: block;
                    }

                    .navlist {
                        position: absolute;
                        top: 0;
                        right: 0;
                        left: 0;
                        display: flex;
                        flex-direction: column;
                        text-align: left;
                        transition: all .45s ease;
                        background-color: #FFEAC4;
                        transform: translateX(-100%);
                    }

                    .navlist a {
                        display: block;
                        margin: 17px;
                        font-size: 18px;
                        transition: all .3s ease;
                        color: black;
                    }

                    .navlist a:hover {
                        color: #6B8E40;
                    }

                    .navlist.open {
                        transform: translateX(0);
                    }

                    .myproject .box2 {
                        grid-template-columns: repeat(2, 1fr);
                    }

                    .fix {
                        margin-left: auto;
                    }
                    *{
                        font-size: 16px;
                    }
                    .logo {
                        font-size: 25px;
                    }
                    .logo span {
                        font-size: 25px;
                    }
                    .signinbtn{
                        font-size: 14px;
                        width: 160px;
                        height: 40px;
                    }
                    #menu-icon{
                        margin-left: 10px;
                    }
                }
                
            </style>
            <header>
                <a href="#" class="logo">Let's<span>photo</span></a>
                <ul class="navlist">
                    <li><a href="#">Về Chúng Tôi</a></li>
                    <li><a href="#">Nhiếp Ảnh Gia</a></li>
                    <li><a href="#">Thể Loại</a></li>
                    <li><a href="#">Đặt Lịch</a></li>
                    <li><a href="#">Cộng Đồng</a></li>
                </ul>
                <div class="fix">
                    <select id="language" name="language" class="language">
                        <option value="VI">VI</option>
                        <option value="ENG">ENG</option>
                    </select>
                    <div class="modeicon">
                        <i class="fa-solid fa-moon custom-icon switch" style="color: #000000;"></i>
                    </div>
                    <button class="signinbtn">Đăng Nhập/Đăng Ký</button>
                </div>
                <div class="bx bx-menu" id="menu-icon"></div>
                <a href="#" id="scroll-up">
                    <i class='bx bx-up-arrow-alt'></i>
                </a>
            </header>
        `;
    }
}

customElements.define('header-component', HeaderComponent);