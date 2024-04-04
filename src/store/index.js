// store/index.js
import { createStore } from 'vuex';

const hostedData = "https://unity-jnr.github.io/data/"

export default createStore({
  state: {
    about: [],
    home: [],
    education: [],
    job:[],
    testimonial:[],
    project:[],
    skills:[],
    profile:[],
    aboutimage:[],
    res:[],
    dob:[],
    passions:[],
    studies:[],
    intern:[],
    skill:[],

  },
  mutations: {
    setData(state, data) {
      state.about = data; // Access the "About" property in the response
    },
    setHome(state, homedata) {
      state.home = homedata
    },
    seteducation(state,data){
      state.education = data
    },
    setJob(state,data){
      state.job = data
    },
    setTestimonial(state,data){
      state.testimonial = data
    },
    setProject(state,data){
      state.project = data
    },
    setSkill(state,data){
      state.skills = data
    },
    setProfile(state,data){
      state.profile = data
    },
    setAbout(state,data){
      state.aboutimage= data
    },
    setDOB(state,data){
      state.dob = data
    },
    setpassions(state,data){
      state.passions = data
    },
    setStudies(state,data){
      state.studies = data
    },
    setIntern(state,data){
      state.intern = data
    },
    setsoftSkills(state,data){
      state.skill = data
    }
    
  },
  actions: {
    fetchData({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
            // console.log(data)
            commit('setData', data.About[0]);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    },
    fetchHome({commit}){
      fetch(hostedData)
      .then(response=> response.json())
      .then(home=> {
        // console.log(home)
        commit('setHome',home.Home[0])
      })
    },
    fetcheducation({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
          //  console.log(data[0])
            commit('seteducation', data.education[0]);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    },
    fetchJob({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
           console.log(data.jobs[0])
            commit('setJob', data.jobs[0]);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    },
    fetchTestimonial({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
          //  console.log(data[0])
          commit('setTestimonial', data.testimonial);
          // console.log("Image URL:", data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    },
    fetchProject({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
           console.log(data.projects[0])
          commit('setProject', data.projects);
          // console.log("Image URL:", data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    },
    fetchSkills({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
           console.log(data.skills[0])
          commit('setSkill', data.skills);
          // console.log("Image URL:", data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    },
    fetchProfile({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
           console.log(data.profile[0])
          commit('setProfile', data.profile[0]);
          // console.log("Image URL:", data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    },
    fetchAbout({ commit }) {
      try {
        fetch(hostedData)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then(data => {
           console.log(data.aboutimage[0])
          commit('setAbout', data.aboutimage[0]);
          // console.log("Image URL:", data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            // Optionally, you can commit an error state mutation here
            // commit('setError', error.message);
          });
      } catch (error) {
        console.error('An unexpected error occurred:', error);
        // Optionally, you can commit an error state mutation here
        // commit('setError', 'An unexpected error occurred');
      }
    },
    fetchDOB ({commit}){
      fetch(hostedData)
      .then(response=> response.json())
      .then(data=> {
        console.log(data.DOB[0])
        commit('setDOB',data.DOB[0])
      }) 
    },
    fetchpassions({commit}){
      fetch(hostedData)
      .then(response=> response.json())
      .then(data=> {
        console.log(data.passion[0])
        commit('setpassions',data.passion[0])
      })
    },
    fetchStudies({commit}){
      fetch(hostedData)
      .then(response=> response.json())
      .then(data=> {
        console.log(data.studies[0])
        commit('setStudies',data.studies[0])
      })
    },
    fetchIntern({commit}){
      fetch(hostedData)
      .then(response=> response.json())
      .then(data=> {
        console.log(data.intern[0])
        commit('setIntern',data.intern[0])
      })
    },
    fetchsoftSkills({commit}){
      fetch(hostedData)
      .then(response=> response.json())
      .then(data=> {
        console.log(data.skill[0])
        commit('setsoftSkills',data.skill)
      })
    }
    
  },
  modules: {},
});