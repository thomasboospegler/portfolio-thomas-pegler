import React from 'react';
import { Link } from 'react-scroll';
import '../styles/ScrollIndicator.css';

export default function ScrollIndicator() {
  return (
    <Link to="toolbox" smooth duration={0}>
      <div className="mouse_scroll">
        <div className="mouse">
          <div className="wheel" />
        </div>
        <div>
          <span className="m_scroll_arrows unu" />
          <span className="m_scroll_arrows doi" />
          <span className="m_scroll_arrows trei" />
        </div>
      </div>
    </Link>
  );
}
