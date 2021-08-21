import React from "react";
import "./footer.scss";
import YouTube from "./img/YouTube.svg"
import VK from "./img/VK.svg"
import Facebook from "./img/Facebook.svg"

export default function FooterSection() {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="button_block">
          <button href={"/catalog"}>Главная</button>
          <button href={"/catalog"}>Каталог</button>
          <button href={"/catalog"}>Поставщики</button>
          <button href={"/catalog"}>Коллекции</button>
          <button href={"/catalog"}>Дегустация</button>
          <button href={"/catalog"}>Коллекция 2020</button>
          <button href={"/catalog"}>Контакты</button>
        </div>

        <div className="link_block">
          <p>винный бутик le corte</p>

          <div className="border"></div>

          <a href="/#">8 (812) 123-45-67</a>

          <div className="border"></div>

          <div className="link_block__social">
            <button>
              <img src={YouTube} alt="jhgjg" />
            </button>
            <button>
              <img src={VK} alt="" />
            </button>
            <button>
              <img src={Facebook} alt="" />
            </button>
          </div>

          <div className="border"></div>
          <p>© le-corte.ru</p>
        </div>

      </div>
    </div>

    // <div className="wrapper">
    //   <ul>
    //     <li>Главная</li>
    //     <li>Каталог</li>
    //     <li>Поставщик</li>
    //     <li>Коллекции</li>
    //     <li>Дегустация</li>
    //     <li>Коллекция</li>
    //     <li>Контакты</li>
    //   </ul>
      
    //   <ul>
    //     <li>винный бутик le corte</li>
    //     <li>8 (812) 123-45-67</li>
    //     <li>
    //     <img src={YouTube} alt="jhgjg" />
    //     <img src={VK} alt="" />
    //     <img src={Facebook} alt="" />
    //     </li>
    //     <li>© le-corte.ru</li>
    //   </ul>
    // </div>

    



  );
}
