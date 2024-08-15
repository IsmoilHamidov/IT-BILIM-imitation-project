import React from "react";
import { useTranslation } from "react-i18next";


function IT_Bilim() {
    const [t, i18n] = useTranslation("global");
    return ( 
        <>
            <div className="container-fluid shadow-lg">
                <div className="row IT_bilim_holder">
                    <div className="col-12">
                        <h2>{t("Other_titles.h2")}</h2>
                        <a href="https://www.instagram.com/itbilim.uz/" target=" ">{t("Other_titles.h3")}</a>
                    </div>
                </div>
            </div>
        </>
     );
}

export default IT_Bilim;