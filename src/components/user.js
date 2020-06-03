import React, { useState } from "react";
import { Box, Button } from "@chakra-ui/core";
import FormFields from "./widgets/forms/formFields";
const User = () => {
  const data = {
    name:{
      element:'input',
      value:'',
      label:true,
      labelText:'Name',
      config:{
          name:'name_input',
          type:'text',
          placeholder:'Enter your name'
      },
      validation:{
          required:true,
          minLength:5
      },
      valid:false,
      touched:false,
      validationMessage:'',
      message:"message"
  },
  lastname:{
      element:'input',
      value:'',
      label:true,
      labelText:'Lastname',
      config:{
          name:'lastname_input',
          type:'text',
          placeholder:'Enter your Lastname'
      },
      validation:{
          required:true
      },
      valid:false,
      touched:false,
      validationMessage:''
  },
  message:{
      element:'textarea',
      value:'',
      label:true,
      labelText:'Message',
      config:{
          name:'message_input',
          rows:4,
          cols:36
      },
      validation:{
          required:false
      },
      valid:true
  },
  age:{
      element:'select',
      value:'',
      label:true,
      labelText:'Age',
      config:{
          name:'age_input',
          options:[
              {val:'1',text:'10-20'},
              {val:'2',text:'20-30'},
              {val:'3',text:'+30'}
          ]
      },
      validation:{
          required:false
      },
      valid:true
  }
    
  };
  const [formData, setFormData] = useState(data);
  function submitForm(e) {
    e.preventDefault();
    let dataToSubmit = {};
    for (let key in formData) {
      dataToSubmit[key] = formData[key].value;
     console.log(formData)
    }
    console.log(dataToSubmit);
    // axios.post(url,dataToSubmit)
  }
  function updateForm(newState) {
    setFormData(newState);
  }
  return (
    <Box>
      <form onSubmit={submitForm}>
        <FormFields
          change={newState => updateForm(newState)}
          formData={formData}
        />
        <Button color="#" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};
export default User;
