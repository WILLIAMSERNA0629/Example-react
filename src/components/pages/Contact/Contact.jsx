import React from "react";
import "./Contact.css";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from '@mui/material/Button';

const Contact = () => {
  return (
    <div className="form">
        <div className="title">
            <h1>Contact US</h1>
            <p>We want to hear from you!!</p>
            <p>your opinion is important for us</p>
        </div>
      <div className="block">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          className="fields"
        />
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          className="fields"
        />
      </div>
      <div className="block">
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
          className="fields"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          className="fields"
        />
      </div>
      <div>
      <TextareaAutosize
          aria-label="minimum height"
          minRows={10}
          placeholder="Comments"
          style={{ width: 540 }}
          className="comments"
        />
      </div>
      <Button variant="contained">Submit</Button>
    </div>
  );
};

export default Contact;
