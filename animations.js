// Toggle mobile menu
$(document).ready(function() {
  $('.toggle-menu').click(function() {
    $('nav').toggleClass('active');
  });
});

// const form = document.getElementById("contact-form");

// form.addEventListener("submit", function(event) {
//   event.preventDefault();

//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;

//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", form.action);
//   xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       alert("Your message has been sent!");
//       form.reset();
//     } else if (xhr.readyState === 4 && xhr.status !== 200) {
//       alert("There was an error sending your message. Please try again later.");
//     }
//   };
//   xhr.send(`name=${name}&email=${email}&message=${message}`);
// });

function toggleSkillsDropdown() {
  var skillsdropdown = document.querySelector('.skillsdropdown-content');
  skillsdropdown.classList.toggle('skillsshow');
  
  var contact = document.querySelector('.contact');
  contact.classList.toggle('skillsmove-down'); /* add this line to move the features down */
}

function toggleMenuDropdown() {
  var menudropdown = document.querySelector('.menudropdown-content');
  menudropdown.classList.toggle('menushow');
}

var project1show = document.querySelector('.hidden1');
var project1button = document.getElementById('project1button1');

function openProject1() {
  var project1show = document.querySelector('.hidden1');
  project1show.classList.toggle('project-show1');
}

function closeProject1() {
  var project1show = document.querySelector('.hidden1');
  project1show.classList.toggle('project-show1');
}

var project2show = document.querySelector('.hidden2');
var project2button = document.getElementById('project1button2');

function openProject2() {
  var project2show = document.querySelector('.hidden2');
  project2show.classList.toggle('project-show2');
}

function closeProject2() {
  var project2show = document.querySelector('.hidden2');
  project2show.classList.toggle('project-show2');
}

var project3show = document.querySelector('.hidden3');
var project3button = document.getElementById('project1button3');

function openProject3() {
  var project3show = document.querySelector('.hidden3');
  project3show.classList.toggle('project-show3');
}

function closeProject3() {
  var project3show = document.querySelector('.hidden3');
  project3show.classList.toggle('project-show3');
}

var project4show = document.querySelector('.hidden4');
var project4button = document.getElementById('project1button4');

function openProject4() {
  var project4show = document.querySelector('.hidden4');
  project4show.classList.toggle('project-show4');
}

function closeProject4() {
  var project4show = document.querySelector('.hidden4');
  project4show.classList.toggle('project-show4');
}


function switchButton() {
  switchButton2();
  switchMenuColors();
  switchButtonValue()
  switchButtonColor();
  switchPageColor();
  switchHeaderColor();
  switchImageBorderColor();
  switchBoxColor();
  switchBoxColor2();
  switchAboutMeHColor();
  switchAboutMeT1Color();
  switchAboutMeT2Color();
  switchSkillsColor();
  switchSkillDropColor();
}

function switchButton2() {
  switchAlbumNameColor();
  switchAlbumButtonColor();
  switchAlbumButtonColor2();
  switchAlbumButtonColor3();
  switchAlbumButtonColor4();
  switchProjectBoxColor();
  switchProject2BoxColor();
  switchProject3BoxColor();
  switchProject4BoxColor();
  switchProjectDescriptionColor();
  switchProject2DescriptionColor();
  switchProject3DescriptionColor();
  switchProject4DescriptionColor();
  switchAlbumDescriptionColor();
  switchPSkills1Color();
  switchPSkills2Color();
  switchPSkills3Color();
  switchPSkills4Color();
  switchPDuration1Color();
  switchPDuration2Color();
  switchPDuration3Color();
  switchPDuration4Color();
  switchFormColor();
  switchFormInput1Color();
  switchFormInput2Color();
  switchFormInput3Color();
  switchFooterColor();
}

function switchMenuColors() {
  switchMenuColor();
  switchMButton1Color();
  switchMButton2Color();
  switchMButton3Color();
  switchMButton4Color();
}

function switchButtonValue() {
  var switcher = document.querySelector('.button-image');
  switcher.classList.toggle('button-image-up');
}

function switchButtonColor() {
  var color = document.querySelector('.lightdarkswitch');
  color.classList.toggle('lightdarkswitched');
}

function switchPageColor() {
  var pagecolor = document.querySelector('.body');
  pagecolor.classList.toggle('bodylight');
}

function switchHeaderColor() {
  var headercolor = document.querySelector('.header');
  headercolor.classList.toggle('headerlight');
}

function switchMenuColor() {
  var SkillsColor2 = document.querySelector('.menudropdown-content');
  SkillsColor2.classList.toggle('menudropdown-contentlight');
}

function switchImageBorderColor() {
  var circleimage = document.querySelector('.circle-image');
  circleimage.classList.toggle('circle-image-light');
}

function switchBoxColor() {
  var boxColor = document.querySelector('.box');
  boxColor.classList.toggle('boxlight');
}

function switchBoxColor2() {
  var boxColor2 = document.querySelector('.box2');
  boxColor2.classList.toggle('boxlight2');
}

function switchAboutMeHColor() {
  var HeaderColor = document.querySelector('.aboutmeheader');
  HeaderColor.classList.toggle('aboutmeheaderlight');
}

function switchAboutMeT1Color() {
  var TextColor1 = document.querySelector('.aboutmeinfo');
  TextColor1.classList.toggle('aboutmeinfolight');
}

function switchAboutMeT2Color() {
  var TextColor2 = document.querySelector('.aboutmeinfo2');
  TextColor2.classList.toggle('aboutmeinfolight2');
}

function switchFooterColor() {
  var FooterColor = document.querySelector('.footer');
  FooterColor.classList.toggle('footerlight');
}

function switchSkillsColor() {
  var SkillsColor = document.querySelector('.skillsdropdown-btn');
  SkillsColor.classList.toggle('skillsdropdown-btnlight');
}

function switchSkillDropColor() {
  var SkillsDropColor = document.querySelector('.skillsdropdown-content');
  SkillsDropColor.classList.toggle('skillsdropdown-contentlight');
}

function switchButtonColor() {
  var ButtonColor = document.querySelector('.buttonbox');
  ButtonColor.classList.toggle('buttonboxlight');
}

function switchAlbumButtonColor() {
  var AlbumButtonColor = document.querySelector('.album-projects');
  AlbumButtonColor.classList.toggle('album-projectslight');
}

function switchAlbumButtonColor2() {
  var AlbumButtonColor2 = document.querySelector('.album-projects2');
  AlbumButtonColor2.classList.toggle('album-projectslight2');
}

function switchAlbumButtonColor3() {
  var AlbumButtonColor3 = document.querySelector('.album-projects3');
  AlbumButtonColor3.classList.toggle('album-projectslight3');
}

function switchAlbumButtonColor4() {
  var AlbumButtonColor4 = document.querySelector('.album-projects4');
  AlbumButtonColor4.classList.toggle('album-projectslight4');
}

function switchProjectDescriptionColor() {
  var ProjectDescriptionColor = document.querySelector('.projectdescription');
  ProjectDescriptionColor.classList.toggle('projectdescriptionlight');
}

function switchProject2DescriptionColor() {
  var ProjectDescriptionColor = document.querySelector('.projectdescription2');
  ProjectDescriptionColor.classList.toggle('projectdescription2light');
}

function switchProject3DescriptionColor() {
  var ProjectDescriptionColor = document.querySelector('.projectdescription3');
  ProjectDescriptionColor.classList.toggle('projectdescription3light');
}

function switchProject4DescriptionColor() {
  var ProjectDescriptionColor = document.querySelector('.projectdescription4');
  ProjectDescriptionColor.classList.toggle('projectdescription4light');
}

function switchProjectBoxColor() {
  var ProjectBoxColor = document.querySelector('.ProjectInformation');
  ProjectBoxColor.classList.toggle('ProjectInformationlight');
}

function switchProject2BoxColor() {
  var ProjectBoxColor = document.querySelector('.Project2Information');
  ProjectBoxColor.classList.toggle('Project2Informationlight');
}

function switchProject3BoxColor() {
  var ProjectBoxColor = document.querySelector('.Project3Information');
  ProjectBoxColor.classList.toggle('Project3Informationlight');
}

function switchProject4BoxColor() {
  var ProjectBoxColor = document.querySelector('.Project4Information');
  ProjectBoxColor.classList.toggle('Project4Informationlight');
}

function switchAlbumNameColor() {
  var AlbumNameColor = document.querySelector('.album-name');
  AlbumNameColor.classList.toggle('album-namelight');
}

function switchAlbumDescriptionColor() {
  var AlbumDescriptionColor = document.querySelector('.album-info');
  AlbumDescriptionColor.classList.toggle('album-infolight');
}

function switchPSkills1Color() {
  var PSkillsColor = document.querySelector('.ProjectSkills');
  PSkillsColor.classList.toggle('ProjectSkillslight');
}

function switchPSkills2Color() {
  var PSkillsColor = document.querySelector('.ProjectSkills2');
  PSkillsColor.classList.toggle('ProjectSkills2light');
}

function switchPSkills3Color() {
  var PSkillsColor = document.querySelector('.ProjectSkills3');
  PSkillsColor.classList.toggle('ProjectSkills3light');
}

function switchPSkills4Color() {
  var PSkillsColor = document.querySelector('.ProjectSkills4');
  PSkillsColor.classList.toggle('ProjectSkills4light');
}

function switchPDuration1Color() {
  var PDurationColor = document.querySelector('.ProjectDuration');
  PDurationColor.classList.toggle('ProjectDurationlight');
}

function switchPDuration2Color() {
  var PDurationColor = document.querySelector('.Project2Duration');
  PDurationColor.classList.toggle('Project2Durationlight');
}

function switchPDuration3Color() {
  var PDurationColor = document.querySelector('.Project3Duration');
  PDurationColor.classList.toggle('Project3Durationlight');
}

function switchPDuration4Color() {
  var PDurationColor = document.querySelector('.Project4Duration');
  PDurationColor.classList.toggle('Project4Durationlight');
}

function switchFormColor() {
  var FormColor = document.querySelector('.contact-form');
  FormColor.classList.toggle('contact-formlight');
}

function switchFormInput1Color() {
  var InputFormColor = document.querySelector('.inputarea1');
  InputFormColor.classList.toggle('inputarea1light');
}

function switchFormInput2Color() {
  var InputFormColor = document.querySelector('.inputarea2');
  InputFormColor.classList.toggle('inputarea2light');
}

function switchFormInput3Color() {
  var InputFormColor = document.querySelector('.inputarea3');
  InputFormColor.classList.toggle('inputarea3light');
}

function switchMButton1Color() {
  var MenuButtonColor = document.querySelector('.menubutton1');
  MenuButtonColor.classList.toggle('menubutton1light');
}

function switchMButton2Color() {
  var MenuButtonColor = document.querySelector('.menubutton2');
  MenuButtonColor.classList.toggle('menubutton2light');
}

function switchMButton3Color() {
  var MenuButtonColor = document.querySelector('.menubutton3');
  MenuButtonColor.classList.toggle('menubutton3light');
}

function switchMButton4Color() {
  var MenuButtonColor = document.querySelector('.menubutton4');
  MenuButtonColor.classList.toggle('menubutton4light');
}