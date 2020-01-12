// import Component from '../environment/component.js'
export default class invoker {

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

