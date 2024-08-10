let constraint = 20;
let mouseOverContainer = document.getElementById("container");
let model = document.getElementById("model");
let head = document.getElementById("head");

function bodyTransforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constraint*0.25;
  let calcY = (x - box.x - (box.width / 2)) / constraint*0.5;
  
  return "perspective(100px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

function headTransforms(x, y, el) {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constraint*1.05;
  let calcY = (x - box.x - (box.width / 2)) / constraint*1.75;
  
  return "perspective(100px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 function transformBody(el, xyEl) {
  el.style.transform  = bodyTransforms.apply(null, xyEl);
}

function transformHead(el, xyEl) {
  el.style.transform  = headTransforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = function(e) {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([model]);

  window.requestAnimationFrame(function(){
    transformBody(model, position);
    transformHead(head, position);
  });
};