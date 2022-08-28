import styled from "styled-components";
import GlobalStyle from "./ui/GlobalStyles";
import { Breakpoint } from "./ui/breakpoints";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Form } from "./components/Form/Form";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Main />
        <Form />
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  place-content: center;
  flex-direction: column;
  margin-inline: 30%;
  padding: 30px 20px 53px;

  @media (max-width: ${Breakpoint.MD}) {
    margin-inline: 0;
  }
`;
