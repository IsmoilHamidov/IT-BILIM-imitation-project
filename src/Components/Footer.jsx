import React, { useState } from "react";
import IT_bilim_logo from "../Assets/logo_white_uz.svg"



function Footer() {
   
    const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [tooltipMessage, setTooltipMessage] = useState('');

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    const isValid = validateEmail(value);
    setIsValidEmail(isValid);

    if (!isValid) {
      setTooltipMessage("Elektron pochtani to'g'ri kiriting");
    } else {
      setTooltipMessage('');
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleBlur = () => {
    if (!isValidEmail && email.trim().length === 0) {
      setTooltipMessage("To'ldirish uchun majburiydir");
    }
  };
        

    return ( 
    <>
        <div className="Footer">
            <div className="footer_top">
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
                                <p className="f_white_text">Bizni kuzatib boring</p>
                                <input
                                type="email"
                                className={`form-control ${(!isValidEmail || tooltipMessage) ? 'is-invalid' : ''}`}
                                id="email"
                                placeholder="Email"
                                value={email}
                                style={{backgroundColor:"transparent"}}
                                onChange={handleEmailChange}
                                onBlur={handleBlur}
                                required
                                />
                                {!isValidEmail && (
                                <span className="invalid-feedbacks"></span>
                                )}
                                {tooltipMessage && (
                                <span className="invalid-feedback">{tooltipMessage}</span>
                                )}


                            <div> 
                                <input className="form-check-input me-3" type="checkbox" defaultChecked/>
                                <span> Men<a href="https://it-bilim.uz/maxfiylik-siyosati/">
                                shaxsiy ma'lumotlarni</a> qayta ishlashga rozilik beraman</span>
                            </div>
                            <button className="btn grey transparent small" type="submit">Yuborish</button>
                        </form>
                    </div>
                </div>

                <div className="footer_right">
                    <div className="footer_right_child f_grey_box">
                        <p className="f_white_text">Ish tartibi</p>
                        <span>Dushanba-Juma, 9:00 - 18:00</span>
                        <p className="f_white_text">Manzil</p>
                        <span>Mahtumquli 1A, Toshkent, 100047</span>
                        <p className="f_white_text">Pochta</p>
                        <a href="info@it-bilim.uz" target="_">info@it-bilim.uz</a>
                    </div>
                    <div className="footer_right_child f_grey_box">
                        <p className="f_white_text">Yo'nalishlar</p>
                        <a href="#">Xalqaro Test Markazi</a>
                        <a href="https://japan.it-bilim.uz/" target="_">IT BILIM JAPAN</a>
                        <a href="#">Maqsadli qarz</a>
                        <a href="https://bilgi.uz/" target="_">Bilgi.uz ta`lim marketpleysi</a>
                        <a href="https://academy.it-bilim.uz/" target="_">IT BILIM Academy</a>
                        <a href="#" >Ish bilan ta’minlash loyihasi</a>
                    </div>
                    <div className="footer_right_child f_grey_box">
                        <p className="f_white_text">Hujjatlar</p>
                        <a href="https://it-bilim.uz/uploads/docs/Polojenie_o_zaymax.pdf" target="_">Maqsadli qarz berish to'g'risidagi nizom</a>
                        <a href="https://it-bilim.uz/uploads/docs/Polojenie_o_vozmeshenie.pdf" target="_">Yosh mutaxassislarni tayyorlash xarajatlarini qoplash to'g'risidagi nizom</a>
                    </div>
                    <div className="footer_right_child f_grey_box">
                        <p className="f_white_text">Bizning siyosatimiz</p>
                        <a href="https://it-bilim.uz/maxfiylik-siyosati/" target="_">Maxfiylik siyosati</a>
                        <a href="https://it-bilim.uz/foydalanish-shartlari/" target="_">Foydalanish shartlari</a>
                    </div>
            
                </div>
            </div>

            <div className="Footer_bottom">
                <span>©2021-2024<a href="https://it-bilim.uz/" target="_"> IT bilimlarni rivojlantirish markazi - IT-BILIM</a></span>
                <span>IT BILIM Veb-saytdan ilhomlanib tayyorlandi<a href="https://ismoils-portfolio.netlify.app/" target="_">Hamidov Ismoil</a></span>
            </div>
        </div>
        </>
     );
}

export default Footer;