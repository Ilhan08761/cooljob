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

import linkedinIcon from "./assets/Vector (1).svg";
import googleIcon from "./assets/Group 15.svg";
import twitterIcon from "./assets/Group 16.svg";
import fbFooterIcon from "./assets/feFacebook0.svg";

import colaColorLogo from "./assets/Cola.svg";
import facebookColorLogo from "./assets/facebook 2.svg";

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

const newVacancies = [
  {
    id: 1,
    category: "Финансы",
    dotColor: "#4DA8FF",
    title: "Менеджер по управлению финансами в крупной компании",
    location: "Осака, Япония",
    companyLogo: sonyLogo,
    companyName: "Sony",
    postedAt: "3 дня назад",
  },
  {
    id: 2,
    category: "Продажи",
    dotColor: "#FF66C4",
    title: "Специалист по продажам",
    location: "Коясан, Япония",
    companyLogo: facebookColorLogo,
    companyName: "Facebook",
    postedAt: "7 дней назад",
  },
  {
    id: 3,
    category: "Служба поддержки",
    dotColor: "#4CD964",
    title: "Оператор колл центра",
    location: "Томаму, Япония",
    companyLogo: colaColorLogo,
    companyName: "CocaCola",
    postedAt: "1 день назад",
  },
  {
    id: 4,
    category: "Мультимедиа",
    dotColor: "#FF9F43",
    title: "Системный администратор",
    location: "Токио, Япония",
    companyLogo: sonyLogo,
    companyName: "Sony",
    postedAt: "3 дня назад",
  },
  {
    id: 5,
    category: "Дизайн",
    dotColor: "#FF5E57",
    title: "Дизайнер интерьера в профессиональную студию в центре города",
    location: "Йокогама, Япония",
    companyLogo: facebookColorLogo,
    companyName: "Facebook",
    postedAt: "7 дней назад",
  },
  {
    id: 6,
    category: "Грузоперевозки",
    dotColor: "#3D4449",
    title: "Водитель на дальние дистанции",
    location: "Кобе, Япония",
    companyLogo: colaColorLogo,
    companyName: "CocaCola",
    postedAt: "1 день назад",
  },
];

const popularCities = [
  "Осака",
  "Коясан",
  "Токио",
  "Хаконэ",
  "Наэба",
  "Томаму",
  "Йокогама",
  "Нагоя",
  "Саппоро",
  "Кобе",
];

const socialLinks = [
  { id: 1, name: "LinkedIn", icon: linkedinIcon, url: "#linkedin" },
  { id: 2, name: "Google", icon: googleIcon, url: "#google" },
  { id: 3, name: "Twitter", icon: twitterIcon, url: "#twitter" },
  { id: 4, name: "Facebook", icon: fbFooterIcon, url: "#facebook" },
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
      {/* Секция: Новые вакансии */}
      <section className={styles.vacanciesSection}>
        <div className={styles.container}>
          <div className={styles.vacanciesHeader}>
            <h2 className={styles.vacanciesTitle}>Новые вакансии</h2>
            <p className={styles.vacanciesSubtitle}>
              Найди работу своей мечты прямо сейчас
            </p>
          </div>

          <div className={styles.vacanciesGrid}>
            {newVacancies.map((vacancy) => (
              <article key={vacancy.id} className={styles.vacancyCard}>
                <div>
                  <div className={styles.vacancyCategory}>
                    <span
                      className={styles.categoryDot}
                      style={{ backgroundColor: vacancy.dotColor }}
                    />
                    <span>{vacancy.category}</span>
                  </div>

                  <h3 className={styles.vacancyTitle}>{vacancy.title}</h3>

                  <div className={styles.vacancyLocation}>
                    <img
                      src={locationIcon}
                      alt=""
                      className={styles.vacancyLocationIcon}
                    />
                    <span>{vacancy.location}</span>
                  </div>
                </div>

                <div className={styles.vacancyFooter}>
                  <img
                    src={vacancy.companyLogo}
                    alt={vacancy.companyName}
                    className={styles.vacancyCompanyLogo}
                  />
                  <span className={styles.vacancyMeta}>
                    {vacancy.companyName}, {vacancy.postedAt}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.vacanciesAction}>
            <button type="button" className={styles.btnAllVacancies}>
              Все вакансии
            </button>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <h3 className={styles.footerTitle}>Популярные города</h3>
            <ul className={styles.citiesList}>
              {popularCities.map((city) => (
                <li key={city}>
                  <a href={`#${city}`} className={styles.cityLink}>
                    {city}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerDivider} />

          <div className={styles.footerBottom}>
            <a href="/" className={styles.footerLogo}>
              <img src={cooljobLogo} alt="Cooljob" />
            </a>

            <div className={styles.socialsList}>
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  aria-label={social.name}
                  className={styles.socialLink}
                >
                  <img
                    src={social.icon}
                    alt={social.name}
                    className={styles.socialIcon}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
