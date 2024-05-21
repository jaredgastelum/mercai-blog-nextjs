import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import ImportedHeader from "./importedHeader";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <ImportedHeader />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
