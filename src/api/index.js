import Cookies from "js-cookie";

export const patientSignupApi = async (regName, regEmail, regPassword) => {
  const data = await fetch(
    "https://telemedicine-backend.herokuapp.com/patientSignup",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: regName,
        email: regEmail,
        password: regPassword,
      }),
    }
  );
  return await data.json();
};

export const patientLoginApi = async (loginEmail, loginPassword) => {
  const data = await fetch(
    "https://telemedicine-backend.herokuapp.com/patientLogin",
    {
      method: "post",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    }
  );
  return await data.json();
};

export const doctorSignupApi = async (regName, regEmail, regPassword) => {
  const data = await fetch(
    "https://telemedicine-backend.herokuapp.com/docSignup",
    {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: regName,
        email: regEmail,
        password: regPassword,
      }),
    }
  );
  return await data.json();
};

export const doctorLoginApi = async (loginEmail, loginPassword) => {
  const data = await fetch(
    "https://telemedicine-backend.herokuapp.com/docLogin",
    {
      method: "post",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginEmail,
        password: loginPassword,
      }),
    }
  );
  return await data.json();
};

export const patientProfileApi = async () => {
  const data = await fetch(
    "https://telemedicine-backend.herokuapp.com/patient/profile/",
    {
      method: "get",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  return await data.json();
};

export const patientProfileUpdateApi = async (formData) => {
  const data = await fetch(
    "https://telemedicine-backend.herokuapp.com/patient/profile/",
    {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  return await data.json();
};

export const doctorProfileApi = async () => {
  const data = await fetch(
    "https://telemedicine-backend.herokuapp.com/doctor/profile/",
    {
      method: "get",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  return await data.json();
};

export const doctorProfileUpdateApi = async (formData) => {
  const data = await fetch(
    "https://telemedicine-backend.herokuapp.com/doctor/profile/",
    {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  return await data.json();
};

export const getDoctorsApi = async () => {
  const doctor = await fetch(
    "https://telemedicine-backend.herokuapp.com/patient/getDoctors",
    {
      method: "get",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  return await doctor.json();
};

export const searchDoctorApi = async (text) => {
  const doctor = await fetch(
    "https://telemedicine-backend.herokuapp.com/patient/searchDoctors",
    {
      method: "post",
      body: JSON.stringify({ text }),
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  return await doctor.json();
};

export const sendRequestApi = async (id) => {
  const data = await fetch(
    `https://telemedicine-backend.herokuapp.com/patient/sendRequest/${id}`,
    {
      method: "post",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  return await data.json();
};

export const cancelRequestApi = async (id) => {
  const data = await fetch(
    `https://telemedicine-backend.herokuapp.com/patient/cancelRequest/${id}`,
    {
      method: "post",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  return await data.json();
};

export const checkInvitationApi = async () => {
  const data = await fetch(
    `https://telemedicine-backend.herokuapp.com/doctor/checkInvitation`,
    {
      method: "get",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  console.log(data);
  return await data.json();
};

export const confirmInvitationApi = async (id) => {
  const data = await fetch(
    `https://telemedicine-backend.herokuapp.com/doctor/confirmInvitation/${id}`,
    {
      method: "post",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  return await data.json();
};

export const getPatientsApi = async () => {
  const data = await fetch(
    "https://telemedicine-backend.herokuapp.com/doctor/getPatients",
    {
      method: "get",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  return await data.json();
};

export const getAppointedDocsApi = async () => {
  const data = await fetch(
    "https://telemedicine-backend.herokuapp.com/patient/getAppointedDoctors",
    {
      method: "get",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  return await data.json();
};

export const sendProblemApi = async (id, message) => {
  const data = await fetch(
    `https://telemedicine-backend.herokuapp.com/patient/sendProblem/${id}`,
    {
      method: "post",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
        message: message,
      }),
    }
  );
  return await data.json();
};

export const sendPrescriptionApi = async (id, message) => {
  const data = await fetch(
    `https://telemedicine-backend.herokuapp.com/doctor/sendPrescription/${id}`,
    {
      method: "post",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: id,
        message: message,
      }),
    }
  );
  return await data.json();
};

export const listMessageApi = async (id) => {
  const data = await fetch(
    `https://telemedicine-backend.herokuapp.com/message/listMessage?id=${id}`,
    {
      method: "get",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    }
  );
  return await data.json();
};
