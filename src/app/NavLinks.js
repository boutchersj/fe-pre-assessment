import React from 'react';

function NavLinks(props) {
  return (
    <section class="nav-links">
      {props.children}
    </section>
  );
}

export default NavLinks;