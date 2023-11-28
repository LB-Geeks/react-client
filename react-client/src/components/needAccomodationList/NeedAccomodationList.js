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
        <div class="list-group accordion" id="accordionExample">
          <li class="list-group-item list-group-item-action bg-grey">
            <h5>List of guests needing accomodation</h5>
          </li>
          <div class="accordion-item">
            <button
              type="button"
              class="list-group-item list-group-item-action d-flex justify-content-start accordion-button collapsed"
              aria-current="true"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <h6>
                {guestsObject[0].first_name} {guestsObject[0].last_name}
              </h6>
            </button>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
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
