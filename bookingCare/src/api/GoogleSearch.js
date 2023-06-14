import axios from 'axios';

export const GoogleSearch = async (term) => {
  const { data } = await axios.get(
    `https://www.googleapis.com/customsearch/v1?key=AIzaSyCbecAORb_u4Az7InaX5ljZs6-CMBvElKI&cx=63743e0cf52d64e90&q=${term}`,
    // {
    //   params: {
    //     key: process.env.React_App_Google_Search_Api_Key,
    //     cx: process.env.React_App_Search_Engine_Id,
    //     q: term,
    //   },
    // }
  );

  console.log(data)

  return data;
};
