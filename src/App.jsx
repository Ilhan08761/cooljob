import "./App.css";
import cooljobLogo from "./assets/Cooljob.svg";
import searchIcon from "./assets/Поиск.svg";
import locationIcon from "./assets/Локация.svg";

import disneyLogo from "./assets/disney.svg";
import facebookLogo from "./assets/facebook.svg";
import microsoftLogo from "./assets/microsoft.svg";
import sonyLogo from "./assets/sony.svg";
import cocacolaLogo from "./assets/cocacola.svg";

const partners = [
  { id: 1, name: "Disney", logo: disneyLogo, width: 112, height: 42 },
  { id: 2, name: "Facebook", logo: facebookLogo, width: 110, height: 22 },
  { id: 3, name: "Microsoft", logo: microsoftLogo, width: 118, height: 26 },
  { id: 4, name: "Sony", logo: sonyLogo, width: 108, height: 20 },
  { id: 5, name: "Coca-Cola", logo: cocacolaLogo, width: 106, height: 34 },
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
    </div>
  );
}

export default App;
