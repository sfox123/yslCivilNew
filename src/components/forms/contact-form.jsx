import { useFormik } from "formik";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { contactUsSchema } from "../../utils/validation-schema";
import ErrorMsg from "./error-msg";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", email: "", msg: "", number: "" },
    validationSchema: contactUsSchema,
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const values = formik.values;
    console.log("Submitting form with values:", values); // Debug: log form values
    try {
      const response = await axios.post(
        " https://us-central1-bute-backend.cloudfunctions.net/app/ysl",
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response from backend:", response); // Debug: log response

      if (response.status === 200) {
        toast.success(`${values.name}, your message was sent successfully`, {
          position: "top-left",
        });
        formik.resetForm();
      } else {
        toast.error(`Error: ${response.data.message}`, {
          position: "top-left",
        });
      }
    } catch (error) {
      console.error("Error during form submission:", error); // Debug: log error
      toast.error(`Network error: ${error.message}`, {
        position: "top-left",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form id="contact-form" onSubmit={handleFormSubmit}>
      <div className="mb-30">
        <input
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="name"
          type="text"
          placeholder="Enter your Name"
        />
        {formik.touched.name && <ErrorMsg error={formik.errors.name} />}
      </div>
      <div className="mb-30">
        <input
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="email"
          type="email"
          placeholder="Enter your Mail"
        />
        {formik.touched.email && <ErrorMsg error={formik.errors.email} />}
      </div>
      <div className="mb-30">
        <input
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="number"
          type="text"
          placeholder="Enter your Number"
        />
        {formik.touched.number && <ErrorMsg error={formik.errors.number} />}
      </div>
      <div className="mb-30">
        <textarea
          value={formik.values.msg}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="msg"
          placeholder="Enter your Message"
        ></textarea>
        {formik.touched.msg && <ErrorMsg error={formik.errors.msg} />}
      </div>
      <button type="submit" className="tp-btn-yellow" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
