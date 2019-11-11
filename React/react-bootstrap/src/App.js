import React from 'react';
import './main.scss';

function App() {
  return (
    <div className="App">
      
      <section>
        <h2>Basic Grid</h2>
        <div className="row">
          <div className="col-12 col-md-8 boxBlue">.col-12 .col-md-8</div>
          <div className="col-6 col-md-4 boxGreen">.col-6 .col-md-4</div>
        </div>
        
        <div className="row">
          <div className="col-6 col-md-4 boxYellow">.col-6 .col-md-4</div>
          <div className="col-6 col-md-4 boxBlue">.col-6 .col-md-4</div>
          <div className="col-6 col-md-4 boxGreen">.col-6 .col-md-4</div>
        </div>
        
        <div className="row">
          <div className="col-6 boxGreen">.col-6</div>
          <div className="col-6 boxYellow">.col-6</div>
        </div>
      </section>

      <section>
        <h2>Vertical Align</h2>
        <div className="container">
          <div className="row align-items-start big">
            <div className="col boxYellow">
              One of three columns
            </div>
            <div className="col boxGreen">
              One of three columns
            </div>
            <div className="col boxBlue">
              One of three columns
            </div>
          </div>
          <div className="row align-items-center big">
            <div className="col boxYellow">
              One of three columns
            </div>
            <div className="col boxGreen">
              One of three columns
            </div>
            <div className="col boxBlue">
              One of three columns
            </div>
          </div>
          <div className="row align-items-end big">
            <div className="col boxYellow">
              One of three columns
            </div>
            <div className="col boxBlue">
              One of three columns
            </div>
            <div className="col boxGreen">
              One of three columns
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row big">
            <div className="col align-self-start boxBlue">
              One of three columns
            </div>
            <div className="col align-self-center boxGreen">
              One of three columns
            </div>
            <div className="col align-self-end boxYellow">
              One of three columns
            </div>
          </div>
        </div>
      </section>


      <section>
        <h2>Horizontal Alignment</h2>
        <div className="container">
          <div className="row justify-content-start">
            <div className="col-4 boxBlue">
              One of two columns
            </div>
            <div className="col-4 boxGreen">
              One of two columns
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-4 boxBlue">
              One of two columns
            </div>
            <div className="col-4 boxYellow">
              One of two columns
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-4 boxGreen">
              One of two columns
            </div>
            <div className="col-4 boxBlue">
              One of two columns
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-4 boxYellow">
              One of two columns
            </div>
            <div className="col-4 boxBlue">
              One of two columns
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-4 boxGreen">
              One of two columns
            </div>
            <div className="col-4 boxYellow">
              One of two columns
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Form</h2>
        <form>
        <div className="container">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputEmail4">Email</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
            </div>
            <div className="form-group col-md-6">
              <label for="inputPassword4">Password</label>
              <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
            </div>
          </div>
          <div className="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
          </div>
          <div className="form-group">
            <label for="inputAddress2">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip"/>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck"/>
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default App;
