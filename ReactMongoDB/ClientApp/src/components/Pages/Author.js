import React, { Component } from 'react';
import Axios from 'axios';
import _ from "lodash";
import { Alert } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Authors extends Component {
    
  constructor(props) {
    super(props);
    this.state = {
      data:[]
    };
    this.dangky();
  }
  async dangky(){
    // const url = `api/v1/user/register/`;
    // var response =await Axios.post(url,{
    //   Email:'minhtv@yahoo.com',Password:"ChiBietYeu!@#123",ConfirmPassword:'ChiBietYeu!@#123',
    //   Name:'Ralph Johnson',LastName:'Ralph Johnson', City:"HCM"
    // });
    const url = `api/v1/user/login/`;
    var response =await Axios.post(url,{
      Email:'minhtv@yahoo.com',Password:"ChiBietYeu!@#123"
    });
    console.log(response);
  }

  async componentDidMount(){    
    

      try{
      var config = {
        headers: {'Authorization': "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtaW5odHZAeWFob28uY29tIiwianRpIjoiYWVhNDJkYzgtMDg3ZS00ZjEzLTljZTktZGY5ZTA4NWYxM2U0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiIwMTE0OGNkMS1iYTJmLTRjMDQtYWEzYi00NzcxMThhMTc3ZTEiLCJleHAiOjE4Nzk1NjI1NDYsImlzcyI6IllvdXJBd2Vzb21lQ29tcGFueSIsImF1ZCI6IllvdXJBd2Vzb21lQ29tcGFueSJ9.fcbjyZ7pKPfQrRVyMwWQb74rqHfA2J6pDWGbakifgNY" }
      };
      const url = `api/Books/`;
      //const url = `api/v1/user/UserData/`;
      var response = await Axios.get(url,config);
      console.log(response);
      this.setState({
        data: response.data
      })
    }catch(e){
      console.log(e);    
    }
  }

  async onAdd(item){
    
    const url = `api/Books/`;
    var response =await Axios.post(url,{
      Name:'Design Patterns',Price:54.93,Category:'Computers',Author:'Ralph Johnson'
    });
    
    if(response.status===201){
      this.setState({
        data: _.concat(this.state.data,[response.data])
      })
    }else{
      toast.error("Đã có lỗi trong quá trình xử lý"); 
    }

  }
  async onDelete(item){

    const url = `api/Books/${item.Id}`;
    var response =await Axios.delete(url);
    if(response.status===204){
      _.remove(this.state.data,{Id:item.Id})
      this.setState({
        data: this.state.data
      })
    }else{
      toast.error("Đã có lỗi trong quá trình xử lý"); 
    }
    
  }


  render() {
    return (
        <React.Fragment>
        <ToastContainer />
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Date</th>
              <th>Temp. (C)</th>
              <th>Temp. (F)</th>
              <th>Summary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {_.map(this.state.data,(item) =>
              <tr key={item.Id}>
                <td>{item.Price}</td>
                <td>{item.Category}</td>
                <td>{item.Author}</td>
                <td>{item.NewItem}</td>
                <td>
                  <button onClick={()=>this.onAdd(item)}>Add</button>
                  <button onClick={()=>this.onDelete(item)}>Delete</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        </React.Fragment>
    );
  }
}
