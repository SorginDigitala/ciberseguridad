class CCTV{
	static load(){
		const x=[
			[
				"defeway",
				location.port==="60001" && typeof window.login_chk==="function"
			],
			[
				"hi3516",
				location.port==="" && (document.title==="NETSurveillance WEB" || location.pathname==="/Login.htm" && typeof Slider==="function")
			],
			[
				//	las panasonic son varias, con diferentes puertos y plataformas. debería diferenciarlas.
				"panasonic",
				document.title.startsWith("WV-SF")
			]
		].find(e=>e[1])
		if(x)
			load_cctv_script("platforms/"+x[0])
	}

	static load_menu(platform,credentials){
		(document.body || document.querySelector("html")).innerHTML+=`
		<details id=cctv_box>
			<summary>Seyatube</summary>
			<details open>
				<summary>Info</summary>
				<div>
					<p>Platform: `+platform+`</p>
					<p>Default credentials: `+credentials+`</p>
				<div>
				<div id=cctv_vuln><div>
			</details>
			<details>
				<summary>Config</summary>
			</details>
			<style>
			body{padding-top:30px}
			summary{
				line-height:20px;
				height:20px;
				text-align:center;
				list-style:none;
				cursor:pointer;
				background:#eee;
				border-top:1px solid #ccc;
				user-select:none
			}
			details>div{padding:10px}
			#cctv_box{
				position:absolute;
				top:0;
				left:0;
				width:100%;
				min-height:20px;
				z-index=99999;
				background:#fff;
			}
			#cctv_box>summary{
				line-height:30px;
				height:30px;
			}
			#cctv_box *{color:#000}
			</style>
		</details>
		`;
	}
}

if(document.readyState==="complete")
	CCTV.load()
else
	window.onload=CCTV.load