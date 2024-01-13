import { FC, useEffect, useRef, useState } from "react";
import NavbarComponent from "../components/navbar/NavbarComponent";
// import FooterComponent from "../components/footer/FooterComponent";
// import ModalsComponent from "../../providers/modals/modals/ModalsComponent";
import LayoutProps from "./LayoutsProps";
import { useRouter } from "next/router";
import FooterComponent from "@/components/footer/FooterComponent";

const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  const { pathname } = router;
  const containerDataRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState<boolean>(false);

  const _handleScroll = () => {
    //get scroll top of containerDataRef
    const _scrollTop = containerDataRef.current?.scrollTop ?? 0;
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100 ||
      _scrollTop > 100
    ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    containerDataRef.current?.addEventListener("scroll", _handleScroll);
  }, []);

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* <div className="contact_fixed">
        <a
          href="https://wa.me/573018063302?text=¡Hola%21+Quiero+recibir+asesoría+�&type=phone_number&app_absent=0"
          className="btn btn_cyan"
          target="_blank"
        >
          Contacta un asesor
        </a>
      </div> */}
      {/* <ModalsComponent> */}
      <div className={`layout_container ${!scrolled && "no_scrolled"}`}>
        <NavbarComponent />
        <div className="content_app" ref={containerDataRef}>
          {children}
          <FooterComponent />
        </div>
      </div>
      {/* </ModalsComponent> */}
    </>
  );
};

export default Layout;
