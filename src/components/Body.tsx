interface WindowProps {
  id?: string;
  children?: any;	
}

/**
 *
 * @id Id de la sección para búsqueda
 * @children props.children a mandar 
 *
 */
export const Body: React.FC<WindowProps> = ({children, id}) => {
  return (
    <div className="relative isolate px-4 pt-14 lg:px-64" id={id}>
      <div className="mx-auto flex justify-center py-32 sm:py-48 lg:py-56">
        {children}
      </div>
    </div>
  );
};
