import React, { useState, useEffect } from "react";
import japan from "../Assets/40b396321a69.jpg";
import team from "../Assets/7ea5fe56831c.jpg";
import bilgi from "../Assets/bilgi_img.jpg";
import group from "../Assets/b582c776c9f5.jpg";
import coders from "../Assets/ed84f4ef2f2e.jpg";
import pearson from "../Assets/pearson_img.png";

function SwiperSlider() {
  const [offset, setOffset] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalCards = 6;
  const cardWidth = isMobile ? 110 : 40.33; 

  const handleScroll = (event) => {
    if (isModalOpen) return;

    event.preventDefault();
    const scrollSpeed = 0.3;
    setOffset((prevOffset) => {
      const newOffset = prevOffset + event.deltaY * scrollSpeed;
      const maxOffset = (totalCards - 1) * cardWidth;
      return Math.min(Math.max(newOffset, 0), maxOffset);
    });
  };

  useEffect(() => {
    const swiperBottom = document.querySelector(".swiper_bottom");
    swiperBottom.addEventListener("wheel", handleScroll, { passive: false });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    const handleModalOpen = () => setIsModalOpen(true);
    const handleModalClose = () => setIsModalOpen(false);

    const modals = document.querySelectorAll(".modal");

    modals.forEach(modal => {
      modal.addEventListener("show.bs.modal", handleModalOpen);
      modal.addEventListener("hidden.bs.modal", handleModalClose);
    });

    return () => {
      swiperBottom.removeEventListener("wheel", handleScroll);
      window.removeEventListener("resize", handleResize);

      modals.forEach(modal => {
        modal.removeEventListener("show.bs.modal", handleModalOpen);
        modal.removeEventListener("hidden.bs.modal", handleModalClose);
      });
    };
  }, [isModalOpen]);


  // modal phone
  const [value, setValue] = useState("");

  const handleFocus = () => {
    if (!value.startsWith("+998 (")) {
      setValue("+998 (");
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setValue(formattedValue);
  };

  const formatPhoneNumber = (input) => {
    // Remove any non-numeric characters except for the starting prefix
    const cleanedInput = input.replace(/[^0-9]/g, '');
    // Construct the formatted phone number
    return cleanedInput ? `+998 (${cleanedInput.slice(0, 3)}) ${cleanedInput.slice(3, 6)}-${cleanedInput.slice(6, 8)}-${cleanedInput.slice(8, 10)}` : '+998 (';
  };
  

  return (
    <div className="container-fluid h-auto Projects_Swiper" id="Projects">
      <div className="swiper_top">
        <h2>Loyihalar</h2>
        <div className="swiper_btn_group">
          <button
            onClick={() => setOffset((prev) => Math.max(prev - cardWidth, 0))}
            style={{
              backgroundColor: offset === 0 ? "#7eb649a3" : "#7eb649",
            }}
          >
            <i className="fa-solid fa-chevron-left text-white"></i>
          </button>
          <button
            onClick={() =>
              setOffset((prev) =>
                Math.min(prev + cardWidth, (totalCards - 1) * cardWidth)
              )
            }
            style={{
              backgroundColor:
                offset === (totalCards - 1) * cardWidth
                  ? "#7eb649a3"
                  : "#7eb649",
            }}
          >
            <i className="fa-solid fa-chevron-right text-white"></i>
          </button>
        </div>
      </div>
      <div className="swiper_bottom">
        <div
          className="swiper_bottom_inner"
          style={{
            transform: `translateX(-${offset}%)`,
          }}
        >
          <div className="swiper_bottom_Card">
            <img src={pearson} alt="" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                <h2>Xalqaro Test Markazi</h2>
                <p>
                  IT-Bilimlarini rivojlanritish markazi Pearson VUE xalqaro test
                  markazi bilan hamkorlikni yo`lga qo`ydi.
                </p>
              </div>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal1">Batafsil{" "}
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
              </a>
            </div>
          </div>
          <div className="swiper_bottom_Card">
            <img src={japan} alt="" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                <h2>IT BILIM JAPAN</h2>
                <p>
                  Yaponiya kompaniyalarida ish bilan ta'minlash uchun IT xodimlarni
                  o'qitish va tayyorlash loyihasi
                </p>
              </div>
              <a href="https://japan.it-bilim.uz/" target="_">
                Batafsil{" "}
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
              </a>
            </div>
          </div>
          <div className="swiper_bottom_Card">
            <img src={team} alt="" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                <h2>Maqsadli qarz</h2>
                <p>IT sohasida biznesni rivojlantirish va kengaytirish uchun</p>
              </div>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal2">Batafsil{" "}
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
              </a>
            </div>
          </div>
          <div className="swiper_bottom_Card">
            <img src={bilgi} alt="" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                <h2>Bilgi.uz ta`lim marketpleysi</h2>
                <p>
                  imtiyozli muddatli to`lov evaziga IT kurslarning katta tanlovi
                </p>
              </div>
              <a href="https://bilgi.uz/uz/" target="_">
                Batafsil{" "}
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
              </a>
            </div>
          </div>
          <div className="swiper_bottom_Card">
            <img src={group} alt="" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                <h2>IT BILIM Academy</h2>
                <p>innovatsion ta’lim muassasasi </p>
              </div>
              <a href="https://academy.it-bilim.uz/" target="_">
                Batafsil{" "}
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
              </a>
            </div>
          </div>
          <div className="swiper_bottom_Card">
            <img src={coders} alt="" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                <h2>Ish bilan ta’minlash loyihasi</h2>
                <p>
                  yosh IT mutaxassislarini amaliyot o’tashlari uchun ijtimoiy loyiha
                </p>
              </div>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal3">Batafsil{" "}
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
              </a>
            </div>
          </div>
        </div>
        



                 
                 
        {/*  <<< Modals Part >>>  */}

          {/* Modal 1 */}
        <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel first_modal" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen Modal_main">
                    <div class="modal-content modal_box">
                        <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                         
                      <div class="modal-body row d-flex justify-content-between">
                          <div className="modal_left col-12 col-xl-5 p-0">
                           <h2 class="modal-title m-0" id="exampleModalLabel">Xalqaro Test Markazi</h2>
                            <i>
                                IT bilimlarini rivojlantirish markazida tashkil etilgan Pearson VUE test markazi sizga IT-texnologiyalari sohasidagi dunyodagi yetakchi tashkilotlarning sertifikatlarini olish uchun o`z bilimlarini sinovdan o'tkazish xizmatlarini taklif etadi. Sinovdan muvaffaqiyatli o'tgan mutaxassislar bilim va malakalarini tasdiqlovchi sertifikatga ega bo`ladilar.
                            </i>
                            <i>
                                Pearson VUE tizimi avtomatlashtirilgan masofaviy imtihon va o'z testlarini ishlab chiqadigan va xalqaro test markazlari tarmog'iga uzatuvchi homiy kompaniyalardan sertifikatlarni olishdir. Bizning Test Markazimiz sizga qulay sharoitlarda va administratorning malakali yordami bilan test sinovlaridan o'tish va kerakli sertifikatni olish imkonini beradi.
                            </i>
                            <i>
                                Endi biz bilan siz quyidagi yoʻnalishlar boʻyicha xalqaro sertifikatlar olish uchun test sinovlaridan oʻtishingiz mumkin: 
                            </i>

                            <ul>
                                <li>
                                  <i>axborot texnologiyalari</i>
                                </li>
                                <li>
                                  <i>sog'liqni saqlash</i>
                                </li>
                                <li>
                                  <i>iqtisodiyot</i>
                                </li>
                                <li>
                                  <i>ta'lim</i>
                                </li>
                                <li>
                                  <i>marketing</i>
                                </li>
                            </ul>

                            <i>Test markazi dunyoning yetakchi tashkilotlari: LPI-Linux Professional Institute (LPIC-2 va LPIC-3), OpenEDG (Python Institute), Cisco (CCNA, CCNP), CompTIA va boshqa xalqaro sertifikatlarini taqdim etadi.</i>
                            <i>Xalqaro sertifikat olish martaba o'sishi va ko`proq maosh oluvchi mutaxassisga aylanishingiz uchun yaxshi imkoniyatlar eshigini ochadi. Shuningdek, 
                              <a href="https://www.it-istedod.uz/index-uz" target="_" className="mx-2" style={{color:"#0066cc", textDecoration:"none"}}> it-istedod.uz</a>
                              platformasi orqali xalqaro sertifikat olish uchun sarflangan mablag‘ning 50 foizigacha to‘lovni qaytarish uchun noyob imkoniyatga ega bo‘lishingiz mumkin. 
                            </i>
                            <b>IT Bilim Test Markazida imtihon topshiring va sertifikatlangan xalqaro mutaxassislarga aylaning!</b>
                              
                            <i><u style={{color: "#0066cc"}}>Imtihon ro`yxati</u></i>
                              
                            <p>
                              Kontakt uchun telefon raqam:
                              <a href="tel:+998555181199" target="_">
                                <br />+998 55 518 11 99 
                                <br />+998 99 594 11 99
                              </a>  
                            </p>

                            <p>Pochta: <a href="https://it-bilim.uz/info@it-bilim.uz" target="_">info@it-bilim.uz</a></p>
                           

                          </div>

                          <div className="modal_right col-12 col-xl-6 p-0">
                              <h2 class="modal-title m-0" id="exampleModalLabel">Ariza berish</h2>
                              <p>* Bilan belgilangan maydonlar to'ldirilishi shart</p>
                              <form action="" className="Modal_form">
                                <label htmlFor="for1">Ism *</label>
                                <input type="text" id="for1"/>
                                <label htmlFor="for2">Telefon *</label>
                                <input 
                                type="text"
                                value={value}
                                onFocus={handleFocus}
                                onChange={handleChange} 
                                 id="for2"/>
                                <label htmlFor="for3">Email *</label>
                                <input type="email" id="for3"/>
                                <label htmlFor="for4">Tashkilot * </label>
                                <input type="text" id="for4"/>
                                <label htmlFor="for5">Izoh qoldiring </label>
                                <textarea id="for5" class="not-valid" name="feedback[message]" data-empty="To'ldirish uchun majburiydir" tabindex="0"></textarea>
                                
                                <div className="d-flex align-items-center my-2">   
                                  <input class="form-check-input me-3 my-0" type="checkbox" defaultChecked/>
                                  <span>
                                    Qayta ishlashga rozilik beraman 
                                    <a  href="https://it-bilim.uz/politika-konfidentsialnosti/" target="_blank" tabindex="0">shaxsiy ma'lumotlar</a>
                                  </span>
                                </div>
                                <button class="btn grey transparent small" type="submit">Yuborish</button>
                              </form>
                          </div>
                      </div>
                    </div>
                </div>
          </div>


          {/* Modal 2 */}
        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen Modal_main">
                    <div class="modal-content modal_box">
                        <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                         
                      <div class="modal-body row d-flex justify-content-between">
                          <div className="modal_left col-12 col-xl-5 p-0">
                           <h2 class="modal-title m-0" id="exampleModalLabel">IT sohasidagi ta’lim muassasalariga maqsadli qarz berish</h2>
                            <i>
                                IT Parkning IT-ta’lim yo’nalishida faoliyat olib borayotgan rezident kompaniyalari maqsadli qarz olishlari mumkin. IT sohada ta’lim berishdan tashqari, maqsadli qarz olishning majburiy talablaridan biri bu o’qishni bitirgan talabalarni ish bilan ta’minlashdir. Ta’lim muassasalariga malakali mutaxassislarni tayyorlash sifatini oshirish, biznesni kengaytirish va modernizatsiya qilish uchun maqsadli qarz ajratiladi.
                            </i>
                            <i>
                               Shartlari:
                            </i>
                           
                            <ul>
                                <li>
                                  <i>imtiyozli davr taqdim etilgan holda yillik foiz 10-15% (qayta moliyalashtirish stavkasidan yuqori bo’lmagan holda);</i>
                                </li>
                                <li>
                                  <i>maqsadli qarz 3 yilga taqdim etiladi.</i>
                                </li>
                            </ul>

                            <b>Maqsadli qarz olish uchun so`rovnomani to`ldirib ariza qoldiring.</b>
                            
                          </div>

                          <div className="modal_right col-12 col-xl-6 p-0">
                              <h2 class="modal-title m-0" id="exampleModalLabel">Ariza berish</h2>
                              <p>* Bilan belgilangan maydonlar to'ldirilishi shart</p>
                              <form action="" className="Modal_form">
                                <label htmlFor="for1">Ism *</label>
                                <input type="text" id="for1"/>
                                <label htmlFor="for2">Telefon *</label>
                                <input type="number" id="for2"/>
                                <label htmlFor="for3">Email *</label>
                                <input type="email" id="for3"/>
                                <label htmlFor="for4">Tashkilot * </label>
                                <input type="text" id="for4"/>
                                <label htmlFor="for5">Izoh qoldiring </label>
                                <textarea id="for5" class="not-valid" name="feedback[message]" data-empty="To'ldirish uchun majburiydir" tabindex="0"></textarea>
                                
                                <div className="d-flex align-items-center my-2">   
                                  <input class="form-check-input me-3 my-0" type="checkbox" defaultChecked/>
                                  <span>
                                    Qayta ishlashga rozilik beraman 
                                    <a  href="https://it-bilim.uz/politika-konfidentsialnosti/" target="_blank" tabindex="0">shaxsiy ma'lumotlar</a>
                                  </span>
                                </div>
                                <button class="btn grey transparent small" type="submit">Yuborish</button>
                              </form>
                          </div>
                      </div>
                    </div>
                </div>
          </div>



          {/* Modal 3 */}
        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-fullscreen Modal_main">
                    <div class="modal-content modal_box">
                        <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                         
                      <div class="modal-body row d-flex justify-content-between">
                          <div className="modal_left col-12 col-xl-5 p-0">
                           <h2 class="modal-title m-0" id="exampleModalLabel">Ish bilan ta’minlash loyihasi – yosh IT mutaxassislarini amaliyot o’tashlari uchun ijtimoiy loyiha</h2>
                            <i>
                              <b>«IT-BILIMLARNI RIVOJLANTIRISH MARKAZI» MChJ tasarrufida yaratilgan “yosh IT mutaxassislarni ish bilan ta’minlash va amaliyot o’tashda ko’maklashish” maqsadida tashkil etilgan loyiha.</b>
                            </i>
                            <i>
                                Loyihaning asosiy maqsadi – IT mutaxassislarni o’qitish, bilimlarini baholash, amaliyot o’tashda ko’maklashish orqali yetuk mutaxassis qilib yetishtirish va ishga joylashishda yordam berishdan iborat.
                            </i>
                            <i>
                                Bizning asosiy missiyamiz - O`zbekistonda IT sanoatini yanada rivojlantirish.
                            </i>
                           
                        
                            <ul style={{listStyle:"none"}} className="p-0">
                                <li style={{fontSize:"16px", fontWeight:"600"}}>
                                    <i>
                                        <u>
                                          <b>Ijtimoiy loyihaning imkoniyatlari:</b>
                                        </u>
                                    </i>
                                </li>
                                <li>
                                  <i>- Yirik IT-kompaniyalarda amaliyot o’tash.</i>
                                </li>
                                <li>
                                  <i>- Ishga joylashish imkoniyati.</i>
                                </li>
                                <li>
                                  <i>- IT-mutaxassislardan amaliy tajriba olish imkoniyati.</i>
                                </li>
                                <li>
                                  <i>- Rezyume to`ldirishda ko`mak.</i>
                                </li>
                                <li>
                                  <i>- Suhbatga tayyorlanishda ko`mak.</i>
                                </li>
                            </ul>

                            <i>Biz bilan hamkorlikka qiziqish bildirsangiz arizani to’ldiring.</i>
                            <i>
                              <a href="https://docs.google.com/forms/d/13ebv5ooo3i3WDxnV8K1yGooIqTAGRBLbPFv_OPQd4yc" target="_">
                                  Yosh IT-mutaxassislar uchun ariza
                              </a>  
                              <br />
                              <a href="https://forms.gle/Us8b9xSbNpwKzaZF9" target="_">
                                  Kompaniyalar uchun ariza
                              </a>  
                              <br />
                              <a href="https://docs.google.com/forms/d/1EBST-4iNu8vrzWKLGCbECbDwqbVap4M0wBkTx0ycYhA" target="_">
                                  O’quv markazlari uchun ariza
                              </a>  
                            </i>

                          </div>


                          <div className="modal_right col-12 col-xl-6 p-0">
                              <h2 class="modal-title m-0" id="exampleModalLabel">Ariza berish</h2>
                              <p>* Bilan belgilangan maydonlar to'ldirilishi shart</p>
                              <form action="" className="Modal_form">
                                <label htmlFor="for1">Ism *</label>
                                <input type="text" id="for1"/>
                                <label htmlFor="for2">Telefon *</label>
                                <input type="number" id="for2"/>
                                <label htmlFor="for3">Email *</label>
                                <input type="email" id="for3"/>
                                <label htmlFor="for4">Tashkilot * </label>
                                <input type="text" id="for4"/>
                                <label htmlFor="for5">Izoh qoldiring </label>
                                <textarea id="for5" class="not-valid" name="feedback[message]" data-empty="To'ldirish uchun majburiydir" tabindex="0"></textarea>
                                
                                <div className="d-flex align-items-center my-2">   
                                  <input class="form-check-input me-3 my-0" type="checkbox" defaultChecked/>
                                  <span>
                                    Qayta ishlashga rozilik beraman 
                                    <a  href="https://it-bilim.uz/politika-konfidentsialnosti/" target="_blank" tabindex="0">shaxsiy ma'lumotlar</a>
                                  </span>
                                </div>
                                <button class="btn grey transparent small" type="submit">Yuborish</button>
                              </form>
                          </div>
                      </div>
                    </div>
                </div>
          </div>


      </div>
    </div>
  );
}

export default SwiperSlider;
