
import Main from '../environment/Main.js'
import dataContent from '../environment/dataContent.js'
import invoker from '../environment/invoker.js'
import Component from '../environment/component.js'
export default class htmlContent extends Main{

 static profile(){

                     var r = dataContent.profileData;
                     let count = 0;
                     let htmlform = ``;
                        for(let i = (r.length-1);i>=0;i--){

                         if(count++ === r[i].bio)

                      break;
                         
         htmlform += ` <h3 class="white-text text-h3">PROFILE</h3>
                  <ul class="center white lighten-5 border-effectDiv hoverable">
                     
                               <li class="row border-effectDiv">
                                 <div class="title col s12 m6 l6 text-modify"><h5>Name</h5>${r[i].bio.full_name}</div>
                                 <div class="title col s12 m6 l6 text-modify"><h5>Age</h5>${r[i].bio.age}</div>
                              </li>
                         
                             <li class="row border-effectDiv">
                               <div class="title col s12 m6 l6 text-modify"><h5>Status</h5>${r[i].bio.status}</div>
                               <div class="title col s12 m6 l6 text-modify"><h5>Height</h5>${r[i].bio.height}</div>
                             </li>  

                             <li class="row border-effectDiv">
                               <div class="title col s12 m6 l6 text-modify"><h5>Contact</h5>${r[i].bio.contact}</div>
                               <div class="title col s12 m6 l6 text-modify"><h5>Birt</h5>${r[i].bio.year_birth}</div>
                             </li>  

                              <li class="row border-effectDiv">
                               <div class="title col s12 m12 l6 text-modify"><h5>Address</h5>${r[i].bio.present_address}</div>
                               <div class="title col s12 m12 l6 text-modify"><h5>Email</h5>${r[i].bio.email}</div>
                              </li>

                           <li class="row border-effectDiv"> 
                               <div class="title col s12 s6 m12 l6 text-modify"><h5>Place of Birth</h5>${r[i].bio.place_of_birth}</div>
                               <div class="title col s12 vs6 m12 l6 text-modify"><h5>Provincial</h5>${r[i].bio.provincial_Address}</div>
                          </li>
                        </ul>
                      `;
                     }
                       Main.renderMain(`${htmlform}`,Main.profileId());
     }

static education(){
     var r = dataContent.profileData;
     let count = 0;
     let html = ``;
    for(let i = (r.length-1);i>=0;i--){

         if(count++ === r[i].education)

          break;
                         
         html += ` 
                       <h3 class="white-text text-h3">EDUCATION</h3>
                  <ul class="center white lighten-5 border-effectDiv hoverable">
                            <li class="row border-effectDiv">
                               <h4 class="white-text text-h34">College</h4>
                                 <div class="title col s12 m6 l6"><h5>School</h5>${r[i].education.college.schlName}</div>
                                 <div class="title col s12 m6 l6"><h5>Address</h5>${r[i].education.college.schlAddress}</div>
                                 <div class="title col s12 m6 l6"><h5>Graduated</h5>${r[i].education.college.yrGraduated}</div>
                                 <div class="title col s12 m6 l6"><h5>Course</h5>${r[i].education.college.course}</div>
                              </li>

                              <li class="row border-effectDiv">
                               <h4 class="white-text text-h34">Vocational</h4>
                                 <div class="title col s12 m6 l6"><h5>School</h5>${r[i].education.vocational.schlName}</div>
                                 <div class="title col s12 m6 l6"><h5>Address</h5>${r[i].education.vocational.schlAddress}</div>
                                 <div class="title col s12 m6 l6"><h5>Graduated</h5>${r[i].education.vocational.yrGraduated}</div>
                                 <div class="title col s12 m6 l6"><h5>Course</h5>${r[i].education.vocational.course}</div>
                              </li>
                         
                              <li class="row border-effectDiv">
                               <h4 class="white-text text-h34">High School</h4>
                                 <div class="title col s12 m6 l6"><h5>School</h5>${r[i].education.highSchool.schlName}</div>
                                 <div class="title col s12 m6 l6"><h5>Address</h5>${r[i].education.highSchool.schlAddress}</div>
                                 <div class="title col s12 m6 l6"><h5>Graduated</h5>${r[i].education.highSchool.yrGraduated}</div>
                              </li>

                              <li class="row border-effectDiv">
                               <h4 class="white-text text-h34">Elementary</h4>
                                 <div class="title col s12 m6 l6"><h5>School</h5>${r[i].education.elementary.schlName}</div>
                                 <div class="title col s12 m6 l6"><h5>Address</h5>${r[i].education.elementary.schlAddress}</div>
                                 <div class="title col s12 m6 l6"><h5>Graduated</h5>${r[i].education.elementary.yrGraduated}</div>
                              </li>
                        </ul>
                      
                      `;
                 }
                         
          Main.renderMain(`${html}`,Main.educationId());
     }     

static company(){
     var r = dataContent.profileData;
     let count = 0;
     let html = ``;
    for(let i = (r.length-1);i>=0;i--){

         if(count++ === r[i].company.esscor)

          break;
                         
        html += ` 
                       <h3 class="white-text text-h3">COMPANY</h3>
                  <ul class="center white lighten-5 border-effectDiv hoverable">
                    
                            <li class="row border-effectDiv">
                               <h4 class="white-text text-h34">ESSCOR</h4>
                                 <div class="title col s12 m6 l6 text-modify"><h5>Name</h5>${r[i].company.esscor.name}</div>
                                 <div class="title col s12 m6 l6 text-modify"><h5>Address</h5>${r[i].company.esscor.address}</div>
                                 <div class="title col s12 m6 l6 text-modify"><h5>Position</h5>${r[i].company.esscor.position}</div>
                                  <div class="title col s12 m6 l6 text-modify"><h5>Year</h5>${r[i].company.esscor.year}</div>
                              </li>
                         
                               <li class="row border-effectDiv">
                               <h4 class="white-text text-h34">DALTANS</h4>
                                 <div class="title col s12 m6 l6 text-modify"><h5>Name</h5>${r[i].company.daltans.name}</div>
                                 <div class="title col s12 m6 l6 text-modify"><h5>Address</h5>${r[i].company.daltans.address}</div>
                                 <div class="title col s12 m6 l6 text-modify"><h5>Position</h5>${r[i].company.daltans.position}</div>
                                  <div class="title col s12 m6 l6 text-modify"><h5>Year</h5>${r[i].company.daltans.year}</div>
                              </li>
                        </ul>
                      
                      `;
                 }
                          
          Main.renderMain(`${html}`,Main.companyId());
     }

static experience(){
     var r = dataContent.profileData;
     let count = 0;
     let html = ``;
    for(let i = (r.length-1);i>=0;i--){

         if(count++ === r[i].experience)

          break;
                         
        html += ` 
                       
               <h3 class="white-text text-h3">EXPERIENCE</h3>
                  <ul class="collection">
                            <li class="collection-item avatar">
                               <div class="row border-effectDiv">
                                     <div class="col s6 m8 l8">
                                     <h4 class="white-text text-h3 center">Line of Duties</h4>
                                     </div>

                                     <div class="col s6 m4 l4">&nbsp;
                                          <button id="flow-toggle" style="margin-right:2%" class="btn waves-effect waves-light z-depth-5" name="action">PROOF
                                                 <i class="material-icons right">send</i>
                                          </button>
                                     </div>
                                 </div>
                            </li>
                              
                               <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.one}</span>
                               </li>
                      

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.two}</span>
                               </li>

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.three}</span>
                               </li>

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.four}</span>
                               </li>

                               
                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.five}</span>
                               </li>
                                
                               <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.six}</span>
                               </li>
                      

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.seven}</span>
                               </li>

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.eight}</span>
                               </li>

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.nine}</span>
                               </li>

                               
                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.ten}</span>
                               </li>
                               
                               <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.eleven}</span>
                               </li>
                      

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.twelve}</span>
                               </li>

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.thirteen}</span>
                               </li>

                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.fourteen}</span>
                               </li>

                               
                              <li class="collection-item avatar">
                                   <i class="material-icons">navigate_next</i>
                                   <span class="title">${r[i].experience.fifteen}</span>
                               </li>
                        </ul>
                      
                      `;
                 }
                                   
          Main.renderMain(`${html}`,Main.experienceId());
           document.getElementById('flow-toggle').addEventListener('click', function(){
                                  htmlContent.carousel();
                                  invoker.showCarousel();
                 
               });
     }

static carousel(){
	dataContent.dataArray();
	let count = 0;
	let r = dataContent.profileData;
    let html = `<div class="carousel center"><span id="gobackToExperience" class="new badge red"><i class="material-icons">arrow_forward</i></span>`;
	                 
	                 for(var i = (r.length-1); i>=0;i--){
                            if(count++ === r[i].carouselIMG)
                            	break        ;
                html+=`
					    <a id="img1" class="carousel-item" href="#one!"><img class=""id="mod-img" src="${r[i].carouselIMG.imgProf1.image}"></a>
					    <a class="carousel-item" href="#two!"><img id="mod-img" src="${r[i].carouselIMG.imgProf2.image}"></a>
					    <a class="carousel-item" href="#three!"><img id="mod-img" src="${r[i].carouselIMG.imgProf3.image}"></a>
					    <a class="carousel-item" href="#four!"><img id="mod-img" src="${r[i].carouselIMG.imgProf4.image}"></a>
					    <a class="carousel-item" href="#five!"><img id="mod-img" src="${r[i].carouselIMG.imgProf5.image}"></a>
					    <a class="carousel-item" href="#six!"><img id="mod-img" src="${r[i].carouselIMG.imgProf6.image}"></a>
					    <a class="carousel-item" href="#seven!"><img id="mod-img" src="${r[i].carouselIMG.imgProf7.image}"></a>
					    <a class="carousel-item" href="#eight!"><img id="mod-img" src="${r[i].carouselIMG.imgProf8.image}"></a>
					    <a class="carousel-item" href="#nine!"><img id="mod-img" src="${r[i].carouselIMG.imgProf9.image}"></a>
					    <a class="carousel-item" href="#ten!"><img id="mod-img" src="${r[i].carouselIMG.imgProf10.image}"></a>
					    <a class="carousel-item" href="#eleven!"><img id="mod-img" src="${r[i].carouselIMG.imgProf11.image}"></a>
                     `;   
	}
		html+=`</div>`;
		              for(var i = (r.length-1); i>=0;i--){
                            if(count++ === r[i].carouselIMG)
                            	break;
		             
		html+=`
		    <div id="img1show"><img id="imgScale" class="materialboxed" src="${r[i].carouselIMG.imgProf1.image}"></div>
		    `;
	}
	                $b(document).ready(function(){
	                	 $b('#img1show').hide();
	                	 $b('#img1').click(function(){
	                	 	 $b('#img1show').show();
	                	 	 $b('#img1show').click(function(){
	                	 	 		 $b('#img1show').hide();
	                	 	 	})
	                	 	 })
	                	 })
		html+=`<div style="margin-left:40%" class="preloader-wrapper medium active">

				      <div class="spinner-layer spinner-red">

					        <div class="circle-clipper left">
					          <div class="circle"></div>
					        </div>

					        <div class="gap-patch">
					          <div class="circle"></div>
					        </div>

					        <div class=" circle-clipper right">
					          <div class="circle"></div>
					        </div>

				      </div>

				       <div class="spinner-layer spinner-blue">

					        <div class="circle-clipper left">
					          <div class="circle"></div>
					        </div>

					        <div class="gap-patch">
					          <div class="circle"></div>
					        </div>

					        <div class=" circle-clipper right">
					          <div class="circle"></div>
					        </div>

				      </div>

				       <div class="spinner-layer spinner-yellow">

					        <div class="circle-clipper left">
					          <div class="circle"></div>
					        </div>

					        <div class="gap-patch">
					          <div class="circle"></div>
					        </div>

					        <div class=" circle-clipper right">
					          <div class="circle"></div>
					        </div>

				      </div>

				       <div class="spinner-layer spinner-green">

					        <div class="circle-clipper left">
					          <div class="circle"></div>
					        </div>

					        <div class="gap-patch">
					          <div class="circle"></div>
					        </div>

					        <div class=" circle-clipper right">
					          <div class="circle"></div>
					        </div>

				      </div>
              </div>`;
            Main.renderMain(`${html}`,Main.carouselId());
            invoker.showCarousel();
	        document.getElementById('gobackToExperience').addEventListener('click', function(){
	        	invoker.showExperience();

	        });
  }

}