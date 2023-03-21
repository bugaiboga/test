if (
  document.documentElement.clientWidth < 1200 &&
  document.documentElement.clientWidth > 960
) {
  headerDeckstop();
  document.getElementById("header__menu-show").addEventListener("click", () => {
    const menuWrapper = document.getElementById("header__menu-inner");
    menuWrapper.classList.toggle("d-none");
  });
}

if (
  document.documentElement.clientWidth < 960 &&
  document.documentElement.clientWidth > 560
) {
  headerTable();

  document
    .getElementById("header__menu-burger")
    .addEventListener("click", () => {
      handleShowMenu("menu__burger-img", "header__menu");
    });
}
if (document.documentElement.clientWidth < 560) {
  headerMobile();

  document
    .getElementById("header__menu-burger")
    .addEventListener("click", () => {
      handleShowMenu("menu__burger-img", "header__menu");
    });
}

function handleShowMenu(imgId, element) {
  const menuBurgerImg = document.getElementById(imgId);
  const menu = document.getElementById(element);

  if (menu.style.display === "block") {
    menu.style.display = "none";
    menuBurgerImg.src = "./images/icons/menu-burger.svg";
  } else {
    menu.style.display = "block";
    menuBurgerImg.src = "./images/icons/close.svg";
  }
}
function headerDeckstop() {
  const menu = document.getElementById("header__menu");
  menu.innerHTML = `
       <ul class="header__menu-list">
        <li>
          <a class="header__menu-link" href="#">
            О магазине
          </a>
        </li>
        <li>
          <a class="header__menu-link" href="#">
            Оплата и доставка
          </a>
        </li>
        <li>
          <a class="header__menu-link" href="#">
            Дисконтная карта
          </a>
        </li>
        <li>
          <a class="header__menu-link" href="#">
            Вакансии
          </a>
        </li>
        <li>
        <a class="header__menu-link" href="#">
          Оптовикам
        </a>
      </li>
        <div class="wrapper" id="header__menu-wrapper">
          <li>
            <a
              class="header__menu-link link-moore"
              id="header__menu-show"
              href="#"
            >
              Еще <span></span>
            </a>
          </li>
          <ul class="inner d-none" id="header__menu-inner">
            <li>
              <a class="header__menu-link" href="#">
                Контакты
              </a>
            </li>
            <li>
              <a class="header__menu-link" href="#">
                Новости
              </a>
            </li>
            <li>
              <a class="header__menu-link" href="#">
                Акции
              </a>
            </li>
            <li>
              <a class="header__menu-link" href="#">
                Франшиза
              </a>
            </li>
          </ul>
        </div>
      </ul>
     `;
}
function headerTable() {
  const header = document.getElementById("header");
  header.innerHTML = `
      <div class="header__top">
        <div class="header__menu-container">
          <button class="header__menu-burger" id="header__menu-burger">
            <img
              id="menu__burger-img"
              src="./images/icons/menu-burger.svg"
              alt="menu"
            />
            Меню
          </button>
          <nav class="header__nav">
            <menu class="header__menu" id="header__menu">
              <ul class="header__menu-list">
                <li>
                  <a class="header__menu-link" href="#">
                    О магазине
                  </a>
                </li>
                <li>
                  <a class="header__menu-link" href="#">
                    Оплата и доставка
                  </a>
                </li>
                <li>
                  <a class="header__menu-link" href="#">
                    Дисконтная карта
                  </a>
                </li>
                <li>
                  <a class="header__menu-link" href="#">
                    Вакансии
                  </a>
                </li>
                <li>
                  <a class="header__menu-link" href="#">
                    Оптовикам
                  </a>
                </li>
                <li>
                  <a class="header__menu-link" href="#">
                    Контакты
                  </a>
                </li>
                <li>
                  <a class="header__menu-link" href="#">
                    Новости
                  </a>
                </li>
                <li>
                  <a class="header__menu-link" href="#">
                    Акции
                  </a>
                </li>
                <li>
                  <a class="header__menu-link" href="#">
                    Франшиза
                  </a>
                </li>
              </ul>
            </menu>
          </nav>
        </div>
        <div class="header__logo">
          <a href="#">
            <img src="./images/icons/logo.svg" alt="logo" />
          </a>
        </div>
        <div class="header__user-service">
          <div class="recall">
            <a href="#">
              <img src="./images/icons/calling.svg" alt="calling" />8 (812) 701
              01 87
            </a>
            <p>Обратный звонок</p>
          </div>
          <div class="account">
            <button>
              <img src="./images/icons/user.svg" alt="user" />
            </button>
            <p>Вход</p>
          </div>
          <div class="card">
            <span class="count">12</span>
            <button>
              <img src="./images/icons/shopping-cart.svg" alt="bascket" />
            </button>
            <p>Корзина</p>
          </div>
        </div>
      </div>
      <div class="header__bottom">
        <div class="header__bottom-wrapper">
          <div class="header__info">
            <ul class="header__list-info">
              <li class="header__info-location">
                <a href="#">
                  <img
                    src="./images/icons/location.svg"
                    alt="vector-location"
                  />
                  Санкт-Петербург
                </a>
              </li>
              <li class="header__info-mail">
                <a href="#">
                  <img src="./images/icons/mail.svg" alt="vector-mail" />
                  reddragon-spb@mail.ru
                </a>
              </li>
            </ul>
          </div>
          <div class="header__shop-navigate">
            <div class="header__btn-block">
              <button class="header__btn-catalog" id="main__catalog-btn">
                <img
                  id="main__catalog-icon"
                  src="./images/icons/menu.svg"
                  alt="menu"
                />
                <p>Каталог товаров</p>
              </button>
            </div>
          </div>
        </div>
        <div class="header__search-block">
          <input
            class="header__search-input"
            type="text"
            name="search"
            placeholder="Поиск по товарам"
            id="search__block"
          />
        </div>
      </div>
      <div class="main__catalog" id="main__catalog">
        <div class="main__catalog-sidebar">
          <ul class="catalog__sidebar-list">
            <li
              class="catalog__sidebar-item catalog__sidebar-close"
              id="catalog__sidebar-close"
            >
              <a href="#">
                <img src="./images/icons/close-white.svg" alt="vector" />
                <p>Закрыти</p>
              </a>
            </li>
            <li class="catalog__sidebar-item catalog__sidebar-item--sale">
              <a href="#">
                <img
                  src="./images/content/catalog-vectors/percent.svg"
                  alt="vector"
                />
                <p>Товары со скидкой</p>
              </a>
            </li>
            <li class="catalog__sidebar-item catalog__sidebar-item--new">
              <a href="#">
                <img
                  src="./images/content/catalog-vectors/shopping-bag.svg"
                  alt="vector"
                />
                <p>Новые поступления</p>
              </a>
            </li>
            <li class="catalog__sidebar-item">
              <a href="#">
                <img
                  src="./images/content/catalog-vectors/icon-1.svg"
                  alt="icon"
                />
                <p>Водоросли</p>
              </a>
            </li>
            <li class="catalog__sidebar-item">
              <a href="#">
                <img
                  src="./images/content/catalog-vectors/icon-2.svg"
                  alt="vector"
                />
                <p>Готовые блюда, супы, салаты</p>
              </a>
            </li>
            <li class="catalog__sidebar-item">
              <a href="#">
                <img
                  src="./images/content/catalog-vectors/icon-3.svg"
                  alt="vector"
                />
                <p>Грибы, имбирь, соя</p>
              </a>
            </li>
            <li class="catalog__sidebar-item">
              <a href="#">
                <img
                  src="./images/content/catalog-vectors/icon-4.svg"
                  alt="vector"
                />
                <p>Замороженные продукты, полуфабрикаты, тесто</p>
              </a>
            </li>
            <li class="catalog__sidebar-item">
              <a href="#">
                <img
                  src="./images/content/catalog-vectors/icon-5.svg"
                  alt="vector"
                />
                <p>Кокосовые продукты</p>
              </a>
            </li>
            <li class="catalog__sidebar-item">
              <a href="#">
                <img
                  src="./images/content/catalog-vectors/icon-6.svg"
                  alt="vector"
                />
                <p>Лапша, рис и продукты из него</p>
              </a>
            </li>
            <li class="catalog__sidebar-item">
              <a href="#">
                <img
                  src="./images/content/catalog-vectors/icon-7.svg"
                  alt="vector"
                />
                <p>Мази и БАДы</p>
              </a>
            </li>
            <li class="catalog__sidebar-item">
              <a href="#">
                <img
                  src="./images/content/catalog-vectors/icon-8.svg"
                  alt="vector"
                />
                <p>Мука, крахмал, сухари</p>
              </a>
            </li>
            <li class="catalog__sidebar-item">
              <a href="#">
                <img
                  src="./images/content/catalog-vectors/icon-8.svg"
                  alt="vector"
                />
                <p>Другие продукты</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="main__catalog-content">
          <div class="main__catalog-wrapper">
            <div class="main__catalog-inner">
              <ul>
                <li>
                  <h5>Готовые блюда</h5>
                </li>
                <li>
                  <h5>Салаты</h5>
                </li>
                <li>
                  <h5>Супы</h5>
                </li>
                <li>
                  <a href="#">Супы быстрого приготовления</a>
                </li>
                <li>
                  <a href="#">Мисо-супы</a>
                </li>
                <li>
                  <a href="#">Консервированные супы</a>
                </li>
                <li>
                  <a href="#">Корейские супы</a>
                </li>
                <li>
                  <a href="#">Японские супы</a>
                </li>
                <li>
                  <a href="#">Тайские супы</a>
                </li>
                <li>
                  <a href="#">Наборы для супа</a>
                </li>
              </ul>
            </div>
            <div class="main__catalog-banner">
              <h4>Попробуйте новые вкусы японсокй кухни</h4>
              <button>Посмотреть сейчас</button>
            </div>
          </div>
        </div>
      </div>
     `;
}
function headerMobile() {
  const header = document.getElementById("header");
  header.innerHTML = `
    <div class="header__top">
      <div class="header__menu-container">
        <button class="header__menu-burger" id="header__menu-burger">
          <img
            id="menu__burger-img"
            src="./images/icons/menu-burger.svg"
            alt="menu"
          />
          <p>Меню</p>
        </button>
        <nav class="header__nav">
          <menu class="header__menu" id="header__menu">
            <ul class="header__menu-list" id="header__menu-list">
              <li>
                <a class="header__menu-link" href="#">
                  О магазине
                </a>
              </li>
              <li>
                <a class="header__menu-link" href="#">
                  Оплата и доставка
                </a>
              </li>
              <li>
                <a class="header__menu-link" href="#">
                  Дисконтная карта
                </a>
              </li>
              <li>
                <a class="header__menu-link" href="#">
                  Вакансии
                </a>
              </li>
              <li>
                <a class="header__menu-link" href="#">
                  Оптовикам
                </a>
              </li>
              <li>
                <a class="header__menu-link" href="#">
                  Контакты
                </a>
              </li>
              <li>
                <a class="header__menu-link" href="#">
                  Новости
                </a>
              </li>
              <li>
                <a class="header__menu-link" href="#">
                  Акции
                </a>
              </li>
              <li>
                <a class="header__menu-link" href="#">
                  Франшиза
                </a>
              </li>
            </ul>
          </menu>
        </nav>
      </div>
      <div class="header__logo">
        <a href="#">
          <img src="./images/icons/logo.svg" alt="logo" />
        </a>
      </div>
      <div class="header__user-service">
        <div class="recall">
          <a href="#">
            <img src="./images/icons/calling.svg" alt="calling" />
          </a>
        </div>
      </div>
    </div>
    <div class="header__bottom">
      <div class="header__info">
        <ul class="header__list-info">
          <li class="header__info-location">
            <a href="#">
              <img src="./images/icons/location.svg" alt="vector-location" />
              Санкт-Петербург
            </a>
          </li>
          <li class="header__info-mail">
            <a href="#">
              <img src="./images/icons/mail.svg" alt="vector-mail" />
              reddragon-spb@mail.ru
            </a>
          </li>
        </ul>
      </div>
      <div class="header__btn-block">
        <button class="header__btn-catalog" id="main__catalog-btn">
          <img
            id="main__catalog-icon"
            src="./images/icons/menu.svg"
            alt="menu"
          />
          <p>Каталог товаров</p>
        </button>
      </div>
      <div class="header__search-block">
        <input
          class="header__search-input"
          type="text"
          name="search"
          placeholder="Поиск по товарам"
          id="search__block"
        />
      </div>
    </div>
    <div class="main__catalog" id="main__catalog">
      <div class="main__catalog-sidebar">
        <ul class="catalog__sidebar-list" id="catalog__sidebar-list">
          <li
            class="catalog__sidebar-item catalog__sidebar-close"
            id="catalog__sidebar-close"
          >
            <a href="#">
              <img src="./images/icons/close-white.svg" alt="vector" />
              <p>Закрыти</p>
            </a>
          </li>
          <li class="catalog__sidebar-item catalog__sidebar-item--sale">
            <a href="#">
              <img
                src="./images/content/catalog-vectors/percent.svg"
                alt="vector"
              />
              <p>Товары со скидкой</p>
            </a>
          </li>
          <li class="catalog__sidebar-item catalog__sidebar-item--new">
            <a href="#">
              <img
                src="./images/content/catalog-vectors/shopping-bag.svg"
                alt="vector"
              />
              <p>Новые поступления</p>
            </a>
          </li>
          <li class="catalog__sidebar-item">
            <a href="#">
              <img
                src="./images/content/catalog-vectors/icon-1.svg"
                alt="icon"
              />
              <p>Водоросли</p>
            </a>
          </li>
          <li class="catalog__sidebar-item">
            <a href="#">
              <img
                src="./images/content/catalog-vectors/icon-2.svg"
                alt="vector"
              />
              <p>Готовые блюда, супы, салаты</p>
            </a>
          </li>
          <li class="catalog__sidebar-item">
            <a href="#">
              <img
                src="./images/content/catalog-vectors/icon-3.svg"
                alt="vector"
              />
              <p>Грибы, имбирь, соя</p>
            </a>
          </li>
          <li class="catalog__sidebar-item">
            <a href="#">
              <img
                src="./images/content/catalog-vectors/icon-4.svg"
                alt="vector"
              />
              <p>Замороженные продукты, полуфабрикаты, тесто</p>
            </a>
          </li>
          <li class="catalog__sidebar-item">
            <a href="#">
              <img
                src="./images/content/catalog-vectors/icon-5.svg"
                alt="vector"
              />
              <p>Кокосовые продукты</p>
            </a>
          </li>
          <li class="catalog__sidebar-item">
            <a href="#">
              <img
                src="./images/content/catalog-vectors/icon-6.svg"
                alt="vector"
              />
              <p>Лапша, рис и продукты из него</p>
            </a>
          </li>
          <li class="catalog__sidebar-item">
            <a href="#">
              <img
                src="./images/content/catalog-vectors/icon-7.svg"
                alt="vector"
              />
              <p>Мази и БАДы</p>
            </a>
          </li>
          <li class="catalog__sidebar-item">
            <a href="#">
              <img
                src="./images/content/catalog-vectors/icon-8.svg"
                alt="vector"
              />
              <p>Мука, крахмал, сухари</p>
            </a>
          </li>
          <li class="catalog__sidebar-item">
            <a href="#">
              <img
                src="./images/content/catalog-vectors/icon-8.svg"
                alt="vector"
              />
              <p>Другие продукты</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="main__catalog-content">
        <div class="main__catalog-wrapper">
          <div class="main__catalog-inner">
            <ul>
              <li>
                <h5>Готовые блюда</h5>
              </li>
              <li>
                <h5>Салаты</h5>
              </li>
              <li>
                <h5>Супы</h5>
              </li>
              <li>
                <a href="#">Супы быстрого приготовления</a>
              </li>
              <li>
                <a href="#">Мисо-супы</a>
              </li>
              <li>
                <a href="#">Консервированные супы</a>
              </li>
              <li>
                <a href="#">Корейские супы</a>
              </li>
              <li>
                <a href="#">Японские супы</a>
              </li>
              <li>
                <a href="#">Тайские супы</a>
              </li>
              <li>
                <a href="#">Наборы для супа</a>
              </li>
            </ul>
          </div>
          <div class="main__catalog-banner">
            <h4>Попробуйте новые вкусы японсокй кухни</h4>
            <button>Посмотреть сейчас</button>
          </div>
        </div>
      </div>
    </div>
    <div class="menu__bottom-wrapper" id="menu__bottom-wrapper">
      <nav class="menu__bottom-navigation">
        <menu class="menu__bottom">
          <ul class="menu__bottom-list">
            <li class="active">
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                    stroke="#000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9 22V12H15V22"
                    stroke="#000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Главная</p>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21"
                    stroke="#0E0E11"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="#0E0E11"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="#0E0E11"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Каталог</p>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z"
                    stroke="#000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Избранное</p>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
                    stroke="#000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                    stroke="#000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Вход</p>
              </a>
            </li>
            <li class="card">
              <span class="count">12</span>
              <a href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z"
                    stroke="#000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z"
                    stroke="#000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6"
                    stroke="#000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Корзина</p>
              </a>
            </li>
          </ul>
        </menu>
      </nav>
    </div>
    `;
}
