import { useState } from "react";
import Work1 from "../../assets/images/work1.jpg";
import Work2 from "../../assets/images/work2.jpg";
import Work3 from "../../assets/images/work3.jpg";
import Work4 from "../../assets/images/work4.jpg";
import Work5 from "../../assets/images/work5.jpg";
import Work6 from "../../assets/images/work6.jpg";

import "./ProjectSection.css";
import ImageSlider from "../ImageSlider/ImageSlider";

const ProjectSection = () => {
  const [sliderVisible, setSliderVisible] = useState(false);
  const [selectedImg, setSelectedImg] = useState(0);
  const images = [Work1, Work2, Work3, Work4, Work5, Work6];

  return (
    <>
      <section className="projects-section" id="gallery">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center padding-bottom-20">
              <h2 className="section-title mb-2">Our Latest Projects</h2>
              <p className="section-subtitle">
                Here are a few examples of our latest work.
              </p>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row gallery">
            {images.map((image, index) => (
              <div key={index} className="col-md-4 col-sm-6 col-xs-12">
                <figure
                  onClick={() => {
                    document.body.style.overflow = "hidden";
                    setSelectedImg(index);
                    setSliderVisible(true);
                  }}
                >
                  <div className="popup-gallery popup-gallery-rounded portfolio-pic">
                    <img src={image} className="width-100" alt="pic" />
                    <span className="eye-wrapper">
                      <i
                        className="fa fa-search-plus eye-icon"
                        style={{ fontSize: 38 }}
                      />
                      iconaaaaaaaaaaaaaaaaaaa
                    </span>
                  </div>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </section>
      {sliderVisible && (
        <ImageSlider
          selectedImage={selectedImg}
          setActiveImage={setSelectedImg}
          images={images}
          setSliderVisible={setSliderVisible}
        />
      )}
    </>
  );
};

export default ProjectSection;
