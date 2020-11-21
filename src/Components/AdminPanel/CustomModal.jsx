import React from "react";
import { useSelector } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import { handlingDataMine } from "../../Redux/seller/sellerSelector";

const CustomModal = ({ open, handleClose }) => {
  const handlingData = useSelector(handlingDataMine);

  console.log(handlingData);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll="paper"
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle id="scroll-dialog-title">
        Vin: {handlingData?.VIN}
      </DialogTitle>
      <DialogContent dividers={true}>
        <div style={{display: "flex", flexDirection: "row"}}>
          {handlingData.Photos &&
            handlingData.Photos.map((photo, index) => {
              return (
                <div style={{ width: "100%" }} key={index}>
                  <img
                    style={{ width: "90%", height: "150px", margin: "0 auto" }}
                    src={photo}
                    alt="photo"
                  />
                </div>
              );
            })}
        </div>
        <div
          className="d-flex flex-row"
          style={{ width: "95%", marginTop: "5px" }}
        >
          <p style={{ width: "45%" }}>
            <b>Firstname:</b> {handlingData?.FirstName}
          </p>
          <p style={{ marginLeft: "10px", width: "45%" }}>
            <b>Lastname:</b> {handlingData?.LastName}
          </p>
        </div>

        <div
          className="d-flex flex-row"
          style={{ width: "95%", marginTop: "5px" }}
        >
          <p style={{ width: "45%" }}>
            <b>SellDate:</b> {handlingData?.SellDate}
          </p>
          <p style={{ marginLeft: "10px", width: "45%" }}>
            <b>Condition:</b> {handlingData?.VehicleCondition}
          </p>
        </div>

        <div
        style={{ width: "95%", marginTop: "5px" }}
          className="d-flex flex-row"
        >
          <p style={{ width: "45%" }}>
            <b>Mileage:</b> {handlingData?.carMileage}
          </p>
          <p style={{ marginLeft: "10px", width: "45%" }}>
            <b>Model:</b> {handlingData?.carModel}
          </p>
        </div>

        <div
          className="d-flex flex-row"
          style={{ width: "95%", marginTop: "5px" }}
        >
          <p style={{ width: "45%" }}>
            <b>Email:</b> {handlingData?.emailAddress}
          </p>
          <p style={{ marginLeft: "10px", width: "45%" }}>
            <b>Price:</b> {handlingData?.expectedPrice}
          </p>
        </div>

        <div
          className="d-flex flex-row"
          style={{ width: "95%", marginTop: "5px" }}
        >
          <p style={{ width: "45%" }}>
            <b>Transmision:</b> {handlingData?.transmision}
          </p>
          <p style={{ marginLeft: "10px", width: "45%" }}>
            <b>PhoneNumber:</b> {handlingData?.phoneNumber}
          </p>
        </div>

        <div
          className="d-flex flex-row"
          style={{ width: "95%", marginTop: "5px" }}
        >
          <p style={{ width: "45%" }}>
            <b>Key:</b> {handlingData?.key}
          </p>
          <p style={{ marginLeft: "10px", width: "45%" }}>
            <b>Zip Code:</b> {handlingData?.postCode}
          </p>
        </div>

        <div
          className="d-flex flex-row"
          style={{ width: "95%", marginTop: "5px" }}
        >
          <p style={{ width: "45%" }}>
            <b>Color:</b> {handlingData?.carColor}
          </p>
        </div>

        <div
          className="d-flex flex-row"
          style={{ width: "95%", marginTop: "5px" }}
        >
          <p style={{ width: "90%" }}>
            <b>Message:</b> {handlingData?.message}
          </p>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomModal;
