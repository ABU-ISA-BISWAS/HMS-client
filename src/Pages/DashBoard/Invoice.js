import React, { Component } from 'react';
// import axios from 'axios';
// import { saveAs } from 'file-saver';




class Invoice extends Component {


  // state = {
  //   name: '',
  //   receiptId: 0,
  //   mobile: '',
  //   age: 0,
  //   aDate: 0,
  //   aMonth: '',
  //   aYear: 0,
  //   dDate: 0,
  //   dMonth: '',
  //   dYear: 0,
  //   sex: '',
  //   bed: 0,
  //   mCost: 0,
  //   tax: 0,
  //   amount: 0




  // }

  // handleChange = ({ target: { value, name } }) => {

  //   this.setState({ [name]: value })
  // }

  // createAndDownloadPdf = () => {
  //   axios.post(' http://localhost:5000/create-pdf', this.state)
  //     .then(() => axios.get(' http://localhost:5000/fetch-pdf', { responseType: 'blob' }))
  //     .then((res) => {
  //       const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

  //       saveAs(pdfBlob, `${this.state.name}.pdf`);
  //       console.log(pdfBlob)

  //     })
  // }

  render() {
    return (
      <div  >

        <div className="bg-slate-800  w-11/12 h-96 p-4 animate animate__zoomIn">
          <label className=' font-serif text-gray-300' >Receipt Id:</label>
          <input className='m-3 p-0.5 border-2 rounded-md border-gray-300 bg-stone-900 text-white' type="text" placeholder="Receipt Id" name="receiptId" onChange={this.handleChange} />
          <label className='  font-serif text-gray-300' >Patient Name:</label>
          <input className='m-3 p-0.5 border-2 rounded-md border-gray-300 bg-stone-900 text-white' type="text" placeholder="Patient Name" name="name" onChange={this.handleChange} />
          <label className='  font-serif text-gray-300'>Mobile:</label>
          <input className='m-3 p-0.5 border-2 rounded-md border-gray-300 bg-stone-900 text-white' type="text" placeholder="Mobile" name="mobile" onChange={this.handleChange} />
          <br />
          <label className='  font-serif text-gray-300' >Age:</label>
          <input className='m-3 p-0.5 border-2 rounded-md border-gray-300 bg-stone-900 text-white' type="number" placeholder="Age" name="age" onChange={this.handleChange} />

          <label className='  font-serif text-gray-300'>Sex</label>
          <select className='m-3 p-0.5 border-2 rounded-md border-gray-300 bg-stone-900 text-white' name="sex" onChange={this.handleChange}>
            <option ></option>
            <option >Male</option>
            <option >Female</option>
            <option >Other</option>

          </select>
          <label className='  font-serif text-gray-300' >Bed Number:</label>
          <input className='m-3 p-0.5 border-2 rounded-md border-gray-300 bg-stone-900 text-white' type="number" placeholder="Bed Number" name="bed" onChange={this.handleChange} />
          <div className='bg-black h-0.5'></div>
          <p className='font-semibold font-serif text-gray-500' >Admission</p>
          <label className='  font-serif text-gray-300'>Date</label>
          <select className='m-3 p-0.5 border-2 rounded-md border-gray-300 bg-stone-900 text-white' name="aDate" onChange={this.handleChange}>
            <option >Day</option>
            <option >1</option>
            <option >2</option>
            <option >3</option>
            <option >4</option>
            <option >5</option>
            <option >6</option>
            <option >7</option>
            <option >8</option>
            <option >9</option>
            <option >10</option>
            <option >11</option>
            <option >12</option>
            <option >13</option>
            <option >14</option>
            <option >15</option>
            <option >16</option>
            <option >17</option>
            <option >18</option>
            <option >19</option>
            <option >20</option>
            <option >21</option>
            <option >22</option>
            <option >23</option>
            <option >24</option>
            <option >25</option>
            <option >26</option>
            <option >27</option>
            <option >28</option>
            <option >29</option>
            <option >30</option>
            <option >31</option>
          </select>
          <label className='  font-serif text-gray-300'>Month</label>
          <select className='m-3 p-0.5 border-2 rounded-md border-gray-300 bg-stone-900 text-white' name="aMonth" onChange={this.handleChange}>
            <option >Month</option>
            <option >January</option>
            <option >February</option>
            <option >March</option>
            <option >April</option>
            <option >May</option>
            <option >June</option>
            <option >July</option>
            <option >August</option>
            <option >September</option>
            <option >October</option>
            <option >November</option>
            <option >December</option>

          </select>
          <label className='  font-serif text-gray-300'>Year</label>
          <select className='m-3 p-0.5 border-2 rounded-md border-gray-300 bg-stone-900 text-white' name="aYear" onChange={this.handleChange}>
            <option >Year</option>
            <option >2022</option>
            <option >2023</option>
            <option >2024</option>
            <option >2025</option>
            <option >2026</option>
            <option >2027</option>
            <option >2028</option>
            <option >2029</option>
            <option >2030</option>
            <option >2031</option>
            <option >2032</option>
            <option >2033</option>
            <option >2034</option>
            <option >2035</option>

          </select>
          <p className='font-semibold font-serif text-gray-500'>Discharge</p>
          <label className='  font-serif text-gray-300'>Date</label>
          <select className='m-3 p-0.5 border-2 rounded-md border-gray-300 bg-stone-900 text-white' name="dDate" onChange={this.handleChange}>
            <option >Day</option>
            <option >1</option>
            <option >2</option>
            <option >3</option>
            <option >4</option>
            <option >5</option>
            <option >6</option>
            <option >7</option>
            <option >8</option>
            <option >9</option>
            <option >10</option>
            <option >11</option>
            <option >12</option>
            <option >13</option>
            <option >14</option>
            <option >15</option>
            <option >16</option>
            <option >17</option>
            <option >18</option>
            <option >19</option>
            <option >20</option>
            <option >21</option>
            <option >22</option>
            <option >23</option>
            <option >24</option>
            <option >25</option>
            <option >26</option>
            <option >27</option>
            <option >28</option>
            <option >29</option>
            <option >30</option>
            <option >31</option>
          </select>
          <label className='  font-serif text-gray-300'>Month</label>
          <select className='m-3 p-0.5 border-2 rounded-md border-gray-300 bg-stone-900 text-white' name="dMonth" onChange={this.handleChange}>
            <option >Month</option>
            <option >January</option>
            <option >February</option>
            <option >March</option>
            <option >April</option>
            <option >May</option>
            <option >June</option>
            <option >July</option>
            <option >August</option>
            <option >September</option>
            <option >October</option>
            <option >November</option>
            <option >December</option>

          </select>
          <label className='  font-serif text-gray-300'>Year</label>
          <select className='m-3 p-0.5 border-2 rounded-md border-gray-300 bg-stone-900 text-white' name="dYear" onChange={this.handleChange}>
            <option >Year</option>
            <option >2022</option>
            <option >2023</option>
            <option >2024</option>
            <option >2025</option>
            <option >2026</option>
            <option >2027</option>
            <option >2028</option>
            <option >2029</option>
            <option >2030</option>
            <option >2031</option>
            <option >2032</option>
            <option >2033</option>
            <option >2034</option>
            <option >2035</option>

          </select>

          <br />
          <label className='  font-serif text-gray-300' >Amount:</label>
          <input className='m-3 p-0.5 border-2 rounded-md border-gray-300 bg-stone-900 text-white' type="number" placeholder="Amount" name="amount" onChange={this.handleChange} />


          <label className='  font-serif text-gray-300' >Medicine cost:</label>
          <input className='m-3 p-0.5 border-2 rounded-md border-gray-300 bg-stone-900 text-white' type="number" placeholder="Medicine cost" name="mCost" onChange={this.handleChange} />
          <label className='  font-serif text-gray-300'>Tax:</label>
          <input className='m-3 p-0.5 border-2 rounded-md border-gray-300 bg-stone-900 text-white' type="number" placeholder="Tax" name="tax" onChange={this.handleChange} />
          {/* <input type="number" placeholder="Admission Date" name="price2" onChange={this.handleChange} />
        <label >Discharge Date:</label>
        <input type="number" placeholder="Discharge Date" name="price2" onChange={this.handleChange} /> */}
          
          <button className='bg-green-600 hover:scale-95 text-sm rounded-lg cursor-pointer p-1 text-white' >Download Invoice</button>
          {/* onClick={this.createAndDownloadPdf} */}
        </div>


      </div>
    );
  }
}

export default Invoice;
