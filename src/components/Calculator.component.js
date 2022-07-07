import '../styles/calculator.css';

export default function Calculator(){
    return(
        <div className='background'>
        <main className='main-calculator'>
            <div className='shape-calculator'>

                <div className='actions-theme-container'>
                    <strong className='header-text'><span>calc</span></strong>
                    <div className='themes-class'>
                        <strong className='theme-text'><span>THEME</span></strong>

                        <div className='slider-container'>
                            <div className='theme-selection'>
                                <span className='selection-option first'>1</span>
                                <span className='selection-option'>2</span>
                                <span className='selection-option three'>3</span>
                            </div>
                        <div className='slider'>    
                            <div className='point-selection'></div>
                        </div>
                        </div>
                    </div>
                </div>

                <div className='visualizer-calculator'>
                    <output className='output-result' id='result-visualizer'></output>
                </div>

                <div className='dashboard-table-actions'>
                    <div className='buttons-sections'>
                        <div className='principal-numbers'>
                            <button className='button-calc'>9</button>
                            <button className='button-calc'>8</button>
                            <button className='button-calc'>7</button>
                            <button className='button-calc'>6</button>
                            <button className='button-calc'>5</button>
                            <button className='button-calc'>4</button>
                            <button className='button-calc'>3</button>
                            <button className='button-calc'>2</button>
                            <button className='button-calc'>1</button>
                        </div>
                        <button className='button-calc'>.</button>
                        <button className='button-calc'>0</button>
                        <button className='button-calc'>/</button>
                        <button className='button-calc'>x</button>
                        <button className='button-calc'>-</button>
                        <button className='button-calc'>+</button>
                        <button className='button special-action'><strong>DEL</strong></button>
                        <div className='base-buttons'>
                            <button className='button special-action'><strong>RESET</strong></button>
                            <button className='button special-action equal' ><strong>=</strong></button>
                        </div>
                    </div>
                </div>

            </div>

        </main>
        </div>
    );
}