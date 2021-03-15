import React, { Component } from 'react';
import axios from 'axios'
import Navbar from './Navbar';



class Covid extends Component {
    constructor(props) {
        super(props);
        this.state = { user: []}
    }

    componentDidMount() {
        axios.get('https://api.covid19india.org/data.json')
            .then((response) => this.setState({ user: response.data.statewise.slice(1,36) })
         )
            .catch((error) => { console.log(error); })
    }



    render() {
        console.log(this.state);
        
  
        return (
           
            <>
                
                  <Navbar/>
                 
               <table class=" table table-borderless table-dark  ">
               <thead>
                 <tr className="m-5">
                   <th scope="col ">STATE</th>
                   <th scope="col">ACTIVE CASES</th>
                   <th scope="col">CONFIRMED CASES</th>
                   <th scope="col">DECEASED</th>
                 </tr>
               </thead>
             
                {
               this.state.user.map((list,index)=>

               <tbody>
                 <tr>
                   
                   <td>{list.state}</td>
                   <td>{list.active}</td>
                   <td>{list.confirmed}</td>
                   <td>{list.deaths}</td>
                 </tr>
               </tbody>



//    <h1 >  {list.state} {list.active} {list.confirmed} {list.deaths} </h1>)
)}
</table>
  
 
        
            </>
        );
    }
}

export default Covid;

