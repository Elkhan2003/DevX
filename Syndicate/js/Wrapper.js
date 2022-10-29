const header = document.querySelector("#header");
header.innerHTML = `
      <header class="header">
				<div class="conteiner">
					<div class="header__body">
						<a href="#" class="header__logo">
							<img src="./Syndicate/img/man-gif.gif" alt="Elcho" />
						</a>
						<div class="header__burger">
							<span></span>
						</div>
						<nav class="header__menu">
							<ul class="header__list">
								<li class="header__animation">
									<a href="index.html" class="wave-btn active">
										<span class="wave-btn__text">Главная</span>
										<span class="wave-btn__waves"></span>
									</a>
								</li>
								<li class="header__animation">
									<a href="about.html" class="wave-btn">
										<span class="wave-btn__text">О центре</span>
										<span class="wave-btn__waves"></span>
									</a>
								</li>
								<li class="header__animation">
									<a href="courses.html" class="wave-btn">
										<span class="wave-btn__text">Курсы</span>
										<span class="wave-btn__waves"></span>
									</a>
								</li>
								<li class="header__animation">
									<a href="teachers.html" class="wave-btn">
										<span class="wave-btn__text">Преподы</span>
										<span class="wave-btn__waves"></span>
									</a>
								</li>
								<li class="header__animation">
									<a href="news.html" class="wave-btn">
										<span class="wave-btn__text">Новости</span>
										<span class="wave-btn__waves"></span>
									</a>
								</li>
								<li class="header__animation">
									<a href="contacts.html" class="wave-btn">
										<span class="wave-btn__text">Контакты</span>
										<span class="wave-btn__waves"></span>
									</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
`;

const footer = document.querySelector("#footer");
footer.innerHTML = `
<footer class="footer">
<div class="conteiner">
  <div class="footer__body">
    <nav>
      <ul class="footer__list">
        <li>
          <a href="./index.html" class="footer__link">Главная</a>
        </li>
        <li>
          <a href="./about.html" class="footer__link">О центре</a>
        </li>
        <li>
          <a href="./courses.html" class="footer__link">Курсы</a>
        </li>
        <li>
          <a href="./teachers.html" class="footer__link"
            >Преподаватели</a
          >
        </li>
        <li>
          <a href="./news.html" class="footer__link">Новости</a>
        </li>
        <li>
          <a href="./contacts.html" class="footer__link">Контакты</a>
        </li>
      </ul>
    </nav>

    <!-- ! footer__list__icon -->
    <div>
      <div class="footer__list__icon">
        <div class="footer__link__icon">
          <a href="https://vk.com/elcho_effects" target="_ blank">
            <i class="fa-brands fa-vk"></i>
          </a>
        </div>
        <div class="footer__link__icon">
          <a href="https://t.me/Elcho_Effects/" target="_ blank">
            <i class="fa-brands fa-telegram"></i>
          </a>
        </div>
        <div class="footer__link__icon">
          <a
            href="https://www.instagram.com/elcho911/"
            target="_ blank">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- ! footer__title -->
  <div class="footer__title">
    <div class="footer__title__1">
      <p>
        Иностранные языки — английский, французский. <br />
        Frontend разработка.<br />
        Русский язык, обществознание, математика, подготовка к школе,
        коррекция речи. <br />
        Групповые и индивидуальные занятия для детей и взрослых. <br />
      </p>
    </div>

    <div class="footer__title__2">
      <p>
        Наш адрес: <br />
        Кыргызстан <br />
        г. Каракол <br />
        ул. ​Гебзе 118 <br />
      </p>
    </div>
  </div>

  <!-- ! footer__info -->
  <div class="footer__info">
    <div class="footer__license">
      <p>
        УЧЕБНЫЙ ЦЕНТР ДОПОЛНИТЕЛЬНОГО ОБРАЗОВАНИЯ «DevX» © 2022 By Elcho
      </p>
    </div>

    <div class="footer__call">
      <li>
        <span>Тел: </span
        ><a href="tel:+996990385056" class="menu__link"
          >+996990385056</a
        >
      </li>
    </div>
  </div>
</div>
</footer>
`;

let languageOptions = document.querySelectorAll(".language-option");

languageOptions.forEach(function (element, index) {
	element.addEventListener("click", switchLanguage);
});

function switchLanguage(event) {
	let targetElement = event.target;

	languageOptions.forEach(function (element, index) {
		element.classList.remove("active");
	});

	targetElement.classList.add("active");
}
