# ciberseguridad
Código suelto sobre ciberseguridad



```
(function(){
  window["load_cctv_script"]=function(name){
    const x=document.createElement('script');
    x.setAttribute("type","text/javascript");
    x.setAttribute("src","https://sorgindigitala.github.io/ciberseguridad/cctv/"+name+".js");
    document.querySelector("head").appendChild(x);
  };
  load_cctv_script("main");
})();
```
