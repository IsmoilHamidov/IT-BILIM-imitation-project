import React, { useState } from "react";
import IT_bilim_logo from "../Assets/logo_white_uz.svg";
import { useTranslation } from "react-i18next";

function Footer() {
  const [t] = useTranslation("global");
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [tooltipMessage, setTooltipMessage] = useState('');
  const [isChecked, setIsChecked] = useState(true);
  const [isCheckboxError, setIsCheckboxError] = useState(false);

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);

    if (value.trim().length > 0) {
      const isValid = validateEmail(value);
      setIsValidEmail(isValid);
      setTooltipMessage(isValid ? '' : t('Modal_notifications.modal_email'));
    } else {
      setIsValidEmail(true); 
      setTooltipMessage('');
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setIsCheckboxError(false); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isChecked) {
      setIsCheckboxError(true);
    }

    if (isValidEmail && isChecked) {
      console.log('Form submitted');

      window.location.reload();
    }
  };

  return (
    <>
      <div className="Footer">
        <div className="footer_top">
          <div className="footer_left">
            <img src={IT_bilim_logo} alt="Logo" />
            <div className="footer_left_Info">
              <p className="f_white_text">{t("Footer.w_text1")}</p>
              <div className="f_grey_box">
                <p>{t("Footer_green.text1")}</p>
                <a href="tel:+998959521199" target="_">+998 95 952 11 99</a>
                <p>{t("Footer_green.text2")}</p>
                <a href="tel:+998993301199" target="_">+998 99 720 11 99</a>
                <p>{t("Footer_green.text3")}</p>
                <a href="/tel:+998997201199" target="_">+998 99 720 11 99</a>
                <p>{t("Footer_green.text4")}</p>
                <a href="tel:+998997701199" target="_">+998 99 770 11 99</a>
                <p>{t("Footer_green.text5")}</p>
                <a href="tel:+998991371199" target="_">+99899 137 11 99</a>
                <p>{t("Footer_green.text6")}</p>
                <a href="tel:+998997201199" target="_">+998 99 720 11 99</a>
                <p>{t("Footer_green.text7")}</p>
                <a href="tel:+998995941199" target="_">+998 99 594 11 99</a>
                <p>{t("Footer_green.text8")}</p>
                <a href="tel:+998909495239" target="_">+998 90 949 52 39</a>
              </div>
              <div className="Icons_box">
                <div>
                  <a href="https://t.me/itbilimmarkazi">
                    <img src="https://it-bilim.uz/themes/assets/images/icons/social/tg.svg" alt="telegram" />
                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/itbilim.uz/">
                    <img src="https://it-bilim.uz/themes/assets/images/icons/social/inst.svg" alt="instagram" />
                  </a>
                </div>
                <div>
                  <a href="https://m.facebook.com/p/IT-BILIM-100088991186352/?wtsid=rdr_0e3oqWTrPkmqbtlXI">
                    <img src="https://it-bilim.uz/themes/assets/images/icons/social/facebook.svg" alt="facebook" />
                  </a>
                </div>
                <div>
                  <a href="https://m.youtube.com/channel/UCk4gAV3wIYj6yaN-SNsxw8Q">
                    <img src="https://it-bilim.uz/themes/assets/images/icons/social/youtube.svg" alt="youtube" />
                  </a>
                </div>
              </div>
              <form className="Email_box" onSubmit={handleSubmit}>
                <p className="f_white_text">{t("Footer_bottom.text1")}</p>
                <input
                  type="email"
                  className={`form-control ${(!isValidEmail && email.trim().length > 0) ? 'is-invalid' : ''}`}
                  id="email"
                  placeholder="Email"
                  value={email}
                  style={{ backgroundColor: "transparent" }}
                  onChange={handleEmailChange}
                  required
                />
                {tooltipMessage && (
                  <span className="invalid-feedback">{tooltipMessage}</span>
                )}
                <div>
                  <input
                    className="form-check-input me-3"
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <span className={isCheckboxError ? 'text-danger' : ''}>
                    {t("Footer_bottom.text2")}
                    <a className={isCheckboxError ? 'text-danger' : ''} href="https://it-bilim.uz/maxfiylik-siyosati/">
                      {t("Footer_bottom.text3")}
                    </a>
                    {t("Footer_bottom.text4")}
                  </span>
                </div>
                <button className="btn grey transparent small" type="submit">
                  {t("Footer_bottom.text5")}
                </button>
              </form>
            </div>
          </div>

          <div className="footer_right">
            <div className="footer_right_child f_grey_box">
              <p className="f_white_text">{t("Footer.w_text2")}</p>
              <span>{t("Footer_green.text9")}</span>
              <p className="f_white_text">{t("Footer.w_text3")}</p>
              <span>{t("Footer_green.text10")}</span>
              <p className="f_white_text">{t("Footer.w_text4")}</p>
              <a href="info@it-bilim.uz" target="_">{t("Footer_green.text11")}</a>
            </div>
            <div className="footer_right_child f_grey_box">
              <p className="f_white_text">{t("Footer.w_text5")}</p>
              <a href="#">{t("Footer_green.text12")}</a>
              <a href="https://japan.it-bilim.uz/" target="_">{t("Footer_green.text13")}</a>
              <a href="#">{t("Footer_green.text14")}</a>
              <a href="https://bilgi.uz/" target="_">{t("Footer_green.text15")}</a>
              <a href="https://academy.it-bilim.uz/" target="_">{t("Footer_green.text16")}</a>
              <a href="#">{t("Footer_green.text17")}</a>
            </div>
            <div className="footer_right_child f_grey_box">
              <p className="f_white_text">{t("Footer.w_text6")}</p>
              <a href="https://it-bilim.uz/uploads/docs/Polojenie_o_zaymax.pdf" target="_">{t("Footer_green.text18")}</a>
              <a href="https://it-bilim.uz/uploads/docs/Polojenie_o_vozmeshenie.pdf" target="_">{t("Footer_green.text19")}</a>
            </div>
            <div className="footer_right_child f_grey_box">
              <p className="f_white_text">{t("Footer.w_text7")}</p>
              <a href="https://it-bilim.uz/maxfiylik-siyosati/" target="_">{t("Footer_green.text20")}</a>
              <a href="https://it-bilim.uz/foydalanish-shartlari/" target="_">{t("Footer_green.text21")}</a>
            </div>
          </div>
        </div>

        <div className="Footer_bottom">
          <span>
            {t("Footer_bottom.text6")}
            <a href="https://it-bilim.uz/" target="_">{t("Footer_bottom.text7")}</a>
          </span>
          <span>
            {t("Footer_bottom.text8")}
            <a href="https://ismoils-portfolio.netlify.app/" target="_">{t("Footer_bottom.text9")}</a>
          </span>
        </div>
      </div>
    </>
  );
}

export default Footer;
