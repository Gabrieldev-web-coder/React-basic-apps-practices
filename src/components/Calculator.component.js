import "../styles/calculator.css";

export default function Calculator() {
  const originlTheme = () => {
    const background = document.getElementById("back");
    if (background?.style.getPropertyValue("--VeryDarkDesaturatedBlue")) {
      return;
    } else {
      background?.style.setProperty(
        "--VeryDarkDesaturatedBlue",
        "--veryLightGray"
      );
    }
  };

  return (
    <div id="back" className="background">
      <main className="main-calculator">
        <div className="shape-calculator">
          <div className="actions-theme-container">
            <strong className="header-text">
              <span>calc</span>
            </strong>
            <div className="themes-class">
              <strong className="theme-text">
                <span>THEME</span>
              </strong>

              <div className="slider-container">
                <div className="theme-selection">
                  <span
                    className="selection-option first"
                    onClick={originlTheme}
                  >
                    1
                  </span>
                  <span className="selection-option">2</span>
                  <span className="selection-option three">3</span>
                </div>
                <div className="slider">
                  <div className="point-selection"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="visualizer-calculator p-5 m-5">
            <output className="output-result" id="result-visualizer"></output>
          </div>

          <div className="dashboard-table-actions">
            <div className="buttons-section">
              <button className="button-calc nine">9</button>
              <button className="button-calc eight">8</button>
              <button className="button-calc seven">7</button>
              <button className="button-calc six">6</button>
              <button className="button-calc five">5</button>
              <button className="button-calc four">4</button>
              <button className="button-calc three">3</button>
              <button className="button-calc two">2</button>
              <button className="button-calc one">1</button>
              <button className="button-calc dot">.</button>
              <button className="button-calc zero">0</button>
              <button className="button-calc slash">/</button>
              <button className="button-calc ex">x</button>
              <button className="button-calc less">-</button>
              <button className="button-calc plus">+</button>
              <button className="button special-action del">
                <strong>DEL</strong>
              </button>
              <button className="button special-action reset-calc">
                <strong>RESET</strong>
              </button>
              <button className="button special-action equal">
                <strong>=</strong>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
