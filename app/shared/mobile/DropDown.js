import Link from "next/link";
import { usePathname } from "next/navigation";

const DropDown = ({ isClicked, links }) => {
  const pathname = usePathname();
  return (
    <ul
      className={`${
        isClicked ? `h-52` : `h-0`
      } transition-all overflow-hidden text-black`}
    >
      {links.map((link) => (
        <li className="center-section my-2 block text-left" key={link.link}>
          <Link
            href={`${link.link}`}
            className={
              pathname.slice(1, pathname.length - 1) === link.link
                ? `underline`
                : null
            }
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
