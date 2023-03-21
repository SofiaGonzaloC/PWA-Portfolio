interface WindowProps {
  title?: string;
  children?: any;	
}

/**
 *
 * @title Titulo para header
 * @text Texto para body
 *
 */
export const Window: React.FC<WindowProps> = ({ title, children }) => {

  return (
    <div className="window w-full">
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body p-4">
        {children}
      </div>
    </div>
  );
};
