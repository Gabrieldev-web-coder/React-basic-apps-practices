class Themes {
  constructor() {}

  originalTheme() {
    const background = document.getElementById("back");
    const mainCalculator = document
      .getElementsByClassName("main-calculator")
      .item(0);
    const dashBoardTable = document
      .getElementsByClassName("dashboard-table-actions")
      .item(0);
    const vizualizer = document
      .getElementsByClassName("visualizer-calculator")
      .item(0);
    const slider = document.getElementsByClassName("slider").item(0);
    const pointSelection = document
      .getElementsByClassName("point-selection")
      .item(0);
    const btns = document.getElementsByClassName("theme-change");
    const btnsCalc = document.getElementsByClassName("button-calc");
    const equalBtn = document.getElementsByClassName("equal").item(0);

    mainCalculator.style.color = "var(--LightGrayishBlue3)";
    background.style.backgroundColor = "var(--VeryDarkDesaturatedBlue)";
    pointSelection.style.backgroundColor = "var(--red)";
    pointSelection.style.transform = "translateX(0px)";
    slider.style.backgroundColor = "var(--VeryDarkBlue)";
    vizualizer.style.backgroundColor = "var(--VeryDarkBlue)";
    dashBoardTable.style.backgroundColor = "var(--VeryDarkBlue)";
    Array.from(btnsCalc).forEach((element) => {
      element.style = `
      color:var(--VeryDarkGrayishBlue2);
      background-color:var(--brown) !important;
      box-shadow:0px 2px 0px 0px rgb(174 164 162);
      `;
    });
    Array.from(btns).forEach((element) => {
      element.style = `
      background-color:var(--VeryDarkGrayishBlue) !important;
      box-shadow:0px 2px 0px 0px var(--VeryDarkGrayishBlue2);
      `;
    });
    equalBtn.style.color = "var(--LightGrayishBlue3)";
    equalBtn.style.backgroundColor = "var(--red)";
    equalBtn.style.boxShadow = " 0px 2px 0px 0px var(--moreRed)";
  }

  lightTheme() {
    const background = document.getElementById("back");
    const mainCalculator = document
      .getElementsByClassName("main-calculator")
      .item(0);
    const dashBoardTable = document
      .getElementsByClassName("dashboard-table-actions")
      .item(0);
    const vizualizer = document
      .getElementsByClassName("visualizer-calculator")
      .item(0);
    const slider = document.getElementsByClassName("slider").item(0);
    const pointSelection = document
      .getElementsByClassName("point-selection")
      .item(0);
    const btns = document.getElementsByClassName("theme-change");
    const btnsCalc = document.getElementsByClassName("button-calc");
    const equalBtn = document.getElementsByClassName("equal").item(0);

    mainCalculator.style.color = "var(--VeryDarkBlue)";
    background.style.backgroundColor = "var(--backGround2)";
    pointSelection.style.backgroundColor = "var(--red)";
    pointSelection.style.transform = "translateX(38px)";
    slider.style.backgroundColor = "var(--tableTheme2)";
    vizualizer.style.backgroundColor = "var(--veryLightGray)";
    dashBoardTable.style.backgroundColor = "var(--tableTheme2)";
    Array.from(btnsCalc).forEach((element) => {
      element.style = `
      color:var(--VeryDarkGrayishBlue2);
      background-color:var(--brown) !important;
      box-shadow:0px 2px 0px 0px rgb(174 164 162);
      `;
    });
    Array.from(btns).forEach((element) => {
      element.style = `
      background-color:var(--green) !important;
      box-shadow:0px 2px 0px 0px var(--greenShadow);
      `;
    });
    equalBtn.style.color = "var(--LightGrayishBlue3)";
    equalBtn.style.backgroundColor = "var(--red)";
    equalBtn.style.boxShadow = " 0px 2px 0px 0px var(--moreRed)";
  }

  darkTheme() {
    const background = document.getElementById("back");
    const mainCalculator = document
      .getElementsByClassName("main-calculator")
      .item(0);
    const dashBoardTable = document
      .getElementsByClassName("dashboard-table-actions")
      .item(0);
    const vizualizer = document
      .getElementsByClassName("visualizer-calculator")
      .item(0);
    const slider = document.getElementsByClassName("slider").item(0);
    const pointSelection = document
      .getElementsByClassName("point-selection")
      .item(0);
    const btns = document.getElementsByClassName("theme-change");
    const btnsCalc = document.getElementsByClassName("button-calc");
    const equalBtn = document.getElementsByClassName("equal").item(0);

    mainCalculator.style.color = "var(--fontColorNegative)";
    background.style.backgroundColor = "var(--purpleBack)";
    pointSelection.style.backgroundColor = "var(--cyan)";
    pointSelection.style.transform = "translateX(75px)";
    slider.style.backgroundColor = "var(--purpleLight)";
    vizualizer.style.backgroundColor = "var(--purpleLight)";
    dashBoardTable.style.backgroundColor = "var(--purpleLight)";
    Array.from(btnsCalc).forEach((element) => {
      element.style = `
      color:var(--fontColorNegative);
      background-color:var(--buttonBack) !important;
      box-shadow:0px 2px 0px 0px var(--buttonShadow);
      `;
    });
    Array.from(btns).forEach((element) => {
      element.style = `
      background-color:var(--purpleVeryLight) !important;
      box-shadow:0px 2px 0px 0px var(--purpleShadowSpecial);
      `;
    });
    equalBtn.style.color = "var(--purpleBack)";
    equalBtn.style.backgroundColor = "var(--cyan)";
    equalBtn.style.boxShadow = " 0px 2px 0px 0px var(--cyanShadow)";
  }
}

const theme = new Themes();

export default theme;
