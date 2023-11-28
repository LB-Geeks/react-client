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

// const mapGuests = () => {
//   guestsObject.map((guest) => {
//     return (
//       <div class="accordion-item">
//       <button
//         type="button"
//         class="list-group-item list-group-item-action d-flex justify-content-start accordion-button collapsed"
//         aria-current="true"
//         data-bs-toggle="collapse"
//         data-bs-target={"#" + guest.id}
//         aria-expanded="false"
//         aria-controls="collapseTwo"
//       >
//         <h6>
//           {guestsObject[0].first_name} {guest.last_name}
//         </h6>
//       </button>
//       <div
//         id={guest.id}
//         class="accordion-collapse collapse"
//         data-bs-parent="#accordionExample"
//       >
//         <div class="accordion-body">
//           <strong>This is the second item's accordion body.</strong> It is
//           hidden by default, until the collapse plugin adds the
//           appropriate classes that we use to style each element. These
//           classes control the overall appearance, as well as the showing
//           and hiding via CSS transitions. You can modify any of this with
//           custom CSS or overriding our default variables. It's also worth
//           noting that just about any HTML can go within the{" "}
//           <code>.accordion-body</code>, though the transition does limit
//           overflow.
//         </div>
//       </div>
//     </div>
//     );
//   })
// }

// const guests = <>{mapGuests()}</>;
// console.log(guests);

function NeedAccomodationList() {
  return (
    <>
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
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <h6>
                {guestsObject[0].first_name} {guestsObject[0].last_name}
              </h6>
            </button>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-align-left">
                <div>
                  Mental health requirements:
                  {guestsObject[0].requirement_1 === 1 && " ✅"}
                  {guestsObject[0].requirement_1 === 0 && " ❌"}
                </div>
                <div>
                  Addiction support required:
                  {guestsObject[0].requirement_2 === 1 && " ✅"}
                  {guestsObject[0].requirement_2 === 0 && " ❌"}
                </div>
                <div>
                  Host's gender needs to match guest's gender:
                  {guestsObject[0].requirement_3 === 1 && " ✅"}
                  {guestsObject[0].requirement_3 === 0 && " ❌"}
                </div>
                <div>
                  <a
                    href="#"
                    class="btn btn-primary mt-4"
                    data-bs-toggle="modal"
                    data-bs-target="#accomodationFinder"
                  >
                    Start accomodation search
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="list-group-item list-group-item-action d-flex justify-content-start accordion-button collapsed"
            aria-current="true"
            data-bs-toggle="collapse"
            data-bs-target="#collapseBTwo"
            aria-expanded="false"
            aria-controls="collapseBTwo"
          >
            <h6>
              {guestsObject[1].first_name} {guestsObject[1].last_name}
            </h6>
          </button>
          <div
            id="collapseBTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body text-align-left">
              <div>
                Mental health requirements:
                {guestsObject[1].requirement_1 === 1 && " ✅"}
                {guestsObject[1].requirement_1 === 0 && " ❌"}
              </div>
              <div>
                Addiction support required:
                {guestsObject[1].requirement_2 === 1 && " ✅"}
                {guestsObject[1].requirement_2 === 0 && " ❌"}
              </div>
              <div>
                Host's gender needs to match guest's gender:
                {guestsObject[1].requirement_3 === 1 && " ✅"}
                {guestsObject[1].requirement_3 === 0 && " ❌"}
              </div>
              <div>
                <a
                  href="#"
                  class="btn btn-primary mt-4"
                  data-bs-toggle="modal"
                  data-bs-target="#accomodationFinder"
                >
                  Start accomodation search
                </a>
              </div>
            </div>
          </div>

          <button
            type="button"
            class="list-group-item list-group-item-action d-flex justify-content-start accordion-button collapsed"
            aria-current="true"
            data-bs-toggle="collapse"
            data-bs-target="#collapseBThree"
            aria-expanded="false"
            aria-controls="collapseBThree"
          >
            <h6>
              {guestsObject[2].first_name} {guestsObject[2].last_name}
            </h6>
          </button>
          <div
            id="collapseBThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body text-align-left">
              <div>
                Mental health requirements:
                {guestsObject[2].requirement_1 === 1 && " ✅"}
                {guestsObject[2].requirement_1 === 0 && " ❌"}
              </div>
              <div>
                Addiction support required:
                {guestsObject[2].requirement_2 === 1 && " ✅"}
                {guestsObject[2].requirement_2 === 0 && " ❌"}
              </div>
              <div>
                Host's gender needs to match guest's gender:
                {guestsObject[2].requirement_3 === 1 && " ✅"}
                {guestsObject[2].requirement_3 === 0 && " ❌"}
              </div>
              <div>
                <a
                  href="#"
                  class="btn btn-primary mt-4"
                  data-bs-toggle="modal"
                  data-bs-target="#accomodationFinder"
                >
                  Start accomodation search
                </a>
              </div>
            </div>
          </div>
        </div>

        <AccomodationFinderModal guest={guestsObject} />
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
