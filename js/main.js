//Filter JS
// Цей JavaScript код виконує фільтрацію елементів
//  відповідно до їхніх класів, коли користувач клікає на елемент
//  з класом .filter-item.
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post-box").show("1000");
    } else {
      // Цей рядок коду приховує всі елементи з класом .post-box,
      //  які не мають класу, збереженого в змінній value,
      //  з анімацією тривалістю 1000 мілісекунд.

      // У цьому прикладі всі .post-box елементи, крім тих,
      // які мають мають value (зі своїм значеням), отримають значення hide.
      $(".post-box")
        .not("." + value)
        .hide("2000");
      // Цей рядок коду показує всі елементи з класом .post-box, які мають клас,
      // збережений в змінній value,
      // з анімацією тривалістю 1000 мілісекунд.
      $(".post-box")
        .filter("." + value)
        .show("2000");
      //   У цьому прикладі залишаться тільки ті .post-box елементи,
      //    які мають відпвідне value (зі своїм значеням), і їм буде застосовано червоний колір тексту.
    }
  });

  //Add active to btn

  //siblings():
  // Цей метод вибирає всіх сусідніх елементів
  // (тобто всі елементи на одному рівні вкладеності)
  // відносно поточного елемента.
  $(".filter-item").on("click", function () {
    $(this).addClass("active-filter").siblings().removeClass("active-filter");
  });
});

//Header Background on scroll
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("shadow", window.scrollY > 0);
});

