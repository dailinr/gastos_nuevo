import  { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

interface EchartGraphProps {
  options: echarts.EChartsOption;
  style?: React.CSSProperties;
}

const EchartGraph = ({ 
    options, 
    style = { width: '100%', height : '100%'} 
} ) => {

  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;
        
    const chart = echarts.init(chartRef.current); // Inicializa el gráfico
    chart.setOption(options); // Aplica las opciones del gráfico

    // Función para redimensionar
    const handleResize = () => {
      chart.resize();
    };

    // Escucha resize de ventana
    window.addEventListener('resize', handleResize);

    // Limpieza al desmontar
    return () => {
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
    
  }, [options]);

  return (
    <div 
      ref={chartRef} 
      style={style} 
      className="h-full w-full"
    />
  );
};

export default EchartGraph;
