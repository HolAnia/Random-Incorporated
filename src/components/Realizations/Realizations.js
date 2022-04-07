import React from 'react';
import { ExampleCard, ExamplesWrapper, RealizationMainText, RealizationsWrapper, RealizationText } from './RealiztionsStyles';
import img1 from '../../images/1.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';
import { changeColor, backColor } from '../../assets/cursorColor';

const Realizations = () => {

    return (
        <RealizationsWrapper onMouseEnter = { changeColor } onMouseLeave = { backColor }>
            <RealizationMainText>
                Zainspiruj się <span>naszymi realizacjami</span>
            </RealizationMainText>
            <RealizationText>
                Wybierz model i kolor <span>rgb</span> idealnie dopasowanych do projektu Twojego wymarzonego domu. Poznaj&nbsp;również szeroki asortyment rolet okiennych.
            </RealizationText>
            <ExamplesWrapper onMouseEnter = { backColor } onMouseLeave = { changeColor }>
                <ExampleCard url = { img1 } />
                <ExampleCard url = { img2 } />
                <ExampleCard url = { img3 } />
                <ExampleCard url = { img4 } />
                
            </ExamplesWrapper>
        </RealizationsWrapper>
    )
};

export default Realizations;
