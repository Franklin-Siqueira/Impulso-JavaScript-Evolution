// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0
// import Theme from "../../assets/styles/theme.js";

// Header Variables

const studentName = "Franklin Siqueira | 2022";
const course = "DIO Impulse Bootcamp";
const courseModule = "Módulo III";
const courseModuleDesc = "Dominando a Linguagem JavaScript";
const moduleClass = "JavaScript Assíncrono";
const classInstructor = "Stephany Nusch";
const classInstructorURL = "https://github.com/stebsnusch";
const classTopic = "Asyncron JavaScript";
var classActivityList = [
  "Asyncronicity",
  "Definition | promise | async | await",
  "What are APIs and what is fetch?",
  "Practical Activity",
];
const topicDefinitions = [
  {
    topicName: "DOM",
    topicDef: "Document Object Model",
    topidDetail:
      'It\'s the definition of a HTML document file structure. The hierarchy begins follows the sequenced structure: [ Document ]-> [ Root element <html> ]-> [[ Element <head> ]-> [ Element <title> ]-> [ Element (Text) ] -- [ Element <body> ]-> [[ Element <a> ]-> [ Attribute <href> ]-> "LINK"] -- [ Element <h1> ]-> [Text].',
  },
  {
    topicName: "BOM",
    topicDef: "Browser Object Model",
    topidDetail:
      "Everything concerning to the browser window. [ window ]-> [ document (DOM) ] -- [ history ] -- [ location ] -- [ screnn ] -- [ navigator ]",
  },
  {
    topicName: "Event",
    topicDef: "Any event",
    topidDetail:
      "Every change regarding page (document) elements and actions (e.g. mouse position and clicks).",
  },
];
const classTopicTags = [
  "JavaScript",
  "NodeJs",
  "Command line",
  "Functions",
  "Methods",
  "Variables",
  "strings",
  "Console.log",
  "Regex",
  "expressions",
  "string interpolations",
  "eval",
  "join()",
  "reverse()",
  "split()",
  "operators",
  "arrow functions",
  "debug",
  "error handling",
  "ECMAScript error",
  "DOMException",
  "try... catch",
  "throw",
  "apply",
  "bind",
  "call",
];
const furtherTopicDefinition =
  "Palíndromo, do grego palin (novo) e dromo (percurso), é toda palavra ou frase que pode ser lida de trás pra frente e que, independente da direção, mantém o seu sentido. Também chamadas de anacíclicas, elas devem ser lidas considerando-se apenas as letras. Isso quer dizer que não se consideram acentos e, no caso das frases, também não se deve considerar a pontuação e o espaço entre as palavras. Experimente com a frase 'Socorram-me, subi no ônibus em Marrocos'.";
const furtherTopicLanguage = "Portuguese";
const furtherTopicLangSymbol = "pt-Br" | "en-Us";
const furtherTopicDefAuthor = "Márcia Fernandes";
const furtherTopicDefAuthorProfileURL = "Márcia Fernandes";
const furtherTopicDefAuthorBio = "Professora licenciada em Letras";
const furtherTopicDefURL = "https://www.todamateria.com.br/palindromo/";

//
//
//
window.addEventListener("load", loadFunc, false);

// window.onload = function () {
function loadFunc() {
  // Page Structure
  const PS = {
    page: document,
    pageHead: document.getElementsByTagName("head"),
    pageHeader: document.getElementsByTagName("header"),
    pageHeaderId: document.getElementById("header"),
    pageHeaderLeft: document.getElementById("headerLeft"),
    pageHeaderCenter: document.getElementById("headerCenter"),
    pageHeaderRight: document.getElementById("headerRight"),
    pageBody: document.getElementsByTagName("body"),
    pageMain: document.getElementById("main"),
    pageNav: document.getElementById("nav"),
    pageFooter: document.getElementsByTagName("footer"),
    pageButtonPrimary: document.getElementById("primary-button"),
    pageUl: document.getElementsByTagName("ul"),
    pageUlContainer: document.getElementById("ul-container"),
    pageLi: document.getElementsByTagName("li"),
    courseModule: document.getElementById("courseModule"),
    classTopic: document.getElementById("classTopic"),
    footerLeftTitle: document.getElementById("footerLeftTitle"),
    footerCenterTitle: document.getElementById("footerCenterTitle"),
    footerRightTitle: document.getElementById("footerRightTitle"),
  };

  // Assembling list items - ulNewItem

  // Using for...
  // for ( let ulI = 0; ulI < classActivityList.length; ulI++) {
  //   // let h1Item = document.createElement("h1");
  //   // h1Item.innerText = "text";
  //   let ulNewItem = document.createElement("li");
  //   ulNewItem.innerText = classActivityList[ulI];
  //   ulContainer.appendChild(ulNewItem);
  // }

  // Using forEach...
  const PageUlItems =
    "color:  rgba(192,208,22,1); list-style: none; text-decoration: none;";

  classActivityList.forEach((classActivityList) => {
    let ulNewItem = document.createElement("li");
    ulNewItem.innerText = classActivityList;
    PS.pageUlContainer.appendChild(ulNewItem).style.cssText += PageUlItems;
  });

  //
  // const stylingImport = require("../../assets/styles/theme.js");
  //   .then(({ Styles }) => {
  //     // let styling = [ colors, DARK ];
  //     let styling2 = Styles.colors.light.backgroundBase;
  //     console.log(`Const mode = ${styling2.length}. styling2 = ${styling2}`);
  //     // return styling2;
  //   })
  //   .then((Styles) => {
    //     return Styles.backgroundBase;
    // //   });
    // const colorN = stylingImport.colors.dark.backgroundBase;
    //     console.log(`Const colorN = ${colorN.length}. styling2 = ${colorN}`);
  // const styleN = () => {
  //   stylingImport.then((sty) => {
  //     console.log(`Const mode (OUT) = ${sty}.`);
  //   });
  // };

  // styleN();

  // Mode styling definitions

  // var toggleScreenBool = false;
  var toggleScreenBool = false;

  const MODE = {
    LIGHT:
      "color: #1c3677; background: linear-gradient(51deg, rgba(192,208,22,1) 0%, rgba(173,189,74,1) 24%, rgba(124,129,142,1) 93%);",
    DARK: "color: gray; background: linear-gradient(51deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 24%, rgba(0,73,255,1) 93%)",
  };

  const LIGHT =
    ".light-class {color: #1c3677; background: linear-gradient(51deg, rgba(192,208,22,1) 0%, rgba(173,189,74,1) 24%, rgba(124,129,142,1) 93%);}";

  const DARK =
    ".dark-class {color: gray; background: linear-gradient(51deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 24%, rgba(0,73,255,1) 93%);}";
  //
  const FontStyle = {
    sansBase: "Arial, Helvetica, sans-serif",
  };

  // ------------------- Testing ----------------------------
  // var elementSheet = PS.page.createElement('style'), sheet;
  // PS.pageHead.appendChild(elementSheet);
  // sheet = elementSheet.sheet;

  // var newStyles = '.new-style-class {';
  // newStyles += 'text-align:right;';
  // newStyles += 'line-height:150px !important;'
  // newStyles += '}';
  // sheet.insertRule(newStyles, 0);
  //----------------------------------------------------------

  // Styling page elements

  const PageMainStyle = `display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: flex-start;
                        height: 100vh;
                        width: 100%;
                        margin: 0;
                        padding: 0.95rem;
                        font-family: ${FontStyle.sansBase};
                        ${toggleScreenBool ? MODE.LIGHT : MODE.DARK};`;
  const PageNavStyle = `display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                        margin: 0;
                        font-family: ${FontStyle.sansBase};
                        ${toggleScreenBool ? MODE.LIGHT : MODE.DARK};`;
  const PageHeaderStyle = `display: flex;
                          justify-content: space-between;
                          align-items: center;
                          padding: 0.95rem;
                          overflow: hidden;
                          top: 0px;
                          width: 100%;
                          font-family: ${FontStyle.sansBase};
                          ${toggleScreenBool ? MODE.LIGHT : MODE.DARK};`;
  const PageBodyStyle = `display: flex; 
                          flex: 1; 
                          flex-direction: column; 
                          align-items: center; 
                          padding: 0.025rem; 
                          margin: 0; 
                          width: 100%; 
                          height: 100vh;
                          font-family: ${FontStyle.sansBase};
                          ${toggleScreenBool ? MODE.LIGHT : MODE.DARK};`;
  const PageFooterStyle = `display: flex; 
                            justify-content: space-around; 
                            align-items: center; 
                            width: 100%; 
                            height: 5vh;
                            position: fixed;
                            bottom: 0.0em;
                            font-family: ${FontStyle.sansBase};
                            ${toggleScreenBool ? MODE.LIGHT : MODE.DARK};`;
  // background-color: #4e545c; color: #e5e8e8;
  const PrimaryButtonStyle = `border-radius: 40px;
                              font-size: 1.25rem;
                              font-weight: 500;
                              height: 30px;
                              width: 150px;
                              border: none;
                              transition: all 0.2s linear;
                              font-family: ${FontStyle.sansBase};
                              ${toggleScreenBool ? MODE.LIGHT : MODE.DARK};`;
  //
  const HoverButtonStyle = `${
    toggleScreenBool
      ? "color: gray; border: 2px solid blue;"
      : "color: white; border: 2px solid white;"
  }`;
  const HoverOutButtonStyle = `color: gray; border: none;`;
  const PageHeaderLeftStyle = `max-width: 20rem; padding: 0.95rem;`;
  const PageHeaderCenterStyle = `max-width: 33rem; padding: 0.95rem;`;
  const PageHeaderRightStyle = `max-width: 15rem; justify-content: center; padding-right: 5rem; color: red;`;

  // pageButtonPrimary Event Functions

  function toggleScreenMode() {
    console.log("From toggleScreenMode - pageButtonPrimary Clicked!");
    toggleInnerHtml();
    toggleClasses();
  }
  function toggleClasses() {
    // PS.pageBody[0].classList.toggle(MODE.DARK);
    // PS.pageBody[0].classList.toggle(MODE.DARK);
    // let button = PS.pageBody[0];
    // button.classList.add(LIGHT);
    toggleScreenBool = toggleScreenBool ? false : true;
    // return toggleScreenBool;
  }
  function toggleInnerHtml() {
    console.log("From toggleInnerHtml - pageButtonPrimary Clicked!");
  }
  function buttonHover() {
    console.log(`toggleScreenBool: ${toggleScreenBool}`);
    PS.pageButtonPrimary.style.cssText += HoverButtonStyle;
    // PS.pageButtonPrimary.classList.toggle(hoverButtonStyle);
  }
  function buttonHoverLeft() {
    PS.pageButtonPrimary.style.cssText += HoverOutButtonStyle;
  }

  // Page rendering

  // PS.pageButtonPrimary.addEventListener("click", toggleScreenMode);
  PS.pageButtonPrimary.onclick = toggleScreenMode;
  PS.pageButtonPrimary.onmouseover = buttonHover;
  PS.pageButtonPrimary.onmouseout = buttonHoverLeft;

  // Global styling

  PS.pageButtonPrimary.style.cssText = PrimaryButtonStyle;
  PS.pageBody[0].style.cssText = PageBodyStyle;
  PS.pageHeaderId.style.cssText = PageHeaderStyle;
  PS.pageHeaderLeft.style.cssText += PageHeaderLeftStyle;
  PS.pageHeaderCenter.style.cssText += PageHeaderCenterStyle;
  PS.pageHeaderRight.style.cssText += PageHeaderRightStyle;
  PS.pageNav.style.cssText = PageNavStyle;
  PS.pageMain.style.cssText = PageMainStyle;
  PS.pageFooter[0].style.cssText = PageFooterStyle;
  // PS.pageFooter[0].style.cssText = TH.PageFooterStyle;

  // Data main

  var imgFrankIcon = "../../assets/img/favicons/apple-touch-icon.png";
  var imgFrankIconAria = "Franklin Siqueira's icon image"
  var cssImgText = "display: flex; width: 4.975em;";
  var mainCssDivText = "display: flex; justify-content: space-between; align-items: center; overflow: hidden; width: 5em; height: 5em; border: 0.25em solid rgba(192,208,22,1); border-radius: 3em; ";
  var imgDiv = PS.page.createElement("div")
  imgDiv.setAttribute("id", "mainImgDiv");
  var imgTag = PS.page.createElement("img");
  imgTag.src = imgFrankIcon;
  imgTag.setAttribute("aria-label", imgFrankIconAria);
  // PS.page.createElement("img").src(").style.cssText = "display: flex; width: 12em;";
  
  // Title
  PS.page.title = `${moduleClass} | ${studentName}`;
  
  // Main
  PS.courseModule.innerHTML = `${courseModule} | ${courseModuleDesc}`;
  PS.classTopic.innerHTML = classTopic;
  PS.pageMain.appendChild(imgDiv).style.cssText += mainCssDivText;
  PS.page.getElementById("mainImgDiv").appendChild(imgTag).style.cssText += cssImgText;

  // Main -> Activity -> Cats API
  const catCssDiv = "";
  const catCssImg = "max-width: 600px; border-radius: 30px;";
  const catCssButton = 	"border: 0; border-radius: 0.6rem; font-size: 1.2rem; font-weight: 500; padding: 16px; background: orangered; color: white;margin: 20px 0; cursor: pointer; transition: all 0.5s ease-in-out;";

  const catDiv = PS.page.createElement("div");
  catDiv.setAttribute("id", "cat-div");
  const catImg = PS.page.createElement("img");
  catImg.setAttribute("id", "cat-img");
  const catButton = PS.page.createElement("button");
  catButton.setAttribute("id", "change-cat-button");

  PS.pageMain.appendChild(catDiv).style.cssText += catCssDiv;
  PS.page.getElementById("cat-div").appendChild(catImg).style.cssText += catCssImg;
  PS.page.getElementById("cat-div").appendChild(catButton).style.cssText += catCssButton;

  const BASE_URL = "https://thatcopy.pw/catapi/rest/";
  const getCatsAPI = async () => {
    try {
      const catsData = await fetch(BASE_URL);
      const catsJson = await catsData.json();
      return catsJson.webpurl;
    } catch (error) {
      console.log(error.message);
    }
  };
  // Other way...
  const getCatsApi = async () => {
      const catsData = await fetch(BASE_URL)
      .then((response) => response.json())
      .catch((error) => console.log(error));

      return catsData.webpurl;
  };

  const loadCats = async () => {
    catImg.src = await getCatsAPI();
  }
  catButton.innerText = "Load Cat...";
  catButton.onclick = loadCats;

  loadCats();

  // Footer
  PS.footerLeftTitle.innerHTML = "Topics (left)";
  PS.footerCenterTitle.innerHTML = "Topics (center)";
  PS.footerRightTitle.innerHTML = "Topics (Right)";
  console.log(PS.pageMain.childElementCount);
}
