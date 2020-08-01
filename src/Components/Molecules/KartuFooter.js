import React from 'react';
import {FacebookFilled, YoutubeFilled, LinkedinFilled, DribbbleSquareFilled} from '@ant-design/icons';

export default function KartuFooter() {
  return (
    <div className="footer">
      <div className="sosial-media">
        <p>yuk terus ikuti kami dengan mengikuti media sosial kami terus agar kami tidak ketinggalan info terbaru.</p>
        <FacebookFilled />
        <YoutubeFilled />
        <LinkedinFilled />
        <DribbbleSquareFilled />
      </div>
      <div className="kenapa-saya">
        <div className="bagian1">
          <h6>Kenapa BlogSaya</h6>
          <p>Marketing</p>
          <p>Social Media</p>
          <p>News & Editorial</p>
          <p>Agencies</p>
          <p>Internal</p>
          <p>Communications</p>
          <p>Enterprise</p>
        </div>
        <div className="bagian2">
          <h6>Sumber Daya</h6>
          <p>Blog</p>
          <p>Customers</p>
          <p>Video Showcase</p>
          <p>Watch Demo</p>
        </div>
        <div className="bagian3">
          <h6>Pricing</h6>
          <div>
            <h6>Perusahaan</h6>
            <p>About Us</p>
            <p>Jobs</p>
            <p>Press</p>
          </div>
          <div>
            <h6>Legal</h6>
            <p>Terms and Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}
