import StreemVideoProvider from "@/providers/StreemClientProvider";
import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreemVideoProvider>{children}</StreemVideoProvider>
    </main>
  );
};

export default RootLayout;
