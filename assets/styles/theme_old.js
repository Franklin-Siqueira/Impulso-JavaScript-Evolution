// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

var toggleScreenBool = false;

  export const  colors = {
    dark: {
      headerFont: "#1c3677;",
      backgroundBase:
        "linear-gradient(51deg, rgba(192,208,22,1) 0%, rgba(173,189,74,1) 24%, rgba(124,129,142,1) 93%);",
    },
    light: {
      headerFont: "#1c3677",
      backgroundBase:
        "linear-gradient(51deg, rgba(192,208,22,1) 0%, rgba(173,189,74,1) 24%, rgba(124,129,142,1) 93%);",
    },
  };

  export const MODE = {
    LIGHT:
      "color: #1c3677; background: linear-gradient(51deg, rgba(192,208,22,1) 0%, rgba(173,189,74,1) 24%, rgba(124,129,142,1) 93%);",
    DARK: "color: gray; background: linear-gradient(51deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 24%, rgba(0,73,255,1) 93%)",
  };

  export const LIGHT =
    ".light-class {color: #1c3677; background: linear-gradient(51deg, rgba(192,208,22,1) 0%, rgba(173,189,74,1) 24%, rgba(124,129,142,1) 93%);}";

  export const  DARK =
    ".dark-class {color: gray; background: linear-gradient(51deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 24%, rgba(0,73,255,1) 93%);}";
  //
  export const FontStyle = {
    sansBase: "Arial, Helvetica, sans-serif",
  };

  export const PageMainStyle = `display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0.95rem;
  font-family: ${FontStyle.sansBase};
  ${toggleScreenBool ? MODE.LIGHT : MODE.DARK};`;
  export const PageNavStyle = `display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0;
  font-family: ${FontStyle.sansBase};
  ${toggleScreenBool ? MODE.LIGHT : MODE.DARK};`;
  export const PageHeaderStyle = `display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.95rem;
    overflow: hidden;
    top: 0px;
    width: 100%;
    font-family: ${FontStyle.sansBase};
    ${toggleScreenBool ? MODE.LIGHT : MODE.DARK};`;
  export const PageBodyStyle = `display: flex; 
    flex: 1; 
    flex-direction: column; 
    align-items: center; 
    padding: 0.025rem; 
    margin: 0; 
    width: 100%; 
    height: 100vh;
    font-family: ${FontStyle.sansBase};
    ${toggleScreenBool ? MODE.LIGHT : MODE.DARK};`;
  export const PageFooterStyle = `display: flex; 
      justify-content: space-around; 
      align-items: center; 
      width: 100%; 
      height: 5vh;
      position: fixed;
      bottom: 0.0em;
      font-family: ${FontStyle.sansBase};
      ${toggleScreenBool ? MODE.LIGHT : MODE.DARK};`;
  // background-color: #4e545c; color: #e5e8e8;
  export const PrimaryButtonStyle = `border-radius: 40px;
        font-size: 1.25rem;
        font-weight: 500;
        height: 30px;
        width: 150px;
        border: none;
        transition: all 0.2s linear;
        font-family: ${FontStyle.sansBase};
        ${toggleScreenBool ? MODE.LIGHT : MODE.DARK};`;
  //
  var PageUlItems = "color: red; list-style: none; text-decoration: none;";
  export const HoverButtonStyle = `${
    toggleScreenBool
      ? "color: gray; border: 2px solid blue;"
      : "color: white; border: 2px solid white;"
  }`;
  export const HoverOutButtonStyle = `color: gray; border: none;`;
  export const PageHeaderLeftStyle = `max-width: 20rem; padding: 0.95rem;`;
  export const PageHeaderCenterStyle = `max-width: 33rem; padding: 0.95rem;`;
  export const PageHeaderRightStyle = `max-width: 15rem; justify-content: center; padding-right: 5rem; color: red;`;