import { useState } from "react";

import "./App.css";

function App() {
  const [fdata, setFdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "India",
    address: "",
    zipcode: "",
    state: "",
    city: "",
    comment: false,
    offer: false,
    candidate: false,
    pushNotified: "",
  });

  function formdataHandler(event) {
    const { name, value, checked, type } = event.target;
    setFdata((prevData) => ({
      ...prevData,
      [name]: type === "checked" ? checked : value,
    }));
  }
  function submithandler(event){
  
  console.log("Printing :")
  console.log(fdata)
  event.preventDefault()

  }
  return (
    <>
      <div className="flex justify-center mx-auto max-w-md p-6 bg-gray-100 rounded-lg shadow-lg">
        <form className="flex flex-col w-full" onSubmit={submithandler}>
          <label htmlFor="firstname">FirstName</label>
          <input
            type="text"
            name="firstname"
            className="outline-none border-gray-300 rounded-md px-3 py-2 mt-1 mb-4"
            id="firstname"
            value={fdata.firstname}
            placeholder="Lucky"
            onChange={formdataHandler}
          />

          <label htmlFor="lastname">LastName</label>
          <input
            type="text"
            className="outline-none border-gray-300 rounded-md px-3 py-2 mt-1 mb-4"
            name="lastname"
            id="lastname"
            value={fdata.lastname}
            placeholder="Varma"
            onChange={formdataHandler}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="outline-none border-gray-300 rounded-md px-3 py-2 mt-1 mb-4"
            name="email"
            id="email"
            value={fdata.email}
            placeholder="abc@gmail.com"
            onChange={formdataHandler}
          />
          <label htmlFor="country">Country</label>
          <select
            name="country"
            id="country"
            className="outline-none border-gray-300 rounded-md px-3 py-2 mt-1 mb-4"
            value={fdata.country}
            onChange={formdataHandler}
          >
            <option>India</option>
            <option>USA</option>
            <option>UK</option>
          </select>

          <label htmlFor="address" className="block mb-2">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            cols="5"
            rows="5"
            value={fdata.address}
            onChange={formdataHandler}
            placeholder="Enter your address"
            className="outline-none border-gray-300 rounded-md px-3 py-2 mt-1 mb-4"
          ></textarea>

          <label htmlFor="state">State</label>
          <input
            type="text"
            className="outline-none border-gray-300 rounded-md px-3 py-2 mt-1 mb-4"
            name="state"
            id="state"
            value={fdata.state}
            placeholder="State"
            onChange={formdataHandler}
          />

          <label htmlFor="city">City</label>
          <input
            type="text"
            className="outline-none border-gray-300 rounded-md px-3 py-2 mt-1 mb-4"
            name="city"
            id="city"
            value={fdata.city}
            placeholder="Mumbai"
            onChange={formdataHandler}
          />

          <label htmlFor="zipcode">ZipCode/Postal Code</label>
          <input
            type="text"
            className="outline-none border-gray-300 rounded-md px-3 py-2 mt-1 mb-4"
            name="zipcode"
            id="zipcode"
            value={fdata.zipcode}
            placeholder="zipcode"
            onChange={formdataHandler}
          />

          <fieldset className="border border-gray-300 rounded-lg p-4 mb-4">
            <legend className="text-lg font-semibold mb-2">By Email</legend>

            <input
              type="checkbox"
              name="comment"
              id="comment"
              checked={fdata.comment}
              onChange={formdataHandler}
              className="mr-2"
            />
            <label htmlFor="comment" className=" mb-2">
              Comments
            </label>
            <p></p>
            <p className="text-sm">Get notified</p>
            <br />
            <input
              type="checkbox"
              name="offer"
              id="offer"
              checked={fdata.offer}
              onChange={formdataHandler}
              className="mr-2"
            />
            <label htmlFor="offer" className=" mb-2">
              Offer
            </label>
            <p></p>
            <p className="text-sm">Get notified</p>
            <br />
            <input
              type="checkbox"
              name="candidate"
              id="candidate"
              checked={fdata.candidate}
              onChange={formdataHandler}
              className="mr-2"
            />
            <label htmlFor="candidate" className=" mb-2">
              Candidate
            </label>
            <p></p>
            <p className="text-sm">Get notified</p>
          </fieldset>

        
         <fieldset className="flex flex-col justify-center items-center">
  <div className="flex gap-3 items-center">
    <input
      type="radio"
      name="pushNotified"
      id="Everything"
      value="Everything"
      onChange={formdataHandler}
    />
    <label htmlFor="Everything">Everything</label>
  </div>
  <div className="flex gap-3 items-center">
    <input
      type="radio"
      name="pushNotified"
      id="Has you want"
      value="Has you want"
      onChange={formdataHandler}
    />
    <label htmlFor="Has you want">Has you want</label>
  </div>
  <div className="flex gap-3 items-center">
    <input
      type="radio"
      name="pushNotified"
      id="NO"
      value="NO"
      onChange={formdataHandler}
    />
    <label htmlFor="NO">NO</label>
  </div>
</fieldset>

<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Save
</button>

        </form>
      </div>
    </>
  );
}

export default App;
