import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import tw from "twin.macro";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { MDBRow, MDBCol } from "mdbreact";
import { ReactComponent as SubmitButtonIcon } from "feather-icons/dist/icons/log-in.svg";
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-blue-500 text-gray-100 w-full py-4 rounded-lg hover:bg-blue-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    width: "25ch",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function LayoutTextFields() {
  const classes = useStyles();
  const [id, setId] = React.useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div className={classes.root}>
      <form className={classes.form} noValidate>
        <MDBRow>
          <MDBCol md="8">
            <TextField
              id="outlined-full-width"
              label="License plate"
              style={{ margin: 8 }}
              placeholder="VIN Number"
              helperText="Where is my VIN?"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </MDBCol>
          <MDBCol md="4">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">
                State ID
              </InputLabel>
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={id}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </MDBCol>
        </MDBRow>

        <SubmitButton type="submit">
          <SubmitButtonIcon className="icon" />
          <span className="text">What is my car worth</span>
        </SubmitButton>
      </form>
    </div>
  );
}
