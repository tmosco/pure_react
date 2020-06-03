import React from "react";
import { Box, Input, Textarea, Select } from "@chakra-ui/core";

const FormFields = props => {
  function renderFields() {
    const formArray = [];

    for (let elementName in props.formData) {
      formArray.push({
        id: elementName,
        settings: props.formData[elementName]
      });
    }
    return formArray.map((item, i) => {
      return <Box key={i}>{renderTemplates(item)}</Box>;
    });
  }

  function showLabel(show, label) {
    return show ? (
      <Box fontWeight="600">
        {" "}
        <label>{label} </label>{" "}
      </Box>
    ) : null;
  }

    const changeHandler = (event,id) => {
        const newState = props.formData;
        newState[id].value = event.target.value;

            let validData = validate(newState[id])
                newState[id].valid = validData[0];
                newState[id].validationMessage = validData[1];
  
        console.log(newState.name)
        props.change(newState)
    }

    const validate = (element) =>{
        console.log(element)
        let error = [true,''];

        if(element.validation.minLength){
            const valid = element.value.length >= element.validation.minLength;
            const message = `${ !valid ? 'Must be greater than ' + element.validation.minLength :''}`
            error = !valid ?[valid,message]:error
        }

        if(element.validation.required){
            const valid = element.value.trim() !== '';
            const message = `${ !valid ? 'This field is required':''}`

            error = !valid ?[valid,message]:error
         }

        return error;
    }

  // function validate(element) {
  //   console.log(element);
  //   let error = [true, ""];

  //   if (element.validation.minLength) {
  //     const valid = element.value.length >= element.validation.minLength;
  //     const message = `${
  //       !valid ? "Must ne greater than " + element.validation.minLength : ""
  //     }`;

  //     error = !valid ? [valid, message] : error;
  //   }

  //   if (element.validation.required) {
  //     const valid = element.value.trim() !== "";
  //     //when valid is empty the result is false
  //     const message = `${!valid ? "This field is required" : ""}`;

  //     error = !valid ? [valid, message] : error;
  //   }

  //   return error;
  // }


  const showValidation = data => {
    let errorMessage = null;

    if (data.validation && !data.valid) {
      errorMessage = (
        <Box color="#dc143c" ml="100px" fontWeight="600">
          {" "}
          {data.validationMessage}
        </Box>
      );
    }
    return errorMessage;
  };

  function pratice(data) {
    return (
      <Box color="#dc143c" ml="100px" fontWeight="600">
       {data.message}
      </Box>
    );
  }

  function renderTemplates(data) {
    let formTemplate = "";
    let values = data.settings;

    switch (values.element) {
      case "input":
        formTemplate = (
          <Box>
            <Box mr="650px" ml="15px" mt="8px" display="flex">
              {showLabel(values.label, values.labelText)}:
              <Input
                ml="15px"
                {...values.config}
                defaultValue={values.value}
                onChange={event => changeHandler(event, data.id)}
              />
            </Box>
            {pratice(values)}
            {showValidation(values)} 
            
            {// showValidation is not displaying 
            }
          </Box>
        );

        break;
      case "textarea":
        formTemplate = (
          <Box mr="600px" ml="15px" mb="10px">
            {showLabel(values.label, values.labelText)}
            <Textarea
              {...values.config}
              defaultValue={values.value}
              onChange={event => changeHandler(event, data.id)}
            />
          </Box>
        );
        break;
      case "select":
        formTemplate = (
          <Box mr="750px" ml="15px" mb="10px">
            {showLabel(values.label, values.labelText)}
            <Box>
              <Select
                defaultValue={values.value}
                name={values.config.name}
                onChange={event => changeHandler(event, data.id)}
              >
                {values.config.options.map((item, i) => (
                  <option key={i} value={item.val}>
                    {item.text}
                  </option>
                ))}
              </Select>
            </Box>
          </Box>
        );
        break;
      default:
        formTemplate = null;
    }
    return formTemplate;
  }

  return <Box>{renderFields()}</Box>;
};

export default FormFields;
