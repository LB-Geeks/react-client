import React from "react";

function StatBox() {
  return (
    <div class="container mt-4">
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">46</h5>
              <p class="card-text">
                Number of Guests Who Need Accomodation
              </p>

              <button href="#" class="btn btn-primary" onClick="window.open('https://www.gov.uk/government/statistics/statutory-homelessness-in-england-january-to-march-2023/statutory-homelessness-in-england-january-to-march-2023');">
     <span class="icon">Read More</span>
</button>
      
              
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">59</h5>
              <p class="card-text">
                Number of Remaining Available Hosts
              </p>

              <button href="#" class="btn btn-primary" onClick="window.open('https://www.gov.uk/government/statistics/statutory-homelessness-in-england-january-to-march-2023/statutory-homelessness-in-england-january-to-march-2023');">
     <span class="icon">Read More</span>
</button>
      
              
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">16</h5>
              <p class="card-text">
                Number of Lodged Guests Tonight
              </p>

              <button href="#" class="btn btn-primary" onClick="window.open('https://www.gov.uk/government/statistics/statutory-homelessness-in-england-january-to-march-2023/statutory-homelessness-in-england-january-to-march-2023');">
     <span class="icon">Read More</span>
</button>
      
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatBox;
