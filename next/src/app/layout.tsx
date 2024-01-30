import type { Metadata } from "next";
import { Header } from "lodge-lib/components/Blocks/Header/Header";
export const metadata: Metadata = {
    title: "Club preprod",
    description: "club project",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='fr'>
            <body>
                <header>
                    <Header />
                </header>
                <main>{children}</main>
            </body>
        </html>
    );
}
