export default function LargeImage({ photo }) {
  if (!photo) return null; //if there isn't an image chosen yet, this avoids error messages. just renders nothing

  return (
    <div className="large-image-container">
      <img
        className="large-image"
        src={photo.urls.regular}
        alt={photo.alt_description}
      />
    </div>
  );
}
