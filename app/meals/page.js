import Link from "next/link";

import classes from "./page.module.css";
import { getMeals } from "@/lib/meals";
import MealsGrid from "@/components/meals/meals-grid";
import { Suspense } from "react";

async function Meals() {
  const myMeals = await getMeals();
  return <MealsGrid meals={myMeals} />;
}

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}></div>
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
        <Suspense
          fallback={
            <p className={classes.loading}>Fetching Data From Server...</p>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
