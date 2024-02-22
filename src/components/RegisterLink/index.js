import { Link } from "react-router-dom";
import "./RegisterLink.css";

export default function RegisterLink ({url, children })
{
  return (
    <Link to={url} className='link'>
      {children}
    </Link>
  );
}