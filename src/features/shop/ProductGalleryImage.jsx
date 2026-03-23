import { useState } from "react";
import Spinner from "../../ui/Spinner";

function ProductGalleryImage({ onClick, className, key, src }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <>
      {!imgLoaded && (
        <div className={`${className} modal-img-box`}>
          <Spinner />
        </div>
      )}
      <img
        onLoad={() => setImgLoaded(true)}
        onClick={onClick}
        className={imgLoaded ? className : ""}
        key={key}
        src={src}
      />
    </>
  );
}

export default ProductGalleryImage;
