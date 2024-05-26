
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  /**
   * 
   * 
   */
  let ClaveValor={
    hola: "saludos"
  }

  //COMPONENTE JSX
  return (<>
    <p className={styles.colorTest}>
      
      {ClaveValor.hola}
      
      </p>

      <div>llamar componente about</div>
      <div>llamar componente servicio</div>
      <div>llamar componente footer</div>
  </>
  );
}
