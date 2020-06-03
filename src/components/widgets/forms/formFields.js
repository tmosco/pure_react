import React from "react";
import { Box, Input, Textarea, Select } from "@chakra-ui/core";

const FormFields = props => {
  const renderFields = () => {
    const formArray = [];

    for (let elementName in props.formData) {
      formArray.push({
        id: elementName,
        settings: props.formData[elementName]
      });
    }

    return formArray.map((item, i) => {
      return (
        <div key={i} className="form_element">
          {renderTemplates(item)}
        </div>
      );
    });
  };

  const showLabel = (show, label) => {
    return show ? <label>{label}</label> : null;
  };

  const changeHandler = (event, id, blur) => {
    const newState = props.formData;
    newState[id].value = event.target.value;

    let validData = validate(newState[id]);
    newState[id].valid = validData[0];
    newState[id].validationMessage = validData[1];

    console.log(newState);

    props.change(newState);
  };

  const validate = element => {
    console.log(element);
    let error = [true, ""];

    if (element.validation.minLen) {
      const valid = element.value.length >= element.validation.minLen;
      const message = `${
        !valid ? "Must be greater than " + element.validation.minLen : ""
      }`;
      error = !valid ? [valid, message] : error;
    }

    if (element.validation.required) {
      const valid = element.value.trim() !== "";
      const message = `${!valid ? "This field is required" : ""}`;

      error = !valid ? [valid, message] : error;
    }

    return error;
  };

  const showValidation = data => {
    let errorMessage = null;

    if (data.validation && !data.valid) {
      errorMessage = (
        <Box color="#dc143c" ml="100px" fontWeight="600">
          {data.validationMessage}
        </Box>
      );
    }
    return errorMessage;
  };

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

            {showValidation(values)}
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
