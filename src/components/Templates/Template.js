import React, { useRef } from "react";
import { PDFExport } from "@progress/kendo-react-pdf";
import Header from "./Header";
import Paper from "../UI/Paper";
import Content from "./Content";
import ContHeader from "./Content/ContHeader";
import ContBody from "./Content/ContBody";
import Fab from "@material-ui/core/Fab";
import PrintIcon from "@material-ui/icons/Print";

function Template() {
  const pdfExportComponent = useRef();
  const onPrint = () => {
    // const input = document.getElementById("printable");
    // drawDOM(input, { paperSize: "auto" })
    //   .then((group) => {
    //     return exportPDF(group);
    //   })
    //   .then((dataUri) => {
    //     saveAs(dataUri, "cv_pourya.pdf");
    //   });
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  return (
    <>
      <Fab
        color="secondary"
        aria-label="add"
        onClick={onPrint}
        variant="extended"
        style={{ marginBottom: "10px" }}
      >
        <PrintIcon style={{ marginRight: "10px" }} /> Print
      </Fab>
      <PDFExport ref={pdfExportComponent} fileName="cv" paperSize="auto">
        <Paper>
          <Header />
          <Content>
            <ContHeader />
            <ContBody />
          </Content>
        </Paper>
      </PDFExport>
    </>
  );
}

export default Template;
