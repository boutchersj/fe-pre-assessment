import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Input';
import OccupationPicker from '../OccupationPicker';

function Occupation(props) {
  return (
    <Input>
      <label htmlFor="occupation">Occupation</label>
      <OccupationPicker handleChange={props.handleChange} value={props.formInputValues.occupation} options={props.options} required />
      <section>
          <Link to='/password' className='btn-nav'>Previous</Link>
          <Link to='/state' className='btn-nav'>Next</Link>
      </section>
    </Input>
  );
}

export default Occupation;