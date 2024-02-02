import PropTypes from "prop-types";

export const Feature = ({feature: feature}) => {
    console.log(feature);
  return (
        <div key={feature.id} className="feature-item">
          <img src={feature.iconSrc} alt={feature.altText} className="feature-icon" />
          <h3 className="feature-item-title">{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.object.isRequired,
};