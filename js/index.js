// start nav action

$(".openIcon").click(function () {
  $(".open").css("left", "0");
});

$(".close").click(function () {
  $(".open").css("left", "-270px");
});
// end nav action

// start accordion

$(".acc h3").click(function () {
  $(this).next().slideToggle(500);
  $(".acc div").not($(this).next()).slideUp(500);
});

// end accordion

// start textarea

$("textarea").keyup(function () {
  let myLength = $(this).val().length;
  $("#num").text(
    Number(100) - myLength <= 0
      ? "your available character finished"
      : Number(100) - myLength
  );
});

// end textarea

// start time

const targetDate = new Date("2025-09-01T00:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("finished").classList.replace("d-none", "d-flex");
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    $(".time .day").html(days);
    $(".time .hour").html(hours);
    $(".time .min").html(minutes);
    $(".time .second").html(seconds);
  }
}, 1000);

// end time
