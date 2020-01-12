/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./environment/component.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./environment/Main.js":
/*!*****************************!*\
  !*** ./environment/Main.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });

class Main{

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



/***/ }),

/***/ "./environment/component.js":
/*!**********************************!*\
  !*** ./environment/component.js ***!
  \**********************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _environment_dataContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environment/dataContent.js */ "./environment/dataContent.js");
/* harmony import */ var _environment_htmlContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environment/htmlContent.js */ "./environment/htmlContent.js");
/* harmony import */ var _environment_Main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environment/Main.js */ "./environment/Main.js");
/* harmony import */ var _environment_invoker_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment/invoker.js */ "./environment/invoker.js");






class Component extends _environment_Main_js__WEBPACK_IMPORTED_MODULE_2__["default"] {              

 landingPage(){ 
  _environment_dataContent_js__WEBPACK_IMPORTED_MODULE_0__["default"].dataArray();
        let html = ` <!-- this is the play area -->
              &nbsp; 
                    <div style="margin-left:2%;margin-right:2%" class="row border-effectDiv">
                         <div class="col s12 m4 l4 border-effectDiv">
                       
                                <ul>
                                  <li class="center">
                                     <div id="mainNav"></div>
                                  </li>
                                     <li class="center">
                                         <div class="fixed-action-left-btn">
                                                <a class="btn-floating btn-small red">
                                                  <i class="material-icons pulse">menu</i>
                                                </a>
                                                <ul>   
                                                  <li><a href="#" id="showEd"   class="btn-floating btn-small green pulse"><i class="material-icons">account_balance</i></a></li>
                                                  <li><a href="#" id="showComp" class="btn-floating btn-small yellow darken-1 pulse"><i class="material-icons">style</i></a></li>
                                                  <li><a href="#" id="showProf" class="btn-floating btn-small red pulse"><i class="material-icons ">fingerprint</i></a></li>
                                                  <li><a href="#" id="showEx" class="btn-floating btn-small blue pulse"><i class="material-icons pulse">compare</i></a></li>
                                                </ul>
                                         </div>
                                       </li>
                                </ul> 
                         </div>

                           <div class="col s12 m8 l8 border-effectDiv">
                              <div id="profile"></div>
                              <div id="education"></div>
                              <div id="company"></div>
                              <div id="experience"></div>
                              <div id="carousel"></div>
                           </div>   
                    </div>`;

    let htmlFooter = `<div class="row">
                        <div class="col s12 m4 l4"></div>
                          <div class="col s12 m8 l8">     
                    <footer>
                        <ul class="center pagination-footer">
                          <li class="active waves-effect red"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                          <li class="active waves-effect red"><a href="#!">1</a></li>
                          <li class="active waves-effect red"><a href="#!">2</a></li>
                          <li class="active waves-effect red"><a href="#!">3</a></li>
                          <li class="active waves-effect red"><a href="#!">4</a></li>
                          <li class="active waves-effect red"><a href="#!">5</a></li>
                          <li class="active waves-effect red"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
                      </ul>
                    </footer>
                   </div>
                 </div>   
                    `;
        _environment_Main_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderMain(`${html}`,_environment_Main_js__WEBPACK_IMPORTED_MODULE_2__["default"].mainId());
        _environment_Main_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderFooter(`${htmlFooter}`,_environment_Main_js__WEBPACK_IMPORTED_MODULE_2__["default"].footerId());
       component.mainNavigation();
       _environment_htmlContent_js__WEBPACK_IMPORTED_MODULE_1__["default"].profile();
        document.getElementById('showComp').addEventListener('click', function(){
                                  _environment_htmlContent_js__WEBPACK_IMPORTED_MODULE_1__["default"].company();
                                  _environment_invoker_js__WEBPACK_IMPORTED_MODULE_3__["default"].showCompany();
                         });
        document.getElementById('showProf').addEventListener('click', function(){
                                  _environment_htmlContent_js__WEBPACK_IMPORTED_MODULE_1__["default"].profile();
                                  _environment_invoker_js__WEBPACK_IMPORTED_MODULE_3__["default"].showProfile();
                         });
        document.getElementById('showEd').addEventListener('click', function(){
                                  _environment_htmlContent_js__WEBPACK_IMPORTED_MODULE_1__["default"].education();
                                  _environment_invoker_js__WEBPACK_IMPORTED_MODULE_3__["default"].showEducation();
                         });
        document.getElementById('showEx').addEventListener('click', function(){
                                  _environment_htmlContent_js__WEBPACK_IMPORTED_MODULE_1__["default"].experience();
                                  _environment_invoker_js__WEBPACK_IMPORTED_MODULE_3__["default"].showExperience();
               });
}

  mainNavigation(){
                         let html = `
                                      <ul>
                                       <li class="center">
                                        `; 
                                               let r = _environment_dataContent_js__WEBPACK_IMPORTED_MODULE_0__["default"].profileData;

                                               let count = 0;

                                                         for(var i = (r.length-1);i>=0;i--){
                                                              if(count++ === r[i].proImage)
                                                                break;     
                                                     html +=`
                                                      <img class="resize-image" src="${r[i].proImage.image}"/>
                                                      </li>`;
        }
             _environment_Main_js__WEBPACK_IMPORTED_MODULE_2__["default"].renderMain(`${html}`,document.getElementById('mainNav'));
             _environment_invoker_js__WEBPACK_IMPORTED_MODULE_3__["default"].showMainNav();
             _environment_invoker_js__WEBPACK_IMPORTED_MODULE_3__["default"].showProfile();
}     
   
 } /* END OF CLASS COMPONENT */

let component = new Component();
component.landingPage();



/***/ }),

/***/ "./environment/dataContent.js":
/*!************************************!*\
  !*** ./environment/dataContent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dataContent; });

class dataContent{

      static dataArray(){

           this.profileData = [{
                 proImage:{
                  image:'./image/adlawan.jpg'
                 },

                 bio:{ full_name:'Brian C. Adlawan',
                      status:'Single',
                         age:'30',
                     present_address:'P#12 Saint John Bucana Davao City',
                     contact:'09979162314',
                       email:'yan19891989000@gmail.com',
                  year_birth:'April 17,1989',
                      height:'55 lbs',
          provincial_Address:'Forest Drive Gate 2 Block 4 lot 6 Bislig, Sur Del Sur',
              place_of_birth:'Caguyao Bislig Sur Del Sur'
            },
                       
                       education:{
                              elementary:{
                          schlName:'San Vicente Elementary School',
                       schlAddress:'San Vicente 1, Bislig Sur Del Sur',
                       yrGraduated:'2004-2005' },

                              highSchool:{
                                schlName:'Alegria Nat High School',
                              schlAddress:'Alegria Sur Del Norte',
                              yrGraduated:'2007-2008'
                              },

                              vocational:{
                                 schlAddress:'Matina, road maa davao city',
                                    schlName:'Ama Computer Learning Center',
                                      course:'Advance Programming / Design & Networking',
                                 yrGraduated:'2008-2009'
                              },

                              college:{
                                 schlName:'AMA Computer College Davao Campus',
                                 schlAddress:'123 Gen Malvar st., Davao City',
                                 yrGraduated:'2018-2019',
                                 course:'Bachelor of Science in Information Technology'
                              } 
                           },     

                           company:{
                                 esscor:{
                                   name:'Electronic Security Systems Corporation',
                                address:'Suite 307 Legaspi Towers 200, Paseo De Roxas St., Legaspi Village makati city, Philippines',
                               position:'systems engineer',
                                   year:'Sept 14, 2018 to July 30 2019'
                            },

                                 daltans:{
                                    name:'Daltan\'s IT Solution',
                                 address:'kilometer 5, anito bldg door #6 Buhangin Davao City',
                                position:'it field technician',
                                    year:'June 2013 to March 2014'
                            },
                      },
                            experience:{
                                     one:'Accurately estimate the time, effort & resources needed to effect system upgrades.',
                                     two:'Carrying out standard, complex and integrated software modification and upgrades,',
                                   three:'Generating and reviewing systems downtime reports that give an accurate picture.',
                                    four:'Providing complex pre-sale technical support to the companys Marketing department.',
                                    five:'Installation of security systems including but not limited to access control, CCTV surveillance, alarms, fire suppression systems and its associated work.',
                                     six:'Providing support to other departments need Furnish request of necessary materials for project.',
                                   seven:'Coordinating the activity of different teams and engineering staff.',
                                   eight:'Creating a business case / topology diagram to purchase companys services.',
                                    nine:'Involved in the resolution of system, hardware, software & infrastructure problems.',
                                     ten:'Providing network systems engineering support for different IT projects',
                                  eleven:'Attending face to face meetings with clients to discuss their exact requirements',
                                  twelve:'Ensuring that services are delivered in accordance with established objectives',
                                thirteen:'Perform project on-site system configuration and programming',
                                fourteen:'Perform testing, commissioning, and project closure.',
                                 fifteen:'Perform training and turn-over of onsite projects.'
                          },
                         
                               carouselIMG:{
                                    imgProf1:{
                                             image:'./image/b1.jpg',
                                              info:'this is the info from imgProf1',
                                       description:'this is the description from imgProf1',
                                           history:'this is the history from the imgProf1'
                                    },
                                    
                                    imgProf2:{
                                            image:'./image/b2.jpg',
                                             info:'this is the info from imgProf2',
                                      description:'this is the description from imgProf2',
                                          history:'this the history from imgProf2'      
                                    },
                                
                                    imgProf3:{
                                      image:'./image/b3.jpg',
                                      info:'this is the info from imgProf3',
                                      description:'this is the description from imgProf3',
                                      history:'this is the history from imgProf3'
                                    },
                              
                                    imgProf4:{
                                      image:'./image/b4.jpg',
                                      info:'this is the info from imgProf4',
                                      description:'this is the description from imgProf4',
                                      history:'this is the history from imgProf4'
                                    },
                                 
                                    imgProf5:{
                                      image:'./image/b5.jpg',
                                      info:'this is the info from imgProf5',
                                      description:'this is the description from imgProf5',
                                      history:'this is the history from imgProf5'
                                    },
                                
                                    imgProf6:{
                                      image:'./image/b6.jpg',
                                      info:'this is the info from imgProf6',
                                      description:'this is the history from imgProf6',
                                      history:'this is the history from imgProf6'      
                                    },
                               
                                    imgProf7:{
                                      image:'./image/b7.jpg',
                                      info:'this is the history from imgProf7',
                                      description:'this is the description from imgProf7',
                                      history:'this is the history from imgProf7'
                                    },
                               
                                    imgProf8:{
                                      image:'./image/b8.jpg',
                                      info:'this is the info from imgProf8',
                                      description:'this is the description from imgProf8',
                                      history:'this is the history from imgProf8'      
                                    },
                            
                                    imgProf9:{
                                      image:'./image/b9.jpg',
                                      info:'this is the info from imgProf9',
                                      description:'this is the description from igmProf9',
                                      history:'this is the history from imgProf9'      
                                    },
                
                                    imgProf10:{
                                      image:'./image/b10.jpg',
                                      info:'this is the info from imgProf10',
                                      description:'this is the description from imgProf10',
                                      history:'this is the history from imgProf10'      
                                    },
                              
                                    imgProf11:{
                                      image:'./image/b11.jpg',
                                      info:'this is the info from imgProf11',
                                      description:'this is the description from imgProf11',
                                      history:'this is the history from imgProf11'      
                                    }
                                 }
                      }];

       return this;
      }     

   }




/***/ }),

/***/ "./environment/htmlContent.js":
/*!************************************!*\
  !*** ./environment/htmlContent.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return htmlContent; });
/* harmony import */ var _environment_Main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environment/Main.js */ "./environment/Main.js");
/* harmony import */ var _environment_dataContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environment/dataContent.js */ "./environment/dataContent.js");
/* harmony import */ var _environment_invoker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environment/invoker.js */ "./environment/invoker.js");
/* harmony import */ var _environment_component_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment/component.js */ "./environment/component.js");





class htmlContent extends _environment_Main_js__WEBPACK_IMPORTED_MODULE_0__["default"]{

 static profile(){

                     var r = _environment_dataContent_js__WEBPACK_IMPORTED_MODULE_1__["default"].profileData;
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
                       _environment_Main_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderMain(`${htmlform}`,_environment_Main_js__WEBPACK_IMPORTED_MODULE_0__["default"].profileId());
     }

static education(){
     var r = _environment_dataContent_js__WEBPACK_IMPORTED_MODULE_1__["default"].profileData;
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
                         
          _environment_Main_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderMain(`${html}`,_environment_Main_js__WEBPACK_IMPORTED_MODULE_0__["default"].educationId());
     }     

static company(){
     var r = _environment_dataContent_js__WEBPACK_IMPORTED_MODULE_1__["default"].profileData;
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
                          
          _environment_Main_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderMain(`${html}`,_environment_Main_js__WEBPACK_IMPORTED_MODULE_0__["default"].companyId());
     }

static experience(){
     var r = _environment_dataContent_js__WEBPACK_IMPORTED_MODULE_1__["default"].profileData;
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
                                   
          _environment_Main_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderMain(`${html}`,_environment_Main_js__WEBPACK_IMPORTED_MODULE_0__["default"].experienceId());
           document.getElementById('flow-toggle').addEventListener('click', function(){
                                  htmlContent.carousel();
                                  _environment_invoker_js__WEBPACK_IMPORTED_MODULE_2__["default"].showCarousel();
                 
               });
     }

static carousel(){
	_environment_dataContent_js__WEBPACK_IMPORTED_MODULE_1__["default"].dataArray();
	let count = 0;
	let r = _environment_dataContent_js__WEBPACK_IMPORTED_MODULE_1__["default"].profileData;
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
            _environment_Main_js__WEBPACK_IMPORTED_MODULE_0__["default"].renderMain(`${html}`,_environment_Main_js__WEBPACK_IMPORTED_MODULE_0__["default"].carouselId());
            _environment_invoker_js__WEBPACK_IMPORTED_MODULE_2__["default"].showCarousel();
	        document.getElementById('gobackToExperience').addEventListener('click', function(){
	        	_environment_invoker_js__WEBPACK_IMPORTED_MODULE_2__["default"].showExperience();

	        });
  }

}

/***/ }),

/***/ "./environment/invoker.js":
/*!********************************!*\
  !*** ./environment/invoker.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return invoker; });
// import Component from '../environment/component.js'
class invoker {

  static showCarousel(){
  
$b('#carousel').show();
$b('#education').hide();
$b('#company').hide();
$b('#experience').hide();
$b('#profile').hide();  
$b(document).ready(function(){
  $b('.materialboxed').materialbox();
  $b('.pagination').show();
  $b('.carousel').carousel({
    fullWidth:true,
    padding:100,
    duration:200,
    dist:-300,
    shift:20,
    noWrap:true,
    onCycleTo:true
  });
});

}
 static showProfile(){
  
$b('#profile').show();
$b('#carousel').hide();
$b('#education').hide();
$b('#company').hide();
$b('#experience').hide();

$b(document).ready(function(){
    $b('.carousel').hide();
    $b('.pagination').show();
    $b('.preloader-wrapper').hide();
   
    });  
  }

static showCompany(){
 
$b('#profile').hide();
$b('#education').hide();
$b('#company').show();
$b('#experience').hide();
$b('#carousel').hide();

$b(document).ready(function(){
    $b('.carousel').hide();
    $b('.pagination').show();
    $b('.preloader-wrapper').hide();
   
    }); 
}

static showEducation(){  
$b('#profile').hide();
$b('#education').show();
$b('#company').hide();
$b('#experience').hide();
$b('#carousel').hide();

$b(document).ready(function(){
    $b('.carousel').hide();
    $b('.pagination').show();
    $b('.preloader-wrapper').hide();
   
    }); 
   }

static showExperience(){
    $b('#experience').show();
		$b('#carousel').hide();       
		$b('#profile').hide();
		$b('#education').hide();
		$b('#company').hide();

    $b(document).ready(function(){
    $b('.carousel').hide();
    $b('.pagination').show();
    $b('.preloader-wrapper').hide();
   
    });
		
 }

static showPagination(){

  $b('.pagination').show();
}

   static showMainNav(){
    $b('#mainNav').show();
   }

}



/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map