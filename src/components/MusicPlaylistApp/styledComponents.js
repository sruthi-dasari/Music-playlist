import styled from 'styled-components'

import {AiOutlineSearch} from 'react-icons/ai'

export const MainContainer = styled.div``

export const UpperContainer = styled.div`
  height: 60vh;
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 70px;
`

export const Name = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 70px;
  font-weight: 500;
  margin: 0px;
`

export const Designation = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-size: 45px;
  font-weight: 400;
  margin: 0px;
  padding-bottom: 40px;
`
export const LowerContainer = styled.div`
  background-color: #152850;
  padding: 40px 70px;
`

export const TitleAndSearchboxContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h1`
  color: #ffffff;
  font-family: Roboto;
  font-size: 45px;
  font-weight: 400;
  margin-top: 0px;
`

export const SearchContainer = styled.div`
  height: 45px;
  min-width: 300px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  border: 1px solid #ffffff;
  padding: 10px 20px;
`

export const SearchInput = styled.input`
  background: transparent;
  border: none;
  font-size: 20px;
  outline: none;
  color: #ffffff;
`

export const SearchIcon = styled(AiOutlineSearch)`
  height: 25px;
  width: 25px;
  color: #ffffff;
`

export const SongsContainer = styled.ul`
  display: flex;
  flex-direction: column;
`

export const EmptySongsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  width: 100vw;
`

export const NoSongsHeading = styled.p`
  color: #ffffff;
  font-family: Roboto;
  font-size: 65px;
  font-weight: 500;
`
