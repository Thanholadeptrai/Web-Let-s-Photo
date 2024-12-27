class FooterComponent extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
                @import url('https://unpkg.com/boxicons@latest/css/boxicons.min.css');
                @import url('https://unicons.iconscout.com/release/v4.0.8/css/line.css');
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

                *{
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                font-family: 'Poppins', sans-serif;
                color: white;
                font-size: 16px;
                text-decoration: none;
                scroll-behavior: smooth;
                list-style: none;
                }

                footer{
                    display: flex;
                    background-color: #6B8E40;
                    flex-direction: column;
                }

                .info{
                    display: flex;
                    padding: 18px 8%;
                }

                .info1{
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                    flex-basis: 0;
                }

                .info1 p{
                    padding-right: 10%;
                }

                .info2{
                    display: flex;
                    flex-direction: column;
                    flex-grow: 1;
                    flex-basis: 0;
                }

                .info2 h1, .info2 p, .info2 .icons{
                    padding-left: 10%;
                }

                .icons {
                    display: flex;
                    padding-top: 10px;
                    gap: 10px;
                }

                .icons i{
                    font-size: 24px;
                    color: white;
                }

                .icons i:hover{
                    color: #FFEAC4;
                    transform: translateY(-2px);
                }

                .copyright{
                    display: flex;
                    border-top: 1px solid #FFEAC4;
                    padding: 18px 8%;
                    justify-content: center;
                    align-items: center;
                }

                .logo{
                    color: #FFEAC4;
                    font-family: 'SVN-Beast';
                    font-size: 60px;
                    font-weight: 600;
                    letter-spacing: 1px;
                }

                .logo span{
                    font-family: 'SVN-Beast';
                    font-family: 'SVN-Beast';
                    font-size: 60px;
                    font-weight: 600;
                    color: white;
                }

                h1{
                    font-size: 24px;
                    color: #FFEAC4
                }

                @media (max-width: 1480px){
                    .info{
                        padding: 12px 2.5%;
                        transition: .1s;
                    }
                }
            </style>
            <footer>
                <div class="info">
                    <div class="info1">
                        <a href = "#" class="logo">Let's<span>photo</span></a>
                        <p>Nền tảng đặt lịch chụp hình online tiện lợi, kết nối khách hàng với nhiếp ảnh gia chuyên nghiệp!</p>
                    </div>
                    <div class="info2">
                        <h1>“Your Memories Through Our Lens”</h1>
                        <p>Địa chỉ: Km10 Nguyễn Trãi, Hà Đông, Hà Nội.<br>
                            Điện thoại: (+84) 32 563 8346<br>
                            Gmail: letsphoto2024@gmail.com
                        </p>
                        <div class="icons">
                            <a href="https://www.facebook.com/thannguyen2804"><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/than___nguyen/"><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.behance.net/thannguyen11"><i class="fa-brands fa-tiktok"></i></a>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <p>Copyright © 2024 by Let'sphoto Team. All Rights Reserved.</p>
                </div>
            </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);