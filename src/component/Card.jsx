import React from 'react';

const Card = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card h-100">
    <div className="card-price">
        
    </div>
      <div className="card-body">
        <p>Free</p>
        <h2 className="card-title">$0/month</h2>
        <p><span className="fa-solid fa-check"></span>Single User</p>
        <p><span className="fa-solid fa-check"></span>50GB Storage</p>
        <p><span className="fa-solid fa-check"></span>Unlimited Public Projects</p>
        <p><span className="fa-solid fa-check"></span>Community Access</p>
        <p><span className="fa-sharp fa-solid fa-x"></span>Unlimited Private Project </p>
        <p><span className="fa-sharp fa-solid fa-x"></span>Dedicated Phone Support </p>
        <p><span className="fa-sharp fa-solid fa-x"></span>Free Subdomain </p>
        <p><span className="fa-sharp fa-solid fa-x"></span>Monthly Status Reports </p>
        </div>
        <div >
            <button className="card-button">BUTTON</button>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card h-100">
      <div className="card-body">
      <p>PLUS</p>
        <h2 className="card-title">$9/month</h2>
        <p><span className="fa-solid fa-check"></span>5 User</p>
        <p><span className="fa-solid fa-check"></span>50GB Storage</p>
        <p><span className="fa-solid fa-check"></span>Unlimited Public Projects</p>
        <p><span className="fa-solid fa-check"></span>Community Access</p>
        <p><span className="fa-solid fa-check"></span>Unlimited Private Project </p>
        <p><span className="fa-solid fa-check"></span>Dedicated Phone Support </p>
        <p><span className="fa-solid fa-check"></span>Free Subdomain </p>
        <p><span className="fa-sharp fa-solid fa-x"></span>Monthly Status Reports </p>
        </div>
        <div >
            <button className="card-button">BUTTON</button>
      </div>
    </div>
  </div>
  <div classNames="col">
    <div className="card h-100">
      <div className="card-body">
      <p>PRO</p>
        <h2 className="card-title">$49/month</h2>
        <p><span className="fa-solid fa-check"></span>Unlimited User</p>
        <p><span className="fa-solid fa-check"></span>50GB Storage</p>
        <p><span className="fa-solid fa-check"></span>Unlimited Public Projects</p>
        <p><span className="fa-solid fa-check"></span>Community Access</p>
        <p><span className="fa-solid fa-check"></span>Unlimited Private Project </p>
        <p><span className="fa-solid fa-check"></span>Dedicated Phone Support </p>
        <p><span className="fa-solid fa-check"></span>Free Subdomain </p>
        <p><span className="fa-solid fa-check"></span>Monthly Status Reports </p>
        </div>
        <div >
            <button className="card-button">BUTTON</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;