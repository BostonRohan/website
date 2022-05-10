import { useRouter } from "next/router";
import { scroll as scrollTo } from "../../utils/scroll";
import { animateScroll as scroll } from "react-scroll";
import Toggle from "./toggle/toggle";
import styles from "../../styles/nav.module.css";
import Image from "next/image";

function Nav() {
  const nav = ["About", "Projects", "Contact", "Other"];
  const router = useRouter();

  const handleClick = (page) => {
    if (page === "Other") router.push("/other");
    else scrollTo(page);
  };

  return (
    <div className={styles.nav}>
      <span className={styles.border}>
        <Image
          src="/Headshots/headshot.jpg"
          width="50px"
          height="50px"
          alt="Boston Rohan"
          className={styles.image}
          quality="100"
          onClick={() => scroll.scrollToTop()}
          priority
        />
      </span>
      <section className={styles.link}>
        {nav.map((page) => {
          return (
            <h3 key={page} onClick={() => handleClick(page)}>
              {page}
            </h3>
          );
        })}
      </section>
      <Toggle />
    </div>
  );
}
export default Nav;
