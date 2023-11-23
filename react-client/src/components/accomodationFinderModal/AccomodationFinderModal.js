import React from "react";

function AccomodationFinderModal() {
  return (
    <div
      class="modal fade"
      id="accomodationFinder"
      tabindex="-1"
      aria-labelledby="accomodation finder modal"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="accomodation-finder-label">
              I will launch a search for accomodation
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="d-flex justify-content-center mt-3">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <div class="modal-body">
            ...and will show the results here once they are loaded.
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-primary">
              Confirm Accomodation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccomodationFinderModal;
