import React, { useState } from "react";

export default function Item(prop) {
  return (
    <div
      className="item"
      onClick={() => {
        prop.onChecked(prop.id);
      }}
    >
      {prop.data} <button className="delete-btn"> - </button>
    </div>
  );
}
