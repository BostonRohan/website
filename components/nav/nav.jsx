import { useState } from "react";
import { scroller } from "react-scroll";
import { Turn as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import Toggle from "./toggle/toggle";
import Profile from "./profile";

function Nav() {
  const [isOpen, setOpen] = useState(false);
  const [isOtherOpen, setOtherOpen] = useState(false);
  const nav = ["About", "Projects", "Contact"];
  const other = ["Blog", "School", "Resume", "Hobbies"];
  // let location = useLocation();
  // let home = location.pathname === "/";

  const handleClick = (element) => {
    setOpen(false);
    setTimeout(
      () =>
        scroller.scrollTo(element, {
          duration: 1000,
          delay: 0,
          smooth: "easeInOutQuart",
        }),
      200
    );
  };
  return (
    <div>
      {/* <Profile isHome={home} />
      <Toggle /> */}
      Hello Nav yerrrrrrrrrrrr
      {/* {isOpen ? (
        <div className="nav-active">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            size={40}
            hideOutline={false}
          />
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "linear" }}
            className="nav-elements"
          >
            {nav.map((element, i) => {
              if (home)
                return (
                  <h1
                    key={i}
                    className="nav-element text-underline-hover"
                    onClick={() => handleClick(element)}
                  >
                    {element}
                  </h1>
                );
              else
                return (
                  <Link key={i} to="/" onClick={() => handleClick(element)}>
                    <h1 className="nav-element text-underline-hover">
                      {element}
                    </h1>
                  </Link>
                );
            })}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "linear" }}
            className="nav-other-active"
          >
            {isOtherOpen ? (
              <>
                {other.map((element, i) => {
                  return (
                    <Link
                      key={i}
                      to={`/${element.toLowerCase()}`}
                      onClick={() => setOpen(false)}
                    >
                      <h3 className="nav-element-other text-underline-hover">
                        {element}
                      </h3>
                    </Link>
                  );
                })}
              </>
            ) : (
              <h1
                className="nav-element text-underline-hover"
                onClick={() => setOtherOpen(true)}
              >
                Other
              </h1>
            )}
          </motion.div>
        </div>
      ) : (
        <div>
          <Hamburger
            duration={0.8}
            toggled={isOpen}
            toggle={setOpen}
            size={40}
            hideOutline={false}
          />
        </div>
      )} */}
    </div>
  );
}
export default Nav;