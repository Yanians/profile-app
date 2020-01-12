
import dataContent from '../environment/dataContent.js'
import htmlContent from '../environment/htmlContent.js'
import Main from '../environment/Main.js'
import invoker from '../environment/invoker.js'

export class Component extends Main {              

 landingPage(){ 
  dataContent.dataArray();
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
        Main.renderMain(`${html}`,Main.mainId());
        Main.renderFooter(`${htmlFooter}`,Main.footerId());
       component.mainNavigation();
       htmlContent.profile();
        document.getElementById('showComp').addEventListener('click', function(){
                                  htmlContent.company();
                                  invoker.showCompany();
                         });
        document.getElementById('showProf').addEventListener('click', function(){
                                  htmlContent.profile();
                                  invoker.showProfile();
                         });
        document.getElementById('showEd').addEventListener('click', function(){
                                  htmlContent.education();
                                  invoker.showEducation();
                         });
        document.getElementById('showEx').addEventListener('click', function(){
                                  htmlContent.experience();
                                  invoker.showExperience();
               });
}

  mainNavigation(){
                         let html = `
                                      <ul>
                                       <li class="center">
                                        `; 
                                               let r = dataContent.profileData;

                                               let count = 0;

                                                         for(var i = (r.length-1);i>=0;i--){
                                                              if(count++ === r[i].proImage)
                                                                break;     
                                                     html +=`
                                                      <img class="resize-image" src="${r[i].proImage.image}"/>
                                                      </li>`;
        }
             Main.renderMain(`${html}`,document.getElementById('mainNav'));
             invoker.showMainNav();
             invoker.showProfile();
}     
   
 } /* END OF CLASS COMPONENT */

let component = new Component();
component.landingPage();

