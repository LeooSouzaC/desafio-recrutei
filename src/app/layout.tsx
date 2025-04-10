/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { GlobalStyle } from "@/styles/global";
import StyledComponentsRegistry from "@/lib/styledComponentsRegistry";
import DayjsRegistry from "@/lib/dayjsRegistry";

export const metadata: Metadata = {
  title: "Desafio Recrutei",
  description:
    "React App para um desafio tecnico feito para a empresa Recrutei",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <DayjsRegistry>
          <StyledComponentsRegistry>
            <GlobalStyle />
            {children}
          </StyledComponentsRegistry>
        </DayjsRegistry>
      </body>
    </html>
  );
}
