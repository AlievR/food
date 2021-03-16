import React from 'react';
import './About.scss';
import '../../App.scss';
import welcome1 from '../../Image/About/welcome-1.jpg'
import welcome2 from '../../Image/About/welcome-2.jpg'
import img1 from '../../Image/About/welcome-1.jpg'
import img2 from '../../Image/About/welcome-2.jpg'

import { Link } from "react-router-dom";

function About() {
    return (
        <div className="app-about">
            <div className="app-about__intro">
                <div className="container">
                    <div className="app-about__wrapper">
                        <div className="app-about__fone">
                            <img 
                            className="app-about__fone-img"
                            src={img1} />
                        </div>
                        <div className="app-about__text">
                            <div className="app-about__cort">Welcome</div>
                            <span className="app-about__title">О нас</span>
                            <span className="app-about__suptitle">
                                «ARDA » - это особый мир со своим очарованием и колоритом.
                                Оказавшись здесь, попадаешь в мир утонченности, эстетики и высокого стиля. Важнейший элемент успеха всего ресторана – это сочетание атмосферы уюта и соприкосновение с высшим искусством приготовления еды.
                                Наши повара предложат вам идеальную кухню, лучшие блюда из свежих продуктов по старинным рецептам. Мы предлагаем Вам хинкали, хачапури,жареную рыбу-мясо-овощи и многое другое.
                            </span>
                        </div>

                        <div className="app-about__fone">
                            <img 
                            className="app-about__fone-img"
                            src={img2} />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default About;
