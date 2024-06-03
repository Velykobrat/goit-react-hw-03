import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
});

function ContactForm({ onAddContact }) {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact({ ...values, id: Date.now().toString() });
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <label className={styles.label} htmlFor="name">Name</label>
        <Field name="name" type="text" className={styles.input} />
        <ErrorMessage name="name" component="div" />

        <label className={styles.label} htmlFor="number">Number</label>
        <Field name="number" type="text" className={styles.input} />
        <ErrorMessage name="number" component="div" />

        <button type="submit" className={styles.button}>Add contact</button>
      </Form>
    </Formik>
  );
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
