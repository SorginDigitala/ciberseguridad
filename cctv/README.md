
```
(function(){
  window["load_cctv_script"]=function(name){
    const x=document.createElement('script');
    x.setAttribute("type","text/javascript");
    x.setAttribute("src","https://127.0.0.1/cctv/"+name+".js");
    document.querySelector("head").appendChild(x);
  };
  load_cctv_script("main");
})();
```


![aoeu](img/img.png)
