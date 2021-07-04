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
import { useDispatch, useSelector } from "react-redux";
import { addEmpHistory, selectDetails } from "../../features/detailSlice";

function Employment() {
  const [emps, setEmps] = useState([]);
  const [companyName, setComapnyName] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [description, setDescription] = useState("");

  const empHistory = useSelector(selectDetails);
  const dispatch = useDispatch();

  const addMoreEmp = () => {
    // console.log({
    //   empId: `emp${empHistory.employmentHistory.length + 1}`,
    //   company: companyName,
    //   position,
    //   startDate,
    //   endDate,
    //   technologies,
    //   description,
    // });
    dispatch(
      addEmpHistory({
        id: `emp${empHistory.employmentHistory.length + 1}`,
        company: companyName,
        position,
        startDate,
        endDate,
        technologies,
        description,
      })
    );
    // setEmps((prev) => {
    //   return [...prev, `emp${prev.length}`];
    // });
  };
  console.log(`emp${empHistory.employmentHistory.length + 1}`);

  return (
    <div>
      <div className="employment__fields">
        <div className="sideHeader__fields">
          <TextField
            fullWidth
            label="Company Name"
            variant="outlined"
            value={companyName}
            onChange={(e) => setComapnyName(e.target.value)}
          />
        </div>
        <div className="sideHeader__fields">
          <TextField
            fullWidth
            label="Position"
            variant="outlined"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </div>
        <div className="sideHeader__fields">
          <TextField
            fullWidth
            label="Start Date"
            variant="outlined"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        <div className="sideHeader__fields">
          <TextField
            fullWidth
            label="End Date"
            variant="outlined"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="sideHeader__fields">
          <TextField
            fullWidth
            label="Technologies Used"
            variant="outlined"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
          />
        </div>
        <div className="sideHeader__fields">
          <TextArea
            placeholder="Describe your tasks and responsibilities!"
            style={{ minHeight: 200, minWidth: 435 }}
            value={description}
            onChange={(e, { value }) => setDescription(value)}
          />
        </div>
      </div>
      <Fab
        color="secondary"
        aria-label="add"
        variant="extended"
        style={{ marginBottom: "20px" }}
        onClick={addMoreEmp}
      >
        <AddIcon /> Add
      </Fab>

      {empHistory.employmentHistory &&
        empHistory.employmentHistory.map((emp, i) => (
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
                  <TextField
                    fullWidth
                    label="Company Name"
                    variant="outlined"
                    value={emp.company}
                  />
                </div>
                <div className="sideHeader__fields">
                  <TextField
                    fullWidth
                    label="Position"
                    variant="outlined"
                    value={emp.position}
                  />
                </div>
                <div className="sideHeader__fields">
                  <TextField
                    fullWidth
                    label="Start Date"
                    variant="outlined"
                    value={emp.startDate}
                  />
                </div>
                <div className="sideHeader__fields">
                  <TextField
                    fullWidth
                    label="End Date"
                    variant="outlined"
                    value={emp.endDate}
                  />
                </div>
                <div className="sideHeader__fields">
                  <TextField
                    fullWidth
                    label="Technologies Used"
                    variant="outlined"
                    value={emp.technologies}
                  />
                </div>
                <div className="sideHeader__fields">
                  <TextArea
                    placeholder="Describe your tasks and responsibilities!"
                    style={{ minHeight: 200, minWidth: 400 }}
                    value={emp.description}
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
