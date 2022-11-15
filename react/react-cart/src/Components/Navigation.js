import { Link } from "react-router-dom";

const Navigation = () => {

  const cartStyle=
  {
    background:'#F59E0D',
    display:'flex',
    padding:'6px 12px',
    borderRadius:'50px',
    
  }

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
        <Link to="/">
          <img
            style={{ height: 45 }} src="/images/logo.png" alt="Logo"/>
        </Link>

        <ul className="flex items-center">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
        </ul>

        <div style={cartStyle}>
          <span>10</span>
          <img src="/images/cart.png" alt="cart"></img>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
