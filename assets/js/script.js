function classToggle() {
    var menu = document.getElementById("mainNav");
    if(menu.className === "rightMenu"){
      menu.className += " showRightMenu";
    } else {
      menu.className = "rightMenu";
    }
}

const nodeList = document.querySelectorAll(".circle");
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].style.strokeDasharray = "0 100";
}


var element = document.getElementById('circle-wrap');
var elementHeight = element.clientHeight;

document.addEventListener('scroll', animate);

function inView() {
  var windowHeight = window.innerHeight;
  var scrollY = window.scrollY || window.pageYOffset;
  
  var scrollPosition = scrollY + windowHeight;
  var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
  
  if (scrollPosition > elementPosition) {
    return true;
  }
  
  return false;
}

function animate() {
    if (inView()) {
        setTimeout(function() {
            element.classList.add('animate');
            for (let i = 0; i < nodeList.length; i++) {
                nodeList[i].style.strokeDasharray = "";
            }
        }, 100);
    }
}
