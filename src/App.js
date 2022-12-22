import { Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <div className="brand-box">
        <h1>Magic Form</h1>
        <p>Build forms in React without the tears.</p>
      </div>
      <div className="magic-form">
        <Formik
          initialValues={{
            name: "",
            email: "",
            agree: false,
            favoriteColor: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("Name required"),
            email: Yup.string().required("Email required"),
            agree: Yup.boolean().required("You must receive conditions"),
            favoriteColor: Yup.string()
              .required("There is everybody favorite color")
              .oneOf(["red", "blue", "green"]),
          })}
          onSubmit={(values, {resetForm, setSubmitting}) => {
            console.log(values)
            setTimeout(()=> {
              resetForm();
              setSubmitting(false);
            }, 2000)
          }}
        >
          {({
            values,
            errors,
            handleSubmit,
            handleReset,
            handleChange,
            dirty,
            touched,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <h3>Login</h3>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Rauf..."
                className="input"
                value={values.name}
                onChange={handleChange}
              />
              {
                errors.name && touched.name && (
                  <div className="input-feedback">
                    {errors.name}
                  </div>
                )
              }
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="devrauf.rzayev@gmail.com"
                className="input"
                value={values.email}
                onChange={handleChange}
              />
              {
                errors.email && touched.email && (
                  <div className="input-feedback">
                    {errors.email}
                  </div>
                )
              }
              <label htmlFor="favoriteColor" className="topMargin">
                Favorite color
              </label>
              <select
                id="favoriteColor"
                value={values.favoriteColor}
                onChange={handleChange}
                style={{
                  marginTop: 10,
                  width: "150px",
                  padding: "10px 15px",
                  outline: "none",
                }}
              >
                <option value="" label="Select color"></option>
                <option value="red" label="Red"></option>
                <option value="blue" label="Blue"></option>
                <option value="green" label="Green"></option>
              </select>
              {
                errors.favoriteColor && touched.favoriteColor && (
                  <div className="input-feedback">
                    {errors.favoriteColor}
                  </div>
                )
              }
              <div className="checkbox topMargin">
                <input
                  id="agree"
                  type="checkbox"
                  value={values.agree}
                  onChange={handleChange}
                />
                <label htmlFor="agree" className="checkbox-label">
                I have read and accept the terms and conditions 
                </label>
              </div>
              <button type="submit" disabled={!dirty || isSubmitting}>Login</button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default App;
