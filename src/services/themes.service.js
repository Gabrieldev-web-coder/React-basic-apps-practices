class Themes {
  constructor() {}

  originlTheme() {
    const background = document.getElementById("back");
    background.style.backgroundColor = "var(--VeryDarkDesaturatedBlue)";
  }

  secondlTheme() {
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
    const btns = document.getElementsByClassName("theme-change");
    mainCalculator.style.color = "var(--VeryDarkBlue)";
    background.style.backgroundColor = "var(--backGround2)";
    slider.style.backgroundColor = "var(--tableTheme2)";
    vizualizer.style.backgroundColor = "var(--veryLightGray)";
    mainCalculator.style.backgroundColor = "transparent";
    dashBoardTable.style.backgroundColor = "var(--tableTheme2)";
    Array.from(btns).forEach((element) => {
      element.style = `
      background-color:var(--green) !important;
      box-shadow:0px 2px 0px 1px var(--greenShadow);
      `;
    });
  }

  thirdTheme() {
    const background = document.getElementById("back");
    background.style.backgroundColor = "var(--VeryDarkBlue)";
  }
}

const theme = new Themes();

export default theme;
