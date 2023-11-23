import React from "react";

import AccomodationFinderModal from "../accomodationFinderModal/AccomodationFinderModal";

function NeedAccomodationList() {
  return (
    <div class="container mt-4">
      <div class="list-group">
        <button
          type="button"
          class="list-group-item list-group-item-action active"
          aria-current="true"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          I'm the profile of a homeless person. Click me to find accomodation.
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          I'm the profile of a homeless person. Click me to find accomodation.
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          I'm the profile of a homeless person. Click me to find accomodation.
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          I'm the profile of a homeless person. Click me to find accomodation.
        </button>
      </div>

      <AccomodationFinderModal />
    </div>
  );
}

export default NeedAccomodationList;
