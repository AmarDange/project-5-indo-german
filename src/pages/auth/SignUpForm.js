// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";

// import styles from "../../styles/SignInUpForm.module.css";
// import btnStyles from "../../styles/Button.module.css";
// import appStyles from "../../App.module.css";

// import {
//   Form,
//   Button,
//   Image,
//   Col,
//   Row,
//   Container,
//   Alert,
// } from "react-bootstrap";
// import axios from "axios";
// import { useRedirect } from "../../hooks/useRedirect";

// const SignUpForm = () => {
//   useRedirect("loggedIn");
//   const [signUpData, setSignUpData] = useState({
//     username: "",
//     password1: "",
//     password2: "",
//   });
//   const { username, password1, password2 } = signUpData;

//   const [errors, setErrors] = useState({});

//   const history = useHistory();

//   const handleChange = (event) => {
//     setSignUpData({
//       ...signUpData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post("/dj-rest-auth/registration/", signUpData);
//       history.push("/signin");
//     } catch (err) {
//       setErrors(err.response?.data);
//     }
//   };

//   return (
//     <Row className={styles.Row}>
//       <Col className="my-auto py-2 p-md-2" md={6}>
//         <Container className={`${appStyles.Content} p-4 `}>
//           <h1 className={styles.Header}>sign up</h1>

//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="username">
//               <Form.Label className="d-none">username</Form.Label>
//               <Form.Control
//                 className={styles.Input}
//                 type="text"
//                 placeholder="Username"
//                 name="username"
//                 value={username}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             {errors.username?.map((message, idx) => (
//               <Alert variant="warning" key={idx}>
//                 {message}
//               </Alert>
//             ))}

//             <Form.Group controlId="password1">
//               <Form.Label className="d-none">Password</Form.Label>
//               <Form.Control
//                 className={styles.Input}
//                 type="password"
//                 placeholder="Password"
//                 name="password1"
//                 value={password1}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             {errors.password1?.map((message, idx) => (
//               <Alert key={idx} variant="warning">
//                 {message}
//               </Alert>
//             ))}

//             <Form.Group controlId="password2">
//               <Form.Label className="d-none">Confirm password</Form.Label>
//               <Form.Control
//                 className={styles.Input}
//                 type="password"
//                 placeholder="Confirm password"
//                 name="password2"
//                 value={password2}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             {errors.password2?.map((message, idx) => (
//               <Alert key={idx} variant="warning">
//                 {message}
//               </Alert>
//             ))}

//             <Button
//               className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
//               type="submit"
//             >
//               Sign up
//             </Button>
//             {errors.non_field_errors?.map((message, idx) => (
//               <Alert key={idx} variant="warning" className="mt-3">
//                 {message}
//               </Alert>
//             ))}
//           </Form>
//         </Container>

//         <Container className={`mt-3 ${appStyles.Content}`}>
//           <Link className={styles.Link} to="/signin">
//             Already have an account? <span>Sign in</span>
//           </Link>
//         </Container>
//       </Col>
//       <Col
//         md={6}
//         className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
//       >
//         <Image
//           className={`${appStyles.FillerImage}`}
//           src={"https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"}
//         />
//       </Col>
//     </Row>
//   );
// };

// export default SignUpForm;


// Sign up form functionality credit goes to CI's Moments Project
import React, { useState } from "react";
import styles from "../../styles/SignUpForm.module.css";
import logoImage from "../../assets/logo.jpg";
import btnStyles from "../../styles/Button.module.css";
// import shadowStyles from "../../App.module.css";
import {Form, Button, Container, Alert} from 'react-bootstrap';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
// import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useRedirect } from "../../hooks/useRedirect";

const SignUpForm = () => {
  useRedirect("loggedIn");
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});

  const { username, password1, password2 } = signUpData;

  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/Signin");
    } catch (err) {
      console.log(err)
      setErrors(err.response?.data);
      if (err.response?.status === 500) {
        history("/500");
      }
    }
  };

  return (
    <Container className={styles.Container}>
    {/* <Container className={`bg-white col-md-8 ${shadowStyles.Shadow}`}> */}
      <Row className="p-4 mt-5 justify-content-md-center">
        <Col className="text-center">
          <Image className={styles.LogoImage} src={logoImage} />
          <h1 className="mb-3">Sign Up</h1>
          <Row className="justify-content-center">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username" className="text-left mb-2">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="password1" className="text-left mb-2">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password1"
                  value={password1}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password1?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="password2" className="text-left">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm password"
                  name="password2"
                  value={password2}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password2?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <br />
              <Button
                className={btnStyles.Btn}
                aria-label="Click here to sign up!"
                variant="primary"
                type="submit"
              >
                Sign me up
              </Button>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Row>
          <Row className="mt-4 justify-content-center">
            <p>
              Already have an account?{" "}
              <span>
                <Link
                  className={styles.Link}
                  aria-label="Click here to log in instead"
                  to="/signin"
                >
                  Login
                </Link>
              </span>{" "}
              instead!
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUpForm;
