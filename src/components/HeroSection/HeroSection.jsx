import HeroImage from "../../assets/images/bg0.jpg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="d-flex">
        <div className="col-md-6 pb-4">
          <img src={HeroImage} alt="hero image" className="w-100" />
        </div>

        <div className="col-md-6 mt-5">
          <div className="form-wrapper">
            <h1 className="text-light">Need An Electrician?</h1>

            <p className="text-light">
              Professional service for all your home electrical needs. Please
              fill the form bellow for a free, no obligation quote.
            </p>

            <form
              id="register-form"
              className="register-form register"
              method=""
            >
              <input
                className="register-input name-input"
                required=""
                name="register_names"
                placeholder="Your Name*"
                type="text"
              />
              <input
                className="register-input name-email"
                required=""
                name="register_email"
                placeholder="Email Adress*"
                type="email"
              />
              <input
                className="register-input name-input"
                required=""
                name="register_phone"
                placeholder="Phone Number*"
                type="text"
              />
              <textarea
                className="register-comment"
                rows={2}
                cols={20}
                name="register_message"
                placeholder="Your Message..."
                defaultValue={""}
              />
              <input
                defaultValue="Request Free Quote Now"
                className="register-submit"
                type="submit"
                value="Request Free Quote Now"
              />
            </form>
            <p className="terms">Competitive On Price • TrustMark Accredited</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
