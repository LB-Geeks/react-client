import React from "react";
import axios from "axios";

import ConfirmedAccomodationModal from "../confirmedAccomodationModal/ConfirmedAccomodationModal";

let accomodationObject = {};
const getAllAccomodation = async () => {
  await axios
    .get(
      "http://localhost:3100/api/allbookings?api-key=DriPObREdrocIDRehublyupUbiQAkeGEprlsWudU"
    )
    .then((response) => {
      accomodationObject = response.data;
    });
};

await getAllAccomodation();

function ConfirmedAccomodationList() {
  return (
    <>
      <div class="container col mt-4">
        <div class="list-group accordion" id="accordionExample">
          <li class="list-group-item list-group-item-action bg-grey">
            <h5>List of confirmed accomodation</h5>
          </li>
          <div class="accordion-item">
            <button
              type="button"
              class="list-group-item list-group-item-action d-flex justify-content-start accordion-button collapsed"
              aria-current="true"
              data-bs-toggle="collapse"
              data-bs-target="#collapseBOne"
              aria-expanded="false"
              aria-controls="collapseBOne"
            >
              <h6>
                {accomodationObject[0].host_id} {accomodationObject[0].guest_id}
              </h6>
            </button>
            <div
              id="collapseBOne"
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
            aria-current="true"
            data-bs-toggle="modal"
            data-bs-target="#confirmedAccomodation"
          >
            I'm a confirmed accomodation for a homeless person.
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action"
            data-bs-toggle="modal"
            data-bs-target="#confirmedAccomodation"
          >
            I'm a confirmed accomodation for a homeless person.
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action"
            data-bs-toggle="modal"
            data-bs-target="#confirmedAccomodation"
          >
            I'm a confirmed accomodation for a homeless person.
          </button>
          <button
            type="button"
            class="list-group-item list-group-item-action"
            data-bs-toggle="modal"
            data-bs-target="#confirmedAccomodation"
          >
            I'm a confirmed accomodation for a homeless person.
          </button>
        </div>

        <ConfirmedAccomodationModal />
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

export default ConfirmedAccomodationList;
