import EchartGraph from './EchartGraph';
// import "./../css/dashboard.css";
import type { recurso } from '@/data/datos';

type graficaProps = {
  ingresos: recurso[]
  gastos: recurso[]
}

const BarGraphic = ({ ingresos, gastos } : graficaProps ) => {

  const diasSemana = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

  // Normalizamos los días de la semana para comparaciones consistentes
  const normalizeDay = (day: string) => day.toLowerCase().trim();
  const normalizedDiasSemana = diasSemana.map(normalizeDay);

  const ingresosPorDia = normalizedDiasSemana.map((dia) => {
    const ingresosDia = ingresos
      .filter((ingreso) => normalizeDay(ingreso.diaSemana) === dia) // Normalizar para comparar
      .reduce((acc, ingreso) => acc + ingreso.valor, 0);
    return ingresosDia;
  });

  const gastosPorDia = normalizedDiasSemana.map((dia) => {
    const gastosDia = gastos
      .filter((gasto) => normalizeDay(gasto.diaSemana) === dia) // Normalizar para comparar
      .reduce((acc, gasto) => acc + gasto.valor, 0);
    return gastosDia;
  });


  // Calculamos el acumulado por cada dia
  let acumulado = 0;
  const acumulados = normalizedDiasSemana.map((_, index) => {
    // No mostramos acumulados para días sin datos
    // if (ingresosPorDia[index] == 0 && gastosPorDia[index] == 0) return null;

    acumulado += (ingresosPorDia[index] || 0) - (gastosPorDia[index] || 0);
    return acumulado;
  });

  if (!ingresos || !gastos) {
    return ( <div className="cargando"></div> )
  }

  // const option = {
  //   tooltip: {
  //     trigger: 'axis',
  //     axisPointer: {
  //       type: 'cross',
  //       crossStyle: {
  //         color: '#999'
  //       }
  //     }
  //   },
  //   toolbox: {
  //     feature: {
  //       saveAsImage: { show: true }
  //     }
  //   },
  //   legend: {
  //     data: ['Ingresos', 'Gastos', 'Acumulado']
  //   },
  //   xAxis: [
  //     {
  //       type: 'category',
  //       data: diasSemana,
  //       axisPointer: {
  //         type: 'shadow'
  //       }
  //     }
  //   ],
  //   yAxis: [
  //     {
  //       type: 'value',
  //       name: 'Valor ($)',
  //       min: 0,
  //       axisLabel: {
  //         formatter: '{value} $'
  //       }
  //     },
  //     {
  //       type: 'value',
  //       name: 'Acumulado ($)',
  //       min: 0,
  //       axisLabel: {
  //         formatter: '{value} $'
  //       }
  //     }
  //   ],
  //   series: [
  //     {
  //       name: 'Ingresos',
  //       type: 'bar',
  //       data: ingresosPorDia,
  //       itemStyle: {
  //         color: '#4CAF50'
  //       }
  //     },
  //     {
  //       name: 'Gastos',
  //       type: 'bar',
  //       data: gastosPorDia,
  //       itemStyle: {
  //         color: '#F44336'
  //       }
  //     },
  //     {
  //       name: 'Acumulado',
  //       type: 'line',
  //       yAxisIndex: 1,
  //       data: acumulados,
  //       lineStyle: {
  //         color: '#FF9800',
  //         width: 2
  //       },
  //       symbol: 'circle', // Punto en la línea
  //       symbolSize: 10,   
  //     }
  //   ]
  // };
const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};
  
  return (
    <div className="h-full flex flex-col">
      <h1 className="text-md font-semibold text-center mb-1">
        Diagrama semana
      </h1>
      
      <div className="flex-1">

        <EchartGraph options={option} />
      </div>
    </div>
  );
};

export default BarGraphic;
