import PropTypes from 'prop-types';
import styles from './Contact.module.css';


function Contact({ id, name, number, onDeleteContact }) {
  return (
    <li className={styles.listItem}>
      <span className={styles.name}>{name}</span>
      <span className={styles.number}>{number}</span>
      <button onClick={() => onDeleteContact(id)} className={styles.button}>Delete</button>
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

