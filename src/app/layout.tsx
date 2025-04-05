import type { Metadata } from "next";
import { GlobalStyle } from "@/styles/global";
import StyledComponentsRegistry from "@/lib/registry";

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
      <body>
      <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
