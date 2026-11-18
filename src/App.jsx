import styles from "./App.module.css";
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
    <div className={styles.pageWrapper}>
      <div className={styles.heroSection}>
        <div className={styles.heroBgShape} />

        <header className={`${styles.header} ${styles.container}`}>
          <div className={styles.headerLeft}>
            <a href="/" className={styles.logo}>
              <img src={cooljobLogo} alt="Cooljob" />
            </a>
            <nav className={styles.nav}>
              <a href="#jobs" className={styles.navLink}>
                Поиск работы
              </a>
              <a href="#startups" className={styles.navLink}>
                Поиск стартапов
              </a>
            </nav>
          </div>

          <div className={styles.headerRight}>
            <a href="#register" className={styles.navLink}>
              Регистрация
            </a>
            <button type="button" className={styles.btnLogin}>
              Вход
            </button>
          </div>
        </header>

        <main className={`${styles.heroContent} ${styles.container}`}>
          <h1 className={styles.heroTitle}>
            Один клик <br />и работа в кармане
          </h1>

          <form className={styles.searchBar} onSubmit={handleSearch}>
            <div className={styles.searchField}>
              <img src={searchIcon} alt="" className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Должность или компания"
                className={styles.searchInput}
              />
            </div>

            <div className={styles.searchDivider} />

            <div className={styles.searchField}>
              <img src={locationIcon} alt="" className={styles.searchIcon} />
              <input
                type="text"
                placeholder="Город, Страна"
                className={styles.searchInput}
              />
            </div>

            <button type="submit" className={styles.btnSearch}>
              Поиск
            </button>
          </form>
        </main>
      </div>

      <section className={styles.partnersSection}>
        <div className={`${styles.container} ${styles.partnersInner}`}>
          <span className={styles.partnersLabel}>Помогаем найти работу:</span>
          <div className={styles.partnersLogos}>
            {partners.map((partner) => (
              <img
                key={partner.id}
                src={partner.logo}
                alt={partner.name}
                className={styles.partnerLogo}
                style={{
                  width: `${partner.width}px`,
                  height: `${partner.height}px`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.categoriesSection}>
        <div className={styles.container}>
          <h2 className={styles.categoriesTitle}>
            Работа <br />
            по категориям
          </h2>

          <div className={styles.categoriesGrid}>
            {categories.map((category) => (
              <div
                key={category.id}
                className={`${styles.categoryCard} ${
                  category.isMore ? styles.categoryCardMore : ""
                }`}
              >
                <img
                  src={category.icon}
                  alt={category.title}
                  className={styles.categoryIcon}
                />
                <span className={styles.categoryName}>{category.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
