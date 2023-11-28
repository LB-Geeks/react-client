import React from "react";

function ConfirmedAccomodationModal() {
  return (
    <div
      class="modal fade"
      id="confirmedAccomodation"
      tabindex="-1"
      aria-labelledby="accomodation finder modal"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="accomodation-finder-label">
              I show the accomodation details
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">...with some further information.</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-primary"
              data-bs-dismiss="modal"
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmedAccomodationModal;
