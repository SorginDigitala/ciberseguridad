/*

FIX para WV-SF438:
top.frmRight=document.querySelector("[name=frmRight]");
document.querySelector("[name=frmLeft]").contentWindow.goURL=e=>{top.frmRight.src=e}

*/
class cctv{
	static load(){
		//cctv.load_menu()
		// como no puedo insertar codigo en el html:
		alert("Platform:\tPanasonicHD\nDefault:\tadmin@12345\n\nScripts:\n\nAdmin Panel:\n/admin/index.html")
	}

	static load_menu(){
		CCTV.load_menu("Panasonic (SF135)",["admin@12345"])
		document.querySelector("#cctv_vuln").innerHTML+="<p><a href='/admin/index.html'>Admin Panel</a>.</p>"
	}
}
cctv.load()