import styled from '@emotion/styled';

export const OptionList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  gap: 10px;
  margin-top: 10px;
`;

export const OptionItem = styled.li``;
export const OptionButton = styled.button`
  padding: 5px 10px;
  border: 1px solid #aaa;
  border-radius: 5px;

  background-color: transparent;
  cursor: pointer;

  transition: color 250ms ease-in-out, background-color 250ms ease-in-out;

  :hover {
    color: #fff;
    background-color: #55e;
  }
`;
