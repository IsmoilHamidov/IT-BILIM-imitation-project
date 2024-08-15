import React from "react";
import { useTranslation } from "react-i18next";

function Info_Project() {
    const [t, i18n] = useTranslation("global");
    return ( 
        <div className="container-fluid border shadow-lg">
            <div className="row info_Project_box" id="About_us">
                <div className="col-12 col-lg-5">
                    <h2>{t("Info_Project.h_text1")}</h2>
                    <p>{t("Info_Project.text3")}</p>
                </div>
                <div className="col-12 col-lg-6 mt-2 mt-lg-0  ">
                    <h2>{t("Info_Project.h_text2")}</h2>
                    <p>{t("Info_Project.text4")}</p>
                </div>
            </div>
        </div>
     );
}

export default Info_Project;