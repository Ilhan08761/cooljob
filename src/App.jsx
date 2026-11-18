import "./App.css";
import cooljobLogo from "./assets/Cooljob.svg";
import searchIcon from "./assets/Поиск.svg";
import locationIcon from "./assets/Локация.svg";

import disneyLogo from "./assets/disney.svg";
import facebookLogo from "./assets/facebook.svg";
import microsoftLogo from "./assets/microsoft.svg";
import sonyLogo from "./assets/sony.svg";
import cocacolaLogo from "./assets/cocacola.svg";

import arrowIcon from "./assets/Vector.svg";
import financeIcon from "./assets/Vector1.svg";
import logisticsIcon from "./assets/Vector2.svg";
import designIcon from "./assets/Vector3.svg";
import restaurantIcon from "./assets/Vector4.svg";
import medicineIcon from "./assets/Vector5.svg";
import mediaIcon from "./assets/Vector6.svg";
import supportIcon from "./assets/Vector7.svg";
import managementIcon from "./assets/Vector8.svg";
import salesIcon from "./assets/Vector9.svg";

const partners = [
  { id: 1, name: "Disney", logo: disneyLogo, width: 92, height: 34 },
  { id: 2, name: "Facebook", logo: facebookLogo, width: 90, height: 18 },
  { id: 3, name: "Microsoft", logo: microsoftLogo, width: 98, height: 22 },
  { id: 4, name: "Sony", logo: sonyLogo, width: 88, height: 16 },
  { id: 5, name: "Coca-Cola", logo: cocacolaLogo, width: 88, height: 28 },
];

const categories = [
  { id: 1, title: "Финансы", icon: financeIcon },
  { id: 2, title: "Грузоперевозки", icon: logisticsIcon },
  { id: 3, title: "Дизайн", icon: designIcon },
  { id: 4, title: "Ресторанный\nбизнес", icon: restaurantIcon },
  { id: 5, title: "Медицина", icon: medicineIcon },
  { id: 6, title: "Мультимедиа", icon: mediaIcon },
  { id: 7, title: "Служба\nподдержки", icon: supportIcon },
  { id: 8, title: "Менеджмент", icon: managementIcon },
  { id: 9, title: "Продажи", icon: salesIcon },
  { id: 10, title: "Больше\nкатегорий", icon: arrowIcon, isMore: true },
];

function App() {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pageWrapper">
      <div className="heroSection">
        <div className="heroBgShape" />

        <header className="header container">
          <div className="headerLeft">
            <a href="/" className="logo">
              <img src={cooljobLogo} alt="Cooljob" />
            </a>
            <nav className="nav">
              <a href="#jobs" className="navLink">
                Поиск работы
              </a>
              <a href="#startups" className="navLink">
                Поиск стартапов
              </a>
            </nav>
          </div>

          <div className="headerRight">
            <a href="#register" className="navLink">
              Регистрация
            </a>
            <button type="button" className="btnLogin">
              Вход
            </button>
          </div>
        </header>

        <main className="heroContent container">
          <h1 className="heroTitle">
            Один клик <br />и работа в кармане
          </h1>

          <form className="searchBar" onSubmit={handleSearch}>
            <div className="searchField">
              <img src={searchIcon} alt="" className="searchIcon" />
              <input
                type="text"
                placeholder="Должность или компания"
                className="searchInput"
              />
            </div>

            <div className="searchDivider" />

            <div className="searchField">
              <img src={locationIcon} alt="" className="searchIcon" />
              <input
                type="text"
                placeholder="Город, Страна"
                className="searchInput"
              />
            </div>

            <button type="submit" className="btnSearch">
              Поиск
            </button>
          </form>
        </main>
      </div>

      <section className="partnersSection">
        <div className="container partnersInner">
          <span className="partnersLabel">Помогаем найти работу:</span>
          <div className="partnersLogos">
            {partners.map((partner) => (
              <img
                key={partner.id}
                src={partner.logo}
                alt={partner.name}
                className="partnerLogo"
                style={{
                  width: `${partner.width}px`,
                  height: `${partner.height}px`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="categoriesSection">
        <div className="categoriesContainer">
          <h2 className="categoriesTitle">
            Работа <br />
            по категориям
          </h2>

          <div className="categoriesGrid">
            {categories.map((category) => (
              <div
                key={category.id}
                className={`categoryCard ${category.isMore ? "categoryCardMore" : ""}`}
              >
                <img
                  src={category.icon}
                  alt={category.title}
                  className="categoryIcon"
                />
                <span className="categoryName">{category.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
