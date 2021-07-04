import React, { useState } from "react";
import Accordion from "@material-ui/core/Accordion";
import Button from "@material-ui/core/Button";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Fab from "@material-ui/core/Fab";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import "./Employment.css";
import { TextArea } from "semantic-ui-react";
import SaveIcon from "@material-ui/icons/Save";

function Employment() {
  const [emps, setEmps] = useState(["emp1"]);

  const addMoreEmp = () => {
    setEmps((prev) => {
      return [...prev, `emp${prev.length}`];
    });
  };

  return (
    <div>
      <Fab
        color="secondary"
        aria-label="add"
        variant="extended"
        style={{ marginBottom: "20px" }}
        onClick={addMoreEmp}
      >
        <AddIcon /> Add More Emplyment History
      </Fab>
      {emps.map((emp, i) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${i}a-content`}
            id={`panel${i}a-header`}
          >
            Employment {i + 1}
          </AccordionSummary>
          <AccordionDetails>
            <div className="employment__fields">
              <div className="sideHeader__fields">
                <TextField fullWidth label="Company Name" variant="outlined" />
              </div>
              <div className="sideHeader__fields">
                <TextField fullWidth label="Position" variant="outlined" />
              </div>
              <div className="sideHeader__fields">
                <TextField fullWidth label="Start Date" variant="outlined" />
              </div>
              <div className="sideHeader__fields">
                <TextField fullWidth label="End Date" variant="outlined" />
              </div>
              <div className="sideHeader__fields">
                <TextField
                  fullWidth
                  label="Technologies Used"
                  variant="outlined"
                />
              </div>
              <div className="sideHeader__fields">
                <TextArea
                  placeholder="Describe your tasks and responsibilities!"
                  style={{ minHeight: 200, minWidth: 400 }}
                />
              </div>
              <div className="sideHeader__fields">
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<SaveIcon />}
                  style={{ marginLeft: "10px" }}
                >
                  Update
                </Button>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default Employment;
