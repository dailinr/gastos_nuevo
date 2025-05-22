import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { categories } from '@/data/categories';

export const DonutChart = () => {

  const chartRef = useRef(null);

   // Extraer etiquetas, valores y colores
   const labels = categories.map((item => item.name));
   const values = categories.map((item) => item.amount);
   const backgroundColors = categories.map((item) => item.color);

  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = echarts.init(chartRef.current);

     const option = {
        // tooltip: {
        //     trigger: 'item'
        // },
        // legend: {
        //     top: '5%',
        //     left: 'center'
        // },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '90%'],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 4,
                    borderColor: '#fff',
                    borderWidth: 1
                },
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 20,
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ]
            }
        ]
    };

      chartInstance.setOption(option);

      // Redimensionar el gráfico automáticamente
      const resizeObserver = new ResizeObserver(() => {
        chartInstance.resize();
      });
      resizeObserver.observe(chartRef.current);

      return () => {
        chartInstance.dispose();
        resizeObserver.disconnect();
      };
    }
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '100%' }}></div>;
};

