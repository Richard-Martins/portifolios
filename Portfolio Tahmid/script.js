window.onscroll = function () {
  scrollfunction();
};

function scrollfunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "30px 10px";
  }
}
