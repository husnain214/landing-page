import "./ImageSlider.css";

const ImageSlider = ({
  images,
  selectedImage,
  setActiveImage,
  setSliderVisible,
}) => {
  return (
    <div className="slider-container">
      <button
        onClick={() => {
          if (selectedImage - 1 < 0) setActiveImage(images.length - 1);
          else setActiveImage((prev) => prev - 1);
        }}
      >
        left
      </button>

      <div>
        <button
          onClick={() => {
            setSliderVisible(false);
            document.body.style.overflow = "";
          }}
          className="d-block ms-auto mb-2"
        >
          close
        </button>
        {images.map((image, index) => (
          <img
            src={image}
            className={index === selectedImage ? "" : "d-none"}
            key={index}
            alt="image"
          />
        ))}
        <p className="text-light text-end">
          {selectedImage + 1} of {images.length}
        </p>
      </div>

      <button
        onClick={() => {
          if (selectedImage + 1 >= images.length) setActiveImage(0);
          else setActiveImage((prev) => prev + 1);
        }}
      >
        right
      </button>
    </div>
  );
};

export default ImageSlider;
