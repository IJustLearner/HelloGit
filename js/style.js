if(navigator.platform.indexOf('Win32')!==-1){ 

		//pc
		var fileref = document.createElement('link');
        fileref.setAttribute("rel","stylesheet");
        fileref.setAttribute("type","text/css");
        fileref.setAttribute("href","css/main.css");
     }else{ 
		//wap
		var fileref = document.createElement('link');
        fileref.setAttribute("rel","stylesheet");
        fileref.setAttribute("type","text/css");
        fileref.setAttribute("href","css/wap.css");
      } 
	 if(typeof fileref !== "undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
