import React, { Component } from "react";
 
class About extends Component {
  render() {
    return (
      <div>
        <h2>ABOUT US</h2>
        <table>
          <th><b>Business Hours</b></th>
          <tr>Sunday 12:00 pm - 0930 pm</tr>
          <tr>Monday-Thursday 12:00 pm - 10:00 pm</tr>
          <tr>Friday-Saturday 12:00 pm - 12:30 pm</tr>
        </table>
        <p><b>OUR LOCATION ADDRESS</b></p>
        <p><br>12300 Jefferson Ave #909</br>
              <br>Newport News, VA 23602</br>
              <br>757-527-4900</br></p>
      </div>
    );
  }
}
 
export default About;