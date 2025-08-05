import { Modal } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Style from "../../coursesStyle/home.module.css";
import Image from "next/image";
const GalleryPopup = ({ images, onClose }) => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    speed: 300,
    infinite: true,
  };
  return (
    <Modal show={true} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Gallery</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0">
        <Slider {...settings} className="galleryBox">
          {images.map((item, index) => {
            return (
              <>
                <div key={index}>
                  <Image
                    src={item[0]}
                    alt={item[0]}
                    className={`${Style.galleryHeight} w-100`}
                    width={500}
                    height={400}
                  />
                </div>
              </>
            );
          })}
        </Slider>
      </Modal.Body>
    </Modal>
  );
};

export default GalleryPopup;
