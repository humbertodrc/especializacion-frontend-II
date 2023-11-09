import styled from 'styled-components';


interface Props{
  isPrimary?: boolean;
}

export const ButtonStyled = styled.button<Props>`
  padding: 12px 24px;
  font-size: 24px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  margin: 16px 0;
  color:#fff;
  border: 1px solid ${(props) => props.isPrimary ? "#FF1493" : "#00008B"};
  background-color: ${(props) => props.isPrimary ? "#FF1493" : "#00008B"};

  &:hover,
  &:focus{
    border: 1px solid ${(props) => props.isPrimary ? "#FF69B4" : "#0000CD"};
    background-color: ${(props) => props.isPrimary ? "#FF69B4" : "#0000CD"};
  }

  svg{
    margin-right: 16px;
  }

`

export const ButtonStyledOutline = styled(ButtonStyled)`
  color: ${(props) => props.isPrimary ? "#FF1493" : "#00008B"};
  background-color: transparent;
  border: 1px solid ${(props) => props.isPrimary ? "#FF1493" : "#00008B"};
`