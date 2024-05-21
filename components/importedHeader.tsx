import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "../lib/constants";
import styles from "../oldCSS/style.module.css";
import mercaiLogo from "../images/Vector.svg";

export default function ImportedHeader() {
  return (
    <div className={styles["blog"]}>
      <header className={styles["header"]}>
        <div className={styles["frame"]} style={{ color: "white" }}>
          <div className={styles["media-icons"]}>
            <a className={styles["social-media"]} href="#">
              <img src="images/WhatsApp.svg" alt="Whatsapp" />
            </a>
            <a
              className={styles["social-media"]}
              href="https://www.linkedin.com/company/mercai/"
            >
              <img src="images/linkedIn.svg" alt="LinkedIn" />
            </a>
            <a
              className={styles["social-media"]}
              href="https://www.youtube.com/@MercaiMexico"
            >
              <img src="images/YouTube.svg" alt="Youtube" />
            </a>
            <a
              className={styles["social-media"]}
              href="https://www.facebook.com/MercaiMexico/"
            >
              <img src="images/Facebook.svg" alt="Facebook" />
            </a>
          </div>
          {/* <!-- <div className={styles["search-bar">
                                                <input className={styles["inputForm" placeholder = "Buscar"></input>
                                                <button className={styles["primary-button">
                                                        <div className={styles["right-icon"><img className={styles["img" src="<?php //echo get_theme_file_uri("images/search.svg")?>" /></div>
                                                </button>
                                        </div> -->
                                        <?php get_search_form(); ?> */}
        </div>
        <a href="http://www.mercaiblog.local">
          <img className={styles["vector"]} src={mercaiLogo} alt="" />
        </a>
        <div className={styles["items-wrapper"]} style={{ color: "white" }}>
          <div className={styles["items"]}>
            <div className={styles["navOption"]}>
              <a
                className={styles["text-wrapper-2"]}
                href="http://www.mercaiblog.local"
                style={{ color: "white" }}
              >
                Blog
              </a>
            </div>
            <div className={styles["navOption"]}>
              <a
                className={styles["text-wrapper-2"]}
                href="https://www.mercai.ai/"
              >
                MercaiOS
              </a>
            </div>
            <div className={styles["navOption"]}>
              <a
                className={styles["text-wrapper-2"]}
                href="https://www.mercai.ai/es/product"
              >
                Encuentre productos
              </a>
            </div>
            <div className={styles["dropdown-2"]}>
              <a className={styles["navOption"]} href="#">
                <div className={styles["text-wrapper-2"]}>Explorar</div>
                <div className={styles["chevron-down-wrapper"]}>
                  <img className={styles["chevron-down"]} src="" alt="" />
                </div>
              </a>
              <div className={styles["dropdown-content-2"]}>
                <a href="http://www.mercaiblog.local">Materias Primas</a>
                <a href="http://www.mercaiblog.local/category/polipropileno">
                  Polìmeros
                </a>
                <a href="http://www.mercaiblog.local/category/eventos">Acero</a>
                <a href="http://www.mercaiblog.local">Logìstica</a>
                <a href="http://www.mercaiblog.local/category/polipropileno">
                  Noticias de la Industria
                </a>
                <a href="http://www.mercaiblog.local/category/eventos">
                  Mercai
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
