import React from "react";
import axios from "axios";

import AccomodationFinderModal from "../accomodationFinderModal/AccomodationFinderModal";

let guestsObject = {};
const getAllGuests = async () => {
  await axios
    .get(
      "http://localhost:3100/api/allguests?api-key=DriPObREdrocIDRehublyupUbiQAkeGEprlsWudU"
    )
    .then((response) => {
      guestsObject = response.data;
      console.log(guestsObject[0].first_name);
    });
};

await getAllGuests();

function NeedAccomodationList() {
  return (
    <>
      {}
      <div class="container col mt-4">
        <div class="list-group">
          <button
            type="button"
            class="list-group-item list-group-item-action"
            aria-current="true"
            data-bs-toggle="modal"
            data-bs-target="#accomodationFinder"
          >
            <h5>
              {guestsObject[0].first_name} {guestsObject[0].last_name}
            </h5>

            <a href="#" class="btn btn-primary">
              List Requirements
            </a>
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action"
            data-bs-toggle="modal"
            data-bs-target="#accomodationFinder"
          >
            I'm the profile of a homeless person. Click me to find accomodation.
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action"
            data-bs-toggle="modal"
            data-bs-target="#accomodationFinder"
          >
            I'm the profile of a homeless person. Click me to find accomodation.
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action"
            data-bs-toggle="modal"
            data-bs-target="#accomodationFinder"
          >
            I'm the profile of a homeless person. Click me to find accomodation.
          </button>
        </div>

        <AccomodationFinderModal />
        <nav aria-label="Page navigation example">
          <ul class="pagination d-flex justify-content-center mt-3">
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
      </div>
    </>
  );
}

export default NeedAccomodationList;
