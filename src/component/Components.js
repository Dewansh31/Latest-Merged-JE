import styled from 'styled-components';

 export const Container = styled.div`
 
 background-color: #fff;
 border-radius: 10px;
 box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
 position: relative;
 overflow: hidden;
 width: 800px;
 max-width: 100%;
 min-height: 500px;
 `;

 export const SignUpContainer = styled.div`
  position: absolute;
  
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
  bottom:65px;
 
  ${props => props.signinIn !== true ? `
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
  ` 
  : null}
 `;
 

 export const SignInContainer = styled.div`
 
 height: 100%;
 transition: all 0.6s ease-in-out;
 left: 0;
 width: 50%;
 z-index: 2;
 position: relative;
    bottom: 55px;
 ${props => (props.signinIn !== true ? `transform: translateX(100%);` : null)}
 `;
 
 export const Form = styled.form`
 background-color: #ffffff;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 padding: 0 50px;
 height: 100%;
 text-align: center;
 `;
 
 export const Title = styled.h1`
 font-weight: bold;
 margin: 0;
 

 `;
 
 export const Input = styled.input`
 background-color: #eee;
 border: none;
 padding: 12px 15px;
 margin: 8px 0;
 width: 100%;
 `;
 

 export const Button = styled.button`
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background-color: #ff4b2b;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    &:active{
        transform: scale(0.95);
    }
    &:focus {
        outline: none;
    }
 `;
 export const GhostButton = styled(Button)`
 background-color:orangered;
 border-color: #ffffff;
 border-color:orangered;
 `;
 
 export const Anchor = styled.a`
 color: #333;
 font-size: 14px;
 text-decoration: none;
 margin: 15px 0;
 `;
 export const OverlayContainer = styled.div`
position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;

${props =>
  props.signinIn !== true ? `transform: translateX(-100%);` : null}
`;

export const Overlay = styled.div`
background: #ff416c;
background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
background: linear-gradient(to right, #ff4b2b, #ff416c);
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0;
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
${props => (props.signinIn !== true ? `transform: translateX(50%);` : null)}
`;
 
 export const OverlayPanel = styled.div`
     position: absolute;
     display: flex;
     align-items: center;
     justify-content: center;
     flex-direction: column;
     padding: 0 40px;
     text-align: center;
     top: 0;
     height: 100%;
     width: 50%;
     transform: translateX(0);
     transition: transform 0.6s ease-in-out;
 `;

 export const LeftOverlayPanel = styled(OverlayPanel)`
 
   transform: translateX(-20%);
   Background-image:url("https://image3.jdomni.in/banner/12082021/2B/65/38/55959E589A5BCD0967CD713FAB_1628768531605.jpg?output-format=webp");
   ${props => props.signinIn !== true ? `transform: translateX(0);` : null}
   background-position:center;
 `;

 export const RightOverlayPanel = styled(OverlayPanel)`
     right: 0;
     transform: translateX(0);
     Background-image:url("https://image2.jdomni.in/banner/12082021/E0/B3/F0/5786DC8ACCB769F95D7B94E399_1628770413058.png?output-format=webp");
     ${props => props.signinIn !== true ? `transform: translateX(20%);` : null}
     background-position:center;
 `;

 export const Paragraph = styled.p`
 font-size: 14px;
   font-weight: 100;
   line-height: 20px;
   letter-spacing: 0.5px;
   margin: 20px 0 30px
   
 `;