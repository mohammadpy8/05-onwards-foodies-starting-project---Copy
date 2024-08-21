"use client";

import Link from "next/link";
import ImageSlideshow from "@/components/images/images-slideshow";
import classes from "./page.module.css";
import Foo from "@/components/f";
import axios from "axios";

export default function Home() {
  const PostData = async () => {
    try {
      const res = await axios.post("https://sandbox.banktest.ir/mellat/bpm.shaparak.ir/pgwchannel/services/pgw?wsdl", {
        terminalId: 134756209,
        userName: "user134756209",
        userPassword: "1181988",
        orderId: 4,
        amount: 10000,
        localDate: "20091008",
        localTime: "102003",
        additionalData: "خرید از درگاه",
        callBackUrl: "https://google.com",
        payerId: 332680729,
      });
      console.log("ressss====>", res.data);
    } catch (error) {
      console.log("error================>", error);
    }
  };
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}>
          <ImageSlideshow />
          <Foo></Foo>
        </div>
        <div>
          <div className={classes.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={classes.cta}>
            <Link prefetch={false} href="/community">
              Join the Community
            </Link>
            <Link prefetch={false} href="/meals">
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place
            to discover new dishes, and to connect with other food lovers.
          </p>
          <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>

        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite recipes with the world. It&apos;s a place
            to discover new dishes, and to connect with other food lovers.
          </p>
          <p>NextLevel Food is a place to discover new dishes, and to connect with other food lovers.</p>
        </section>
        <button
          onClick={PostData}
          style={{
            width: "150px",
            heigth: "80px",
            backgroundColor: "red",
            color: "white",
          }}
        >
          datat post
        </button>
      </main>
    </>
  );
}
