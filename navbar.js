window.onscroll = function() {
  var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
  if (scrollTop >= document.getElementById("d").offsetTop-55) {
    document.getElementById("nav").classList.add("navbar-fixed-top");
    document.getElementById("nav").classList.add("col-sm-10");
    document.getElementById("nav").classList.add("col-sm-offset-1");
    document.getElementById("d").style.marginTop = "50px";
    document.getElementById("nav").style.paddingLeft = "-15px";
  } else {
    document.getElementById("nav").classList.remove("navbar-fixed-top");
    document.getElementById("d").style.marginTop = "0px";
    document.getElementById("nav").classList.remove("col-sm-10");
    document.getElementById("nav").classList.remove("col-sm-offset-1");
    document.getElementById("nav").style.paddingLeft = "0";
  }
}