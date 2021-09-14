import { scaleLinear, scaleTime, extent, NumberValue, max, min } from 'd3';
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

const width = 750;
const height = 330;
const margin = { top: 20, right: 30, bottom: 65, left: 220 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 40;

const BarCharts: React.FC = () => {
  const data = useData();
  
  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  const yValue = data.homologa;

  const xValue = (index: number) => new Date(2021, index);

  const yScale = scaleLinear()
    .domain([min(yValue)! -1, max(yValue)! + 1] as Iterable<NumberValue>)
    .range([innerHeight, 0])
    .nice()

  const xScale = scaleTime()
    .domain(extent([0,1,2,3,4,5,6,7,8,9,10,11], xValue) as Iterable<NumberValue>)
    .range([0, innerWidth])
    .nice();
    
  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          tickOffset={8}
        />
        <AxisLeft 
          yScale={yScale} 
          innerWidth={innerWidth} 
          tickOffset={8}
        />
        <Marks
          xScale={xScale}
          yScale={yScale}
          xValue={xValue}
          yValue={yValue}
          circleRadios={4}
        />
      </g>
    </svg>
  );
};

export default BarCharts