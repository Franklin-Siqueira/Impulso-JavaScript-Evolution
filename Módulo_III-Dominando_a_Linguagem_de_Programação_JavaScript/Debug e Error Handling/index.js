// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

// Header Variables

var course = "DIO Impulse Bootcamp";
var courseModule = "Dominando a Linguagem JavaScript";
var moduleClass = "Debug and Error Handling";
var classInstructor = "Stephany Nusch";
var classInstructorURL = "https://github.com/stebsnusch";
var classTopic = "Debug and Error Handling";
var classTopicTags = [
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
var topicDefinition =
  "Palíndromo, do grego palin (novo) e dromo (percurso), é toda palavra ou frase que pode ser lida de trás pra frente e que, independente da direção, mantém o seu sentido. Também chamadas de anacíclicas, elas devem ser lidas considerando-se apenas as letras. Isso quer dizer que não se consideram acentos e, no caso das frases, também não se deve considerar a pontuação e o espaço entre as palavras. Experimente com a frase 'Socorram-me, subi no ônibus em Marrocos'.";
var topicLanguage = "Portuguese";
var topicLangSymbol = "pt-Br" | "en-Us";
var defAuthor = "Márcia Fernandes";
var defAuthorProfileURL = "Márcia Fernandes";
var defAuthorBio = "Professora licenciada em Letras";
var defURL = "https://www.todamateria.com.br/palindromo/";

// <script>
window.onload = function() {
    document.getElementById('courseModule').innerHTML = courseModule;
    document.getElementById('classTopic').innerHTML = classTopic;
};
// </script>