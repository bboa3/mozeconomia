import { ScaleTime } from "d3";
import { months } from "../../utils/days";

interface Props {
  xScale: ScaleTime<number, number, never>
  innerHeight: number
  tickOffset?: number 
}

export const AxisBottom: React.FC<Props> = ({ xScale, innerHeight, tickOffset=3 }) =>
  <>
    {
      xScale.ticks().map((tickValue, index) => (
        <g className="tick" key={index} transform={`translate(${xScale(tickValue)},0)`}>
          <line y2={innerHeight} className={`line-${index}`} />
          <text style={{ textAnchor: 'middle' }} dy=".71em" y={innerHeight + tickOffset}>
            {months[index]}
          </text>
        </g>
      ))
    }
  </>