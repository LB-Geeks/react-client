import React from "react";

import AccomodationFinderModal from "../accomodationFinderModal/AccomodationFinderModal";

function NeedAccomodationList() {
  return (
    <>
      <div class="container d-flex justify-content-center mt-4">
        <div class="list-group max-width-80">
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
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center mt-3">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item">
            <a class="page-item active page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NeedAccomodationList;
