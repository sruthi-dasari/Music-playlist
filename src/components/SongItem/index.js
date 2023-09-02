import {
  SongItemContainer,
  SongImageAndName,
  SongImage,
  SongNameAndType,
  SongName,
  SongGenre,
  SongDurationAndDelete,
  SongDuration,
  DeleteButton,
  DeleteIcon,
} from './styledComponents'

const SongItem = props => {
  const {songDetails} = props
  const {imageUrl, name, genre, duration} = songDetails

  const onClickDelete = () => {
    console.log('In onClickDelete')
    const {removeSong} = props
    const {id} = songDetails
    removeSong(id)
  }

  return (
    <SongItemContainer>
      <SongImageAndName>
        <SongImage src={imageUrl} alt="track" />
        <SongNameAndType>
          <SongName>{name}</SongName>
          <SongGenre>{genre}</SongGenre>
        </SongNameAndType>
      </SongImageAndName>
      <SongDurationAndDelete>
        <SongDuration>{duration}</SongDuration>
        <DeleteButton
          type="button"
          data-testid="delete"
          onClick={onClickDelete}
        >
          <DeleteIcon />
        </DeleteButton>
      </SongDurationAndDelete>
    </SongItemContainer>
  )
}

export default SongItem
