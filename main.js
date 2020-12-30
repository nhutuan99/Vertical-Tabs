document.addEventListener("DOMContentLoaded",function(){

    function Class(name){
        return document.getElementsByClassName(name);
      }
      
      let tabPanes = Class("tab-header")[0].getElementsByTagName("div");
      
      for(let i=0; i<tabPanes.length; i++){
        tabPanes[i].addEventListener("click",function(){
          Class("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
          tabPanes[i].classList.add("active");
          
          Class("tab-indicator")[0].style.top = `calc(80px + ${i*50}px)`;
          
          Class("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
          Class("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
          
        });
      }

},false);