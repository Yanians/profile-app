
export default class Main{

    	static renderMain(html, component){
    		 return component.innerHTML = html;
    	}
    	
    	static renderFooter(html, component){
          return component.innerHTML += html;
    	}

       static mainId(){
        const id = "main";
       	return document.getElementById(id);
       }

       static footerId(){
        const id = "footer";
        return document.getElementById(id);
       }

      static mainNavId(){
        const id = "mainNav";
        return document.getElementById(id);
      }

       static profileId(){
        const id = "profile";
       	return document.getElementById(id);
     }

     static companyId(){
        const id = "company";
        return document.getElementById(id);
     }

     static educationId(){
        const id = "education";
        return document.getElementById(id);
     }

      static experienceId(){
        const id = "experience";
        return document.getElementById(id);
     }

     static carouselId(){
        const id = "carousel";
        return document.getElementById(id);
     }
}

