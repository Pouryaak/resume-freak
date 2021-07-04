import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {
    name: "",
    image: "",
    desiredPosition: "",
    email: "",
    phone: "",
    website: "",
    intro: "",
    employmentHistory: [],
    education: [],
    links: [],
    technicalSkills: [],
    languages: [],
    softSkills: [],
  },
};

const detailSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.details.name = action.payload;
    },
    setImage: (state, action) => {
      state.details.image = action.payload;
    },
    setDesiredPosition: (state, action) => {
      state.details.desiredPosition = action.payload;
    },
    setEmail: (state, action) => {
      state.details.email = action.payload;
    },
    setPhone: (state, action) => {
      state.details.phone = action.payload;
    },
    setWebsite: (state, action) => {
      state.details.website = action.payload;
    },
    setIntro: (state, action) => {
      state.details.intro = action.payload;
    },
    addEmpHistory: (state, action) => {
      state.details.employmentHistory.push({
        empId: action.payload.id,
        company: action.payload.company ? action.payload.company : "",
        position: action.payload.position ? action.payload.position : "",
        startDate: action.payload.startDate ? action.payload.startDate : "",
        endDate: action.payload.endDate ? action.payload.endDate : "",
        technologies: action.payload.technologies
          ? action.payload.technologies
          : "",
        description: action.payload.description
          ? action.payload.description
          : "",
      });
    },
    addEducation: (state, action) => {
      state.details.education.push({
        university: action.payload.university ? action.payload.university : "",
        degree: action.payload.degree ? action.payload.degree : "",
        startDate: action.payload.startDate ? action.payload.startDate : "",
        endDate: action.payload.endDate ? action.payload.endDate : "",
      });
    },
    addLinks: (state, action) => {
      state.details.links.push({
        text: action.payload.text ? action.payload.text : "",
        link: action.payload.link ? action.payload.link : "",
      });
    },
    addTechnicalSkills: (state, action) => {
      state.details.technicalSkills.push({
        name: action.payload.name ? action.payload.name : "",
        skill: action.payload.skill ? action.payload.skill : "",
      });
    },
    addLangueges: (state, action) => {
      state.details.languages.push({
        name: action.payload.name ? action.payload.name : "",
        skill: action.payload.skill ? action.payload.skill : "",
      });
    },
    addSoftSkills: (state, action) => {
      state.details.softSkills.push({
        name: action.payload.name ? action.payload.name : "",
        skill: action.payload.skill ? action.payload.skill : "",
      });
    },
  },
});

export const {
  setName,
  setImage,
  setDesiredPosition,
  setEmail,
  setPhone,
  setWebsite,
  setIntro,
  addEmpHistory,
  addEducation,
  addLinks,
  addTechnicalSkills,
  addLangueges,
  addSoftSkills,
} = detailSlice.actions;
export const selectDetails = (state) => state.details.details;
export default detailSlice.reducer;
