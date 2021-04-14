import { useRef } from 'react';
import PropTypes from "prop-types";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import BigNumber from "bignumber.js";

const AddUser = ({ addUserDetail, showValidation }) => {

    const addUser = (values) => {
        let credits = new BigNumber(values.credits).toFixed();
        addUserDetail({ name: values.name, credits: credits });
    }

    const addUserSchema = Yup.object().shape({
        name: Yup.string()
          .max(50, 'name length should be less than 50 characters')
          .required('Required'),
        credits: Yup.number()
          .min(0, 'min value should be 0')
          .required('Required')
      });

    return (
        <>
            <div>
                <Formik
                initialValues={{
                    name: '',
                    credits: '',
                }}
                validationSchema={addUserSchema}
                onSubmit={(values, { resetForm }) => {
                    addUser(values)
                    resetForm();
                }}
                >
                {({ errors, touched }) => (
                    <Form className="bg-white rounded px-8 pt-6 pb-8 mb-4 grid justify-items-center">
                    <Field className="mb-4 shadow appearance-none border rounded w-half py-2 px-3 text-grey-darker" name="name" type="text" placeholder="name"/>
                    {errors.name && touched.name ? (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{errors.name}</div>
                    ) : null}
                    <Field className="mb-4 shadow appearance-none border rounded w-half py-2 px-3 text-grey-darker" name="credits" type="number" placeholder="credits"/>
                    {errors.credits && touched.credits ? (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">{errors.credits}</div>
                    ) : null}
                    <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="submit">Submit</button>
                    </Form>
                )}
                </Formik>
            </div>
        </>
    )
}

AddUser.defaultProps = {
    addUserDetail: () => { },
    showValidation: false
}

AddUser.propTypes = {
    addUserDetail: PropTypes.func,
    showValidation: PropTypes.bool,
}

export default AddUser;