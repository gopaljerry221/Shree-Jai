"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Contact() {
  // Validation schema using Yup
  const validationSchema = Yup.object({
    firstname: Yup.string().required("Firstname is required"),
    lastname: Yup.string().required("Lastname is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone is required"),
    address: Yup.string().required("Address is required"),
  });

  return (
    <div className="dealer-form-wrapper flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white p-6 md:p-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Business Enquiry
        </h2>

        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            address: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Form Data:", values);
            alert("Form Submitted Successfully!");
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              {/* First & Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 text-[14px] font-medium">Firstname *</label>
                  <Field
                    type="text"
                    name="firstname"
                    placeholder="Enter your firstname"
                    className="w-full border px-[10px] py-[6px] rounded-md outline-0"
                  />
                  <ErrorMessage
                    name="firstname"
                    component="div"
                    className="text-red-500 text-[12px] mt-1"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-[14px] font-medium">Lastname *</label>
                  <Field
                    type="text"
                    name="lastname"
                    placeholder="Enter your lastname"
                    className="w-full border px-[10px] py-[6px] rounded-md outline-0"
                  />
                  <ErrorMessage
                    name="lastname"
                    component="div"
                    className="text-red-500 text-[12px] mt-1"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-1 text-[14px] font-medium">Email *</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full border px-[10px] py-[6px] rounded-md outline-0"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-[12px] mt-1"
                  />
                </div>

                <div>
                  <label className="block mb-1 text-[14px] font-medium">Phone *</label>
                  <Field
                    type="text"
                    name="phone"
                    placeholder="Enter your phone"
                    className="w-full border px-[10px] py-[6px] rounded-md outline-0"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-[12px] mt-1"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="mb-[20px]">
                <label className="block mb-1 text-[14px] font-medium">Address *</label>
                <Field
                  as="textarea"
                  name="address"
                  placeholder="Enter your address"
                  rows="3"
                  className="w-full border px-[10px] py-[6px] rounded-md outline-0"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-[12px]"
                />
              </div>
              
              {/* Submit Button */}
              <div className="text-center mt-[20px]">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#f3180e] hover:bg-[#8b0000] w-[200px] cursor-pointer text-white px-8 py-3 rounded-md font-semibold transition-all"
                >
                  {isSubmitting ? "Submitting..." : "SEND"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
