import "@styles/global.css";
import Nav from "components/Nav";
import { ReactQueryProvider } from "util/ReactQueryProvider";
import { Analytics } from '@vercel/analytics/react';
// export const metadata = {
//   title: "UCS(Myeik) | Online Selection Voting System.",
//   description: "Online Voting System for UCS(Myeik)",
//   meta: [
//     {
//       name: "viewport",
//       content:
//         "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
//     },
//     <meta property="og:title" content="Title Here" />,
//     <meta property="og:description" content="Description Here" />,
//     <meta property="og:image" content="https://i.imgur.com/9rgUcY5.jpg" />,
//   ],
// };

export const metadata = {
  title: "UCS(Myeik) | Online Selection Voting System.",
  description: "Online Voting System for UCS(Myeik)",
  meta: [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
    },
    {
      property: "og:title",
      content: "Test",
    },
    {
      property: "og:description",
      content: "Test Description",
    },
    {
      property: "og:image",
      content: "https://i.imgur.com/9rgUcY5.jpg",
    },
    // Add more meta tags as needed
  ],
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <main className="app w-screen h-screen flex flex-col items-center overflow-x-hidden bg-gray-200 relative">
            <Nav />
            <section className="w-screen h-full  flex justify-start flex-col overflow-auto overflow-x-hidden">
              {children}
              <Analytics />
            </section>
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
