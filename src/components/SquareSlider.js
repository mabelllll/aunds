import Swiper, { Pagination } from "swiper";
import { ProjectSlide } from './ProjectSlide';

var swiper = new Swiper(".swiper-container", {
    modules: [ Pagination ],
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    grabCursor: true,
});

export const SquareSlider = ({ data }) => {
    return (
        <section className="section projects main-section">
            <div className="swiper-container swiper swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events" >
                <div className="swiper-wrapper">
                    {data.images.map((element, index) => {
                        return (
                            <ProjectSlide
                                key={index}
                                title={element.title}
                                subtitle={element.subtitle}
                                url={element.image.url}
                            />
                        );
                    })}
                </div>
                <div className="swiper-pagination"></div>
            </div >
        </section>
    );
};
