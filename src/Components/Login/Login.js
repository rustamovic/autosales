import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { Container as ContainerBase } from "../Misk/Layout";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "../../Assets/PNG/pradoG.png";
import logo from "../../Assets/SVG/logo.svg";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { makeLogin } from "../../Redux/Auth/AuthActions";
const Container = tw(
  ContainerBase
)`min-h-screen text-white font-medium flex justify-center`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;
const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0  bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

const Login = ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Sign In To TrustAuto",
  submitButtonText = "Sign In",
  SubmitButtonIcon = LoginIcon,
  forgotPasswordUrl = "#",
  signupUrl = "#",
  makeLogin,
  beginLogin,
  successLogin,
  failureLogin,
  posts,
}) => {
  const fetchData = useCallback(() => makeLogin());

  useEffect(() => {
    fetchData();
  }, [makeLogin]);

  console.log("post:", posts);
  return (
    <Container id="GColor" style={{ paddingTop: "65px" }}>
      <Content>
        <MainContainer>
          {/* <LogoLink href={logoLinkUrl}> */}
          <LogoImage src={logo} />
          {/* </LogoLink> */}
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              <SocialButtonsContainer></SocialButtonsContainer>
              <DividerTextContainer>
                <DividerText>Sign in with your e-mail</DividerText>
              </DividerTextContainer>
              <Form>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <SubmitButton type="submit">
                  <SubmitButtonIcon className="icon" />
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer>
      </Content>
    </Container>
  );
};

const mapState = (state) => {
  return {
    beginLogin: state.auth.beginLogin,
    succesLogin: state.auth.succesLogin,
    failureLogin: state.auth.failureLogin,
    posts: state.auth.posts,
  };
};

export default connect(mapState, { makeLogin })(Login);
