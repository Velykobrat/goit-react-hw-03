import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must be 50 characters or less'),
  number: Yup.string()
    .required('Number is required')
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number must be 50 characters or less')
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid phone number format'),
});

function ContactForm({ onAddContact }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        const newContact = { id: nanoid(), ...values };
        onAddContact(newContact);
        resetForm();
      }}
    >
      {() => (
        <Form className={styles.form}>
          <label>
            Name:
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" className={styles.error} />
          </label>
          <label>
            Number:
            <Field type="tel" name="number" />
            <ErrorMessage name="number" component="div" className={styles.error} />
          </label>
          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
