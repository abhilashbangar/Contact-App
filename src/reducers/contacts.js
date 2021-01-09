import { v4 as uuidv4 } from "uuid"; // package to generate unique id's
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
} from "../actions/";

const initialState = {
  data: [
    {
      id: uuidv4(),
      contactName: "Clementina DuBuque",
      mobile: 8673744306,
      email: "clementinaDuBuque@gmail.com",
      status: true,
    },
    {
      id: uuidv4(),
      contactName: "Leanne Graham",
      mobile: 8773743430,
      email: "Sincere@april.biz",
      status: false,
    },
    {
      id: uuidv4(),
      contactName: "Ervin Howell",
      mobile: 7786744324,
      email: "Ervin.Howell@gmail.com",
      status: true,
    },
    {
      id: uuidv4(),
      contactName: "Clementine Bauch",
      mobile: 8678737443,
      email: "ClementineBauch@gmail.com",
      status: true,
    },
    {
      id: uuidv4(),
      contactName: "Patricia Lebsack",
      mobile: 78633744307,
      email: "donaldtrump@gmail.com",
      status: true,
    },
    {
      id: uuidv4(),
      contactName: "Jon Doe",
      mobile: 6673744301,
      email: "johdoe999@gmail.com",
      status: true,
    },
    {
      id: uuidv4(),
      contactName: "Robel-Corkery",
      mobile: 8773743430,
      email: "kRobel-Corkery@gmail.com",
      status: false,
    },
    {
      id: uuidv4(),
      contactName: "Chelsey Dietrich",
      mobile: 7786744324,
      email: "ChelseyDietrich@gmail.com",
      status: true,
    },
    {
      id: uuidv4(),
      contactName: "Dennis Schulist",
      mobile: 8678737443,
      email: "DennisSchulist@gmail.com",
      status: true,
    },  
    {
      id: uuidv4(),
      contactName: "Kurtis Weissnat",
      mobile: 78633744307,
      email: "KurtisWeissnat@gmail.com",
      status: true,
    },
  ],
  matchForFilter: null, //temporary array to hold edit operaton object
};

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        data: state.data.filter((contact) => contact.id !== action.payload),
      };
    case GET_CONTACT: // get object that matches url parameter id to perform edit operation
      let arr = state.data.filter((contact) => contact.id === action.payload);
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        matchForFilter: arr, // save matching object into a temp array to later merge into main array
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};

export default contacts;
