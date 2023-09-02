import styled from 'styled-components'

import {AiOutlineDelete} from 'react-icons/ai'

export const SongItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin-bottom: 30px;
`

export const SongImageAndName = styled.div`
  display: flex;
`

export const SongImage = styled.img`
  height: 170px;
  width: 250px;
  margin-right: 40px;
`

export const SongNameAndType = styled.div``

export const SongName = styled.p`
  color: #ffffff;
  font-family: Roboto;
  font-size: 35px;
  font-weight: 500;
`

export const SongGenre = styled.p`
  color: #3b82f6;
  font-family: Roboto;
  font-size: 30px;
`

export const SongDurationAndDelete = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 130px;
`

export const SongDuration = styled.p`
  color: #ffffff;
  font-size: 35px;
`

export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
`

export const DeleteIcon = styled(AiOutlineDelete)`
  height: 30px;
  width: 30px;
  color: #ffffff;
  cursor: pointer;
`
