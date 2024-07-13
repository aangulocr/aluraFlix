import { useFavoritosContext } from "context/Favoritos";
import styles from "./Card.module.css";
import iconEdit from "./editar.png";
import iconBorrar from "./borrar.png";
import { Link } from "react-router-dom";

function Card({ id, capa, titulo }) {
  const { favorito, agregarFavorito } = useFavoritosContext();
  const isFavorito = favorito.some((fav) => fav.id === id);
  const icon = isFavorito ? iconEdit : iconBorrar;

  return (
    <div className={styles.container}>
      <Link
        className={styles.link}
        to={`/${id}`}
      >
        <img
          src={capa}
          alt={titulo}
          className={styles.capa}
        />
        <h2>{titulo}</h2>
      </Link>

      <img
        src={iconEdit}
        alt="Icono Edit"
        className={styles.favorito}
      />

      <img
        src={iconBorrar}
        alt="Icono Edit"
        className={styles.favorito}
      />
    </div>
  );
}
export default Card;
