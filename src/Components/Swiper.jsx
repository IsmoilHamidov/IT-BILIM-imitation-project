import React, { useState, useEffect } from "react";
import japan from "../Assets/40b396321a69.jpg";
import team from "../Assets/7ea5fe56831c.jpg";
import bilgi from "../Assets/bilgi_img.jpg";
import group from "../Assets/b582c776c9f5.jpg";
import coders from "../Assets/ed84f4ef2f2e.jpg";
import pearson from "../Assets/pearson_img.png";
import ModalForm from "./Modal_Form";

function SwiperSlider() {
  const [offset, setOffset] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const totalCards = 6;
  const scrollDuration = 1.7; // Adjusting duration for smoother transitions

  const updateCardWidth = () => {
    const viewportWidth = window.innerWidth;
    if (viewportWidth <= 620) {
      setCardWidth(viewportWidth);  
    } else if (viewportWidth <= 1200) {
      setCardWidth(viewportWidth / 5); 
    } else {
      setCardWidth((viewportWidth / 2) * 0.9); 
    }
  };

  useEffect(() => {
    updateCardWidth();

    const handleResize = () => {
      updateCardWidth();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const updateOffset = (direction) => {
    const viewportWidth = window.innerWidth;
    let visibleCards = 1; 

    if (viewportWidth > 620 && viewportWidth <= 1200) {
      visibleCards = 5; 
    } else if (viewportWidth > 1200) {
      visibleCards = 2; 
    }

    const scrollAmount = cardWidth * (direction === 'next' ? 2 : -2);
    const maxOffset = (totalCards - visibleCards) * cardWidth;
    let newOffset = offset + scrollAmount;

 
    newOffset = Math.min(Math.max(newOffset, 0), maxOffset);

    setOffset(newOffset);
  };

  const handleScroll = (event) => {
    if (modalOpen) return; 
    event.preventDefault();
    if (isScrolling) return; 

    setIsScrolling(true);
    const direction = event.deltaY > 0 ? 'next' : 'prev';

    updateOffset(direction);

    
    setTimeout(() => setIsScrolling(false), scrollDuration * 1000); 
  };

  useEffect(() => {
    const swiperBottom = document.querySelector(".swiper_bottom");
    swiperBottom.addEventListener("wheel", handleScroll, { passive: false });

    const handleModalShow = () => setModalOpen(true);
    const handleModalHide = () => setModalOpen(false);


    // Modal opening and closing
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
      modal.addEventListener('show.bs.modal', handleModalShow);
      modal.addEventListener('hide.bs.modal', handleModalHide);
    });

    return () => {
      swiperBottom.removeEventListener("wheel", handleScroll);
      modals.forEach(modal => {
        modal.removeEventListener('show.bs.modal', handleModalShow);
        modal.removeEventListener('hide.bs.modal', handleModalHide);
      });
    };
  }, [cardWidth, offset, isScrolling, modalOpen]);


  
  return (
    <div className="container-fluid h-auto Projects_Swiper" id="Projects">
      <div className="swiper_top">
        <h2>Loyihalar</h2>
        <div className="swiper_btn_group">
          <button
            onClick={() => {
              updateOffset('prev');
              setIsScrolling(true);
              setTimeout(() => setIsScrolling(false), scrollDuration * 1000);
            }}
            style={{
              backgroundColor: offset === 0 ? "#7eb649a3" : "#7eb649",
            }}
          >
            <i className="fa-solid fa-chevron-left text-white"></i>
          </button>
          <button
            onClick={() => {
              updateOffset('next');
              setIsScrolling(true);
              setTimeout(() => setIsScrolling(false), scrollDuration * 1000);
            }}
            style={{
              backgroundColor:
                offset === (totalCards - 2) * cardWidth
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
            transform: `translateX(-${offset}px)`,
            transition: `transform ${scrollDuration}s ease`, 
          }}
        >
          <div className="swiper_bottom_Card">
            <img src={pearson} alt="Card_image" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                <h2>Xalqaro Test Markazi</h2>
                <p>
                  IT-Bilimlarini rivojlanritish markazi Pearson VUE xalqaro test
                  markazi bilan hamkorlikni yolga qoydi.
                </p>
              </div>
              <a data-bs-toggle="modal" data-bs-target="#exampleModal1">Batafsil{" "}
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
              </a>
            </div>
          </div>
          <div className="swiper_bottom_Card">
            <img src={japan} alt="Card_image" />
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
            <img src={team} alt="Card_image" />
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
            <img src={bilgi} alt="Card_image" />
            <div className="swiper_bottom_card_holder">
              <div className="swiper_bottom_card_holder_top">
                <h2>Bilgi.uz talim marketpleysi</h2>
                <p>
                  imtiyozli muddatli tolov evaziga IT kurslarning katta tanlovi
                </p>
              </div>
              <a href="https://bilgi.uz/uz/" target="_">
                Batafsil{" "}
                <i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
              </a>
            </div>
          </div>
          <div className="swiper_bottom_Card">
            <img src={group} alt="Card_image" />
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
            <img src={coders} alt="Card_image" />
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
        <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel first_modal" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen Modal_main">
                    <div className="modal-content modal_box">
                        <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                         
                      <div className="modal-body row d-flex justify-content-between">
                          <div className="modal_left col-12 col-xl-5 p-0">
                           <h2 className="modal-title m-0" id="exampleModalLabel">Xalqaro Test Markazi</h2>
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
                              <h2 className="modal-title m-0" id="exampleModalLabel">Ariza berish</h2>
                              <p>* Bilan belgilangan maydonlar to'ldirilishi shart</p>
                              <ModalForm/>
                          </div>
                      </div>
                    </div>
                </div>
          </div>


          {/* Modal 2 */}
        <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen Modal_main">
                    <div className="modal-content modal_box">
                        <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                         
                      <div className="modal-body row d-flex justify-content-between">
                          <div className="modal_left col-12 col-xl-5 p-0">
                           <h2 className="modal-title m-0" id="exampleModalLabel">IT sohasidagi ta’lim muassasalariga maqsadli qarz berish</h2>
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
                              <h2 className="modal-title m-0" id="exampleModalLabel">Ariza berish</h2>
                              <p>* Bilan belgilangan maydonlar to'ldirilishi shart</p>
                              <ModalForm/>
                          </div>
                      </div>
                    </div>
                </div>
          </div>



          {/* Modal 3 */}
        <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen Modal_main">
                    <div className="modal-content modal_box">
                        <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                         
                      <div className="modal-body row d-flex justify-content-between">
                          <div className="modal_left col-12 col-xl-5 p-0">
                           <h2 className="modal-title m-0" id="exampleModalLabel">Ish bilan ta’minlash loyihasi – yosh IT mutaxassislarini amaliyot o’tashlari uchun ijtimoiy loyiha</h2>
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
                              <h2 className="modal-title m-0" id="exampleModalLabel">Ariza berish</h2>
                              <p>* Bilan belgilangan maydonlar to'ldirilishi shart</p>
                              <ModalForm/>
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
