import Image from "next/image";

import MainHeaderBackground from "./main-header-background";
import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import Navlink from "./navlink/navlink";
import Link from "next/link";

export default function MainHeader() {
  console.log("ddffffffffffff");
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Navlink href="/meals">Browse Meals</Navlink>
            </li>
            <li>
              <Navlink href="/community">Foodies Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
