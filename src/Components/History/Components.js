import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBContainer,
  MDBLink,
} from "mdbreact";

const CardExample = () => {
  return (
    <MDBContainer style={{ marginTop: "100px" }} className="text-secondary">
      <h1 className="h1-responsive my-4 text-secondary">
        History of submitted vehicles
      </h1>
      <MDBRow>
        <MDBCol md="4">
          <MDBCard>
            <MDBCardImage
              top
              src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg"
              overlay="white-slight"
              hover
              waves
              alt="MDBCard image cap"
            />
            <MDBCardBody>
              <MDBCardTitle>Card Title</MDBCardTitle>
              <hr />
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </MDBCardText>
              <MDBLink
                to="/Fullhistory"
                className="black-text d-flex justify-content-end"
              >
                <h5>
                  Read more
                  <MDBIcon icon="angle-double-right" className="ml-2" />
                </h5>
              </MDBLink>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default CardExample;
