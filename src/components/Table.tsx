import React from 'react';
import {AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import data from '../data.js'

export default function Table() {
    console.log(data);


    const columns = [
        {
            headerName: "UserId", field: "id", checkboxSelection: true
        },
        {
            headerName: "Title", field: "title"
        }
    ]
    const defaultColDef = {
        sortable: true, editable: true, filter: true, floatingFilter: true, flex: 1
    }

    let gridApi:any;
    const onGridReady=(params:any)=>{
        gridApi=params.api;
    }
    const onExportClick=()=>{
        gridApi.exportDataAsCsv();
    }
    return (
        <div>
        <button onClick={()=>onExportClick()}>export</button>
        <div className="ag-theme-alpine" style={{ height: 400, width: "100%" }}>
            <AgGridReact 
            rowData={data} 
            columnDefs={columns} 
            defaultColDef={defaultColDef} 
            onGridReady={onGridReady}/>
        </div>
        </div>
    )
}
