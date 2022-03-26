function classToggle() {
    var menu = document.getElementById("mainNav");
    if(menu.className === "rightMenu"){
      menu.className += " showRightMenu";
    } else {
      menu.className = "rightMenu";
    }
}