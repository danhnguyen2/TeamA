import React, { Component } from "react";
import ReactExport from "react-export-excel";
import './ResearchDetails.css';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


class Download extends Component {
    render() {
        var dataSet = []
        dataSet.push(this.props.data);
        console.log(dataSet);
       
        return (
            <ExcelFile element={<button className="download-button">DOWNLOAD COPY</button>}>
                <ExcelSheet data={dataSet} name="Pottery Details">
                    <ExcelColumn label="Shape" value="shape" />
                    <ExcelColumn label="Location" value="location" />
                    <ExcelColumn label="Painter" value="painter" />
                    <ExcelColumn label="Entry" value="entry" />
                    <ExcelColumn label="Vase Number" value="v_num" />
                    <ExcelColumn label="Height" value="height" />
                    <ExcelColumn label="Diameter" value="diameter" />
                    <ExcelColumn label="Plate" value="plate" />
                    <ExcelColumn label="Description" value="description" />
                    <ExcelColumn label="Reference" value="reference" />
                </ExcelSheet>
            </ExcelFile>
        );;
    }
}

export default Download;