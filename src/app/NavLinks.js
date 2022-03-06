import React from 'react';

function NavLinks(props) {
  return (
    <section className="nav-links">
      {props.children}
    </section>
  );
}

export default NavLinks;