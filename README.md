# C.CT - твое творческое состязание
<p>Приложение с конкурсами, которое так и осталось недописанным...</p>

<h3>Сайт - <a href="https://sonia13marker.github.io/creative.ct">Creative.ct</a></h3>

<h3>Дизайн - <a href="https://www.figma.com/file/pljzt9VUZfD7SilRXy2ZIO/%D0%B4%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD-C.CT?type=design&node-id=0%3A1&mode=design&t=ntNB2HF4JlXikWOB-1">C.CT design</a></h3>

## Идея
Суть приложения заключалась в том, чтобы сами выпускники Яндекс Интенсивов смогли голосовать за проекты команд и выделять победителей среди своего или других из представленных направлений. Направления было два - фронтенд разработка на React и бэкенд разработка на Django. По окончании периода голосования победители объявлялись автоматически на основании голосов, отданными другими участниками и отображались бы на соответствующей странице.
Пунктами ТЗ было - показать таймер, который отсчитывал бы время до окончания определенного этапа конкурса; менять этапы в зависимости от времени проведения; выделить карточки победителей.

## Стек
React, CSS (react-css-modules), react-router-dom , react-countdown, react-modal, react-responsive.
Деплой на gh-pages.

## Итоги
За время разработки проекта были реализованы: условный рендеринг компонентов конкурсов (выбор по этапу проведения), знакомство с переиспользуемыми компонентами, интересные эффекты при наведении, была сделана кастомная кнопка загрузки изображений, адаптивная верстка, подгрузка карточек конкурса (по 4 штуки при нажатии на кнопку).

-----------

Картинки сайта и краткое описание:
<details>
  <summary>Главная</summary>
Содержит в себе шапку с навигацией по странице, основные кнопки действия (войти и продолжить) и бегущую строку.

![image](https://github.com/sonia13marker/creative.ct/assets/111881249/3d59e63f-9688-49bc-8646-355ce52d500a)

Все элементы имеют привлекательные эффекты при наведении: 
![image](https://github.com/sonia13marker/creative.ct/assets/111881249/73fa6602-c502-4420-83d5-a1f5a829e176)
![image](https://github.com/sonia13marker/creative.ct/assets/111881249/d34454f8-c905-48d6-a991-ad0cd66fe6b3)
![image](https://github.com/sonia13marker/creative.ct/assets/111881249/b87f8b09-188f-4034-9643-6b209aec96f5)


В мобильной версии была реализована менюшка:

![image](https://github.com/sonia13marker/creative.ct/assets/111881249/0628f434-9d82-4693-b9f6-b643466a7005)
![image](https://github.com/sonia13marker/creative.ct/assets/111881249/b076f433-1177-4f05-9cea-eb558f8781be)

</details>
<details>
<summary>Правила</summary>
Правила сайта. Дизайнерская задумка - упор на цвет и начертание шрифта.

![image](https://github.com/sonia13marker/creative.ct/assets/111881249/d09286e5-9a72-4f1d-a53f-224425d1b750)
![image](https://github.com/sonia13marker/creative.ct/assets/111881249/9bb601b5-dee3-4b1f-8d76-774b35bad218)

Мобильная адаптация также присутствует: 

![image](https://github.com/sonia13marker/creative.ct/assets/111881249/6792a559-3d8f-4ced-926b-a4d590b1ec6f)
</details>

<details>
<summary>Конкурсы и этапы</summary>
На данной странице отображаются года, в которых проводились (предполагаемо) конкурсы, и также все этапы. Отображено два года, текущий имеет желтый фон. При раскрытии мы можем видеть все четыре этапа проведения конкурса, а именно: подача заявок, ожидание голосования, само голосование и отображение итогов. Предполагалось, что одновременно будут показываться только два этапа (один на фронт, другой на бэк). 

![image](https://github.com/sonia13marker/creative.ct/assets/111881249/44cb8860-2e70-45be-b132-55932769fef7)
![image](https://github.com/sonia13marker/creative.ct/assets/111881249/497d97d0-b77f-4acd-b1e1-91e51046a05b)

<summary>Этап конкурса 1 - подача заявок</summary>
Вся страница выглядит следующим образом:

![image](https://github.com/sonia13marker/creative.ct/assets/111881249/f2d46c97-59f1-4323-9af1-c077996eac1f)
На ней изображено самое главное - таймер, который показывал, сколько осталось до окончания этапа, а также форма, заполнив которую можно было попасть на конкурс. 

Кнопка "Подать" при наведении имеет крутой эффект: 

![image](https://github.com/sonia13marker/creative.ct/assets/111881249/4e6ca8cb-b7a3-4e14-afee-633306442551)

<summary>Этап конкурса 2 - ожидание голосования</summary>
Вот такой дизайн был у этой страницы: 

![image](https://github.com/sonia13marker/creative.ct/assets/111881249/79d4ff02-1f19-427c-ab5c-09fb9d7aa823)


<summary>Этап конкурса 3 - голосование</summary>
На данной странице также находился таймер, а также название этапа, год и направление. Ну и основной составляющей были карточки проектов, которые содержали освновную информацию и кнопку голосования. 

![image](https://github.com/sonia13marker/creative.ct/assets/111881249/de8d72d6-b41f-493e-b5ac-5c2e45319a6a)
![image](https://github.com/sonia13marker/creative.ct/assets/111881249/2fa36b0f-29c9-4057-85d3-2f4d62e40371)

При нажатии на кнопку карточки подгружались бы с сервера: 
![image](https://github.com/sonia13marker/creative.ct/assets/111881249/786a9abd-276d-420b-b155-4aa8b48575ab)

При голосовании вылезло бы вот такое окно: 

![image](https://github.com/sonia13marker/creative.ct/assets/111881249/8a2b3e2a-bf92-4f4e-857a-fb877343e4e2)


<summary>Этап конкурса 4 - итоги</summary>
На этой странице были победители. Первое место занимало всю ширину страницы и верхний строку, а второе и третье места делили вторую строку напополам. 

![image](https://github.com/sonia13marker/creative.ct/assets/111881249/67381602-dffe-47c3-a81a-0ae44c53267d)
![image](https://github.com/sonia13marker/creative.ct/assets/111881249/3912872e-b779-470a-a6f3-8cdf8e9d6aab)
</details>

<details>
<summary>О проекте</summary>
Страница, на которой размещалась бы краткая информация о разработчиках и истории проекта.

![image](https://github.com/sonia13marker/creative.ct/assets/111881249/7b20f38d-3bc9-44ad-b10f-29b8515676e2)
</details>
