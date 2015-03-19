var rotated = false;

deg = rotated ? 0 : 180;
  
this.style.webkitTransform = 'rotate('+deg+'deg)'; 
this.style.mozTransform    = 'rotate('+deg+'deg)'; 
this.style.msTransform     = 'rotate('+deg+'deg)'; 
this.style.oTransform      = 'rotate('+deg+'deg)'; 
this.style.transform       = 'rotate('+deg+'deg)'; 

rotated = !rotated;
