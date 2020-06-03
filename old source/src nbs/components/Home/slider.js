import React, { useState, useEffect } from "react";
import axios from "axios";
import {URL} from '../../config'

import SliderTemplates from '../widget/sliderTemplates'

const NewSlider = ({type,start,amount,settings}) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/articles?_start=${start}&_end=${amount}`).then(response => {
      return setNews(response.data);
    });
  }, []);

  return (
    <>
      <SliderTemplates data={news} type={type} HomeSettings={settings}/>
    </>
  );
};

export default NewSlider;
