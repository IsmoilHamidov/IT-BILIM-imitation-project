import React from "react";
import IT_bilim_logo from "../Assets/logo_white_uz.svg"

function Footer() {
    return ( 
        <div className="Footer">
            <div className="footer_left">
                <img src={IT_bilim_logo} alt="Logo" />
                <div className="footer_left_Info">
                    <p className="f_white_text">Kontaktlar</p>
                    <div className="f_grey_box">
                        <p>1. Maqsadli qarz </p>
                        <a href="tel:+998959521199" target="_">+998 95 952 11 99</a>
                        <p>2. Bilgi.uz marketpleysi </p>
                        <a href="tel:+998993301199" target="_">+998 99 720 11 99</a>
                        <p>3. IT INTERN </p>
                        <a href="/tel:+998997201199" target="_">+998 99 720 11 99</a>
                        <p>4. Recruitment&Consulting </p>
                        <a href="tel:+998997701199" target="_">+998 99 770 11 99</a>
                        <p>5. IT-Bilim Akademiyasi  </p>
                        <a href="tel:+998991371199" target="_">+99899 137 11 99</a>
                        <p>6. IT-Market  </p>
                        <a href="tel:+998997201199" target="_">+998 99 720 11 99</a>
                        <p>7. Xalqaro test markazi </p>
                        <a href="tel:+998995941199" target="_">+998 99 594 11 99</a>
                        <p>8. IT BILIM INTERNATIONAL</p>
                        <a href="tel:+998909495239" target="_">+998 90 949 52 39</a>
                    </div>
                    <div className="Icons_box">
                        <div>
                            <img src="https://it-bilim.uz/themes/assets/images/icons/social/tg.svg" alt="telegram" />
                        </div>
                        <div>
                            <img src="https://it-bilim.uz/themes/assets/images/icons/social/inst.svg" alt="instagram" />
                        </div>
                        <div>
                            <img src="https://it-bilim.uz/themes/assets/images/icons/social/facebook.svg" alt="facebook" />
                        </div>
                        <div>
                            <img src="https://it-bilim.uz/themes/assets/images/icons/social/youtube.svg" alt="youtube" />
                        </div>
                    </div>
                    <form className="Email_box">
                        <p className="f_white_text">Bizni kuzatib boring    </p>
                        <input type="email" placeholder="Email"/>
                         <span><input type="checkbox" id="check"/>Men<a href="https://it-bilim.uz/maxfiylik-siyosati/">shaxsiy ma'lumotlarni</a> qayta ishlashga rozilik beraman</span>
                         <button class="btn grey transparent small" type="submit">Yuborish</button>
                    </form>
                </div>
            </div>
            <div className="footer_right">

            </div>
        </div>
     );
}

export default Footer;