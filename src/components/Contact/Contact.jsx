import PropTypes from 'prop-types';
import styles from './Contact.module.css';


function Contact({ id, name, number, onDeleteContact }) {
  return (
    <li className={styles.contact}>
      <p>{name}: {number}</p>
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;

