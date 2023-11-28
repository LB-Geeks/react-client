import React, { useState, useEffect } from "react";
import axios from "axios";

let accomodationObject = {};
const getAccomodation = async () => {
  await axios
    .get(
      "http://localhost:3100/api/findLodgings?guest_id=8b6fb1c1-268b-4d4f-9615-2564bdf3d7e8&post_code=EC2M%203YD&distance=5&api-key=DriPObREdrocIDRehublyupUbiQAkeGEprlsWudU"
    )
    .then((response) => {
      accomodationObject = response.data;
      console.log(accomodationObject);
    });
};

function AccomodationFinderModal(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAccomodation();
    setIsLoaded(true);
  }, []);

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
            {isLoaded && (
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            )}
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
