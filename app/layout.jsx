import "@styles/global.css";
import Nav from "components/Nav";
import { ReactQueryProvider } from "util/ReactQueryProvider";

export const metadata = {
  title: "UCS(Myeik) | Online Selection Voting.",
  description: "Online Voting System For UCS(Myeik), Builded by Nay Myo Khant.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <main className="app w-screen h-screen flex flex-col items-center bg-gray-200 relative">
            <Nav />
            <section className="w-full h-full  flex justify-start flex-col overflow-auto">
              {children}
            </section>
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
