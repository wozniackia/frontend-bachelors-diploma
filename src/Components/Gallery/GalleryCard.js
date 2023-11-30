import PropTypes from "prop-types";

function GalleryCard({ imgSrc }) {
  return (
    <div>
      <img
        className="h-auto max-w-full rounded-lg"
        src={imgSrc}
        alt=""
      />
    </div>
  );
}

GalleryCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default GalleryCard;
