import React from 'react';

const Price = () => {
    return (
        <div>
            

    <div className="pricing">
      <div className="plan">
        <h2>FREE</h2>
        <div className="price">$0/month</div>
        <ul className="features">
          <li><i className="fas fa-check-circle"></i> Single User</li>
          <li><i className="fas fa-check-circle"></i> 50GB Storage</li>
          <li><i className="fas fa-check-circle"></i> Unlimited Public Projects</li>
          <li><i className="fas fa-check-circle"></i> Community Access</li>
          <li><i className="fas fa-times-circle"></i> Unlimited Private Project</li>
          <li><i className="fas fa-times-circle"></i> Dedicated Phone Support</li>
          <li><i className="fas fa-times-circle"></i> Free Subdomain</li>
          <li><i className="fas fa-times-circle"></i> Monthly Status Reports</li>
        </ul>
        <button>BUTTON</button>
      </div>
      <div className="plan popular">
    
        <h2>PLUS</h2>
        <div className="price">$9/month</div>
        <ul className="features">
        <li><i className="fas fa-check-circle"></i> 5 User</li>
        <li><i className="fas fa-check-circle"></i> 50GB Storage</li>
        <li><i className="fas fa-check-circle"></i> Unlimited Public Projects</li>
          <li><i className="fas fa-check-circle"></i> Community Access</li>
          <li><i className="fas fa-check-circle"></i> Unlimited Private Project</li>
          <li><i className="fas fa-check-circle"></i> Dedicated Phone Support</li>
          <li><i className="fas fa-check-circle"></i> Free Subdomain</li>
          <li><i className="fas fa-times-circle"></i> Monthly Status Reports</li>
        </ul>
        <button>BUTTON</button>
      </div>
      <div className="plan">
        <h2>PRO</h2>
        <div className="price">$49/month</div>
        <ul className="features">
        <li><i className="fas fa-check-circle"></i> Unlimited User</li>
        <li><i className="fas fa-check-circle"></i> 50GB Storage</li>
        <li><i className="fas fa-check-circle"></i> Unlimited Public Projects</li>
          <li><i className="fas fa-check-circle"></i> Community Access</li>
          <li><i className="fas fa-check-circle"></i> Unlimited Private Project</li>
          <li><i className="fas fa-check-circle"></i> Dedicated Phone Support</li>
          <li><i className="fas fa-check-circle"></i> Free Subdomain</li>
          <li><i className="fas fa-check-circle"></i> Monthly Status Reports</li>
        </ul>
        <button>BUTTON</button>
      </div>
    </div>
        </div>
    );
};

export default Price;