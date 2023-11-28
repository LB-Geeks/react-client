import React from "react";
import axios from "axios";

import ConfirmedAccomodationModal from "../confirmedAccomodationModal/ConfirmedAccomodationModal";

function ConfirmedAccomodationList() {
  const getAllAccomodation = () => {
    axios
      .get(
        "http://localhost:3100/api/allbookings?api-key=DriPObREdrocIDRehublyupUbiQAkeGEprlsWudU"
      )
      .then((response) => {
        console.log(response.data);
      });
  };

  return (
    <>
      {getAllAccomodation()}
      <div class="container col mt-4">
        <div class="list-group">
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
