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
        <a onClick={() => setMobileToggle(false)}>
          Servicios
        </a>
        <DropDown>
          <ul>
            <li>
            <Link
                href="/service/facturacion"
                onClick={() => setMobileToggle(false)}
              >
                Facturación Electrónica DIAN
              </Link>
              <Link
                href="/service/documento-soporte"
                onClick={() => setMobileToggle(false)}
              >
                Documento soporte
              </Link>
              <Link
                href="/service/nomina"
                onClick={() => setMobileToggle(false)}
              >
                Nómina Electrónica DIAN
              </Link>
              <Link
                href="/service/sistema-de-facturacion-pos"
                onClick={() => setMobileToggle(false)}
              >
                Sistema de Facturación POS
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
