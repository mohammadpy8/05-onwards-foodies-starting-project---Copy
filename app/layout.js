import MainHeader from "@/components/main-header/main-header";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  console.log("DFDFDFDFdf");
  return (
    <html lang="en">
      <body>
        <MainHeader />

        {children}

        <div className="navigation-container">
          <p className="bottom-navigation">Bottom</p>
        </div>
      </body>
    </html>
  );
}
