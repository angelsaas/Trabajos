'use client';
import { useState } from 'react';
import useSWR from 'swr';
import ProductoCard from '../../Componentes/Card/index';
import { productodto } from '../../app/api/producto/producto.dto';
import styles from '../../Componentes/Card/styles.module.css'
const fetcher = (url: string) => fetch(url).then((r) => r.json());

const Page = () => {
  const { data: productosData, error, isLoading, mutate } = useSWR('/api/producto', fetcher);

  const [editandoProducto, setEditandoProducto] = useState<productodto | null>(null);

  const [formData, setFormData] = useState<productodto>({
    Id: 0,
    Nombre: '',
    Descripcion: '',
    Costo: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === 'Costo' ? parseFloat(value) : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editandoProducto) {
      await handleSaveEdit();
    } else {
      await handleAdd();
    }
  };

  const handleAdd = async () => {
    try {
      const response = await fetch('/api/producto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Enviar los datos del formulario
      });

      if (response.ok) {
        mutate();
        setFormData({ Id: 0, Nombre: '', Descripcion: '', Costo: 0 });
      } else {
        console.error('Error al agregar:', response.statusText);
      }
    } catch (error) {
      console.error('Error al agregar:', error);
    }
  };

  const handleEdit = (producto: productodto) => {
    setEditandoProducto(producto);
    setFormData(producto); 
  };

  const handleSaveEdit = async () => {
    try {
      const response = await fetch(`/api/producto?id=${editandoProducto?.Id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData), // Enviar los datos del formulario
      });

      if (response.ok) {
        mutate();
        setEditandoProducto(null);
        setFormData({ Id: 0, Nombre: '', Descripcion: '', Costo: 0 }); // Limpiar el formulario
      } else {
        console.error('Error al editar:', response.statusText);
      }
    } catch (error) {
      console.error('Error al editar:', error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await fetch(`/api/producto?id=${id}`, { method: 'DELETE' });
      mutate(); 
    } catch (error) {
      console.error('Error al eliminar producto:', error);
    }
  };

  if (error) return <div>Error al cargar los productos</div>;
  if (isLoading) return <div>Cargando productos...</div>;

  return (
    <div className={styles.container}>

      <h2 className={styles.title}>{editandoProducto ? 'Editar Producto' : 'Agregar Producto'}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input 
          type="text" 
          name="Nombre" 
          placeholder="Nombre" 
          value={formData.Nombre} 
          onChange={handleChange} 
          className={styles.input} 
        />
        <textarea
          name="Descripcion" 
          placeholder="Descripción" 
          value={formData.Descripcion} 
          onChange={handleChange} 
          className={styles.textarea}
        />
        <input 
          type="number" 
          name="Costo" 
          placeholder="Costo" 
          value={formData.Costo} 
          onChange={handleChange} 
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          {editandoProducto ? 'Guardar Cambios' : 'Agregar'}
        </button>
      </form>

      <div className={styles.cardContainer}>
        {productosData.map((producto: productodto) => (
          <ProductoCard
            key={producto.Id}
            producto={producto}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};


export default Page;
