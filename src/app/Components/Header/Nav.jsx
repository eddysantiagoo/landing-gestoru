import Link from "next/link";
import DropDown from "./DropDown";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link href="/">Inicio</Link>
      </li>
      <li>
        <Link href="/about">Somos</Link>
      </li>

      <li className="menu-item-has-children">
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/service/service-details"
                onClick={() => setMobileToggle(false)}
              >
                Service Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li>
        <Link href="/contact" onClick={() => setMobileToggle(false)}>
          Contactanos
        </Link>
      </li>
    </ul>
  );
}
