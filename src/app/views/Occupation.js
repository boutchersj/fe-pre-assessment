import React from 'react';
import NavLinks from '../NavLinks';
import { Link } from 'react-router-dom';
import Input from '../Input';
import OccupationPicker from '../OccupationPicker';

function Occupation(props) {
  return (
    <Input>
      <label htmlFor="occupation">Occupation</label>
      <OccupationPicker handleChange={props.handleChange} value={props.formInputValues.occupation} options={props.options} />
      <NavLinks>
        <Link to='/password' className='btn-nav btn-prev' data-testid='occupation-prev' style={{visibility: props.formInputValues.occupation ? 'visible' : 'visible' }}>Previous</Link>
        <Link to='/state' className='btn-nav btn-next' data-testid='occupation-next' style={{visibility: props.formInputValues.occupation ? 'visible' : 'visible' }}>Next</Link>
      </NavLinks>
    </Input>
  );
}

export default Occupation;