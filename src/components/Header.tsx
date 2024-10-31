import { useState } from 'react'
import { useTranslation} from "react-i18next"; //con eso usamos la traduccion

export default function Header() {
  const [t, i18n] = useTranslation("global"); //para hacer un boton para las traducciones
  return (
   <div>
   <h1>{t("header.hello-world")}</h1>

   <br/>    <br/>
    <button onClick={() => i18n.changeLanguage("es")}>ES</button>
    <button onClick={() => i18n.changeLanguage("en")}>EN</button>

  </div>
  );
}