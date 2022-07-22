import './index.css'

const ThumbnailItem = props => {
  const {isActive, showActiveThumbnail, imageDetails} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails

  const activeThumbnail = isActive ? `thumbnail active` : 'thumbnail'

  const onClickThumbnail = () => {
    showActiveThumbnail(id)
  }
  return (
    <li className="thumbnail-list">
      <button
        className="thumbnail-button"
        type="button"
        onClick={onClickThumbnail}
      >
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeThumbnail}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
