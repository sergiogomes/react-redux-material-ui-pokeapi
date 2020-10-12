import React from "react";
import { ColDef, ValueGetterParams, ValueFormatterParams } from "@material-ui/data-grid";

export const columns: ColDef[] = [
  { field: "id", headerName: "ID", width: 80, type: "number" },
  { field: "name", headerName: "Pokemon", width: 120 },
  { 
    field: "displayImage", headerName: "Image", headerAlign: "center", sortable: false, width: 130,
    renderCell: (params: ValueFormatterParams) => (
      <img src={`${params.getValue("image") || ""}`} alt={`${params.getValue("name") || ""}`} />
    ),
  },
  {
    field: "healthhp", headerName: "Health", headerAlign: "center", sortable: false, width: 100,
    valueGetter: (params: ValueGetterParams) =>
      `${params.getValue("health") || ""} / ${params.getValue("hp") || ""}`,
  },
  { field: "experience", headerName: "Experience", width: 100, type: "number" },
  { field: "attack", headerName: "Attack", width: 100, type: "number" },
  { field: "defense", headerName: "Defense", width: 100, type: "number" },
  { field: "specialAttack", headerName: "Special Attack", width: 130, type: "number" },
  { field: "specialDefense", headerName: "Special Defense", width: 130, type: "number" },
  { field: "speed", headerName: "Speed", width: 100, type: "number" },
  { field: "image", headerName: "Image", width: 0, hide: true },
  { field: "health", headerName: "Health", width: 0, hide: true },
  { field: "hp", headerName: "HP", width: 0, hide: true},
];
