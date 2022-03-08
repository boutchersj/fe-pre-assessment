import React from 'react';

function NavLinks(props) {
  return (
    <section style={props?.firstPageStyles} className="nav-links">
      {props.children}
    </section>
  );
}

export default NavLinks;