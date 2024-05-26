import React from 'react';
import { productodto } from '../../../src/app/api/producto/producto.dto';
import styles from './styles.module.css';
interface ProductoCardProps {
  producto: productodto;
  onEdit: (producto: productodto) => void;
  onDelete: (id: number) => void;
}

const ProductoCard: React.FC<ProductoCardProps> = ({ producto, onEdit, onDelete }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{producto.Nombre}</h3>
      <p className={styles.description}>{producto.Descripcion}</p>
      <p className={styles.price}>Costo: ${producto.Costo.toFixed(2)}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.editButton} onClick={() => onEdit(producto)}>Editar</button>
        <button className={styles.deleteButton} onClick={() => onDelete(producto.Id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default ProductoCard;
