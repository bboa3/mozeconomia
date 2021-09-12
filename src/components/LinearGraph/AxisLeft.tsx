import { ScaleLinear } from "d3";

interface Props {
  yScale: ScaleLinear<number, number, never>
  innerWidth: number
  tickOffset?: number
}

export const AxisLeft: React.FC<Props> = ({ yScale, innerWidth, tickOffset=3 }) => (
  <>
    {
      yScale.ticks().map((tickValue) => (
        <g className="tick" transform={`translate(0, ${yScale(tickValue)})`}>
          <line x2={innerWidth} />
          <text
            key={tickValue}
            style={{ textAnchor: 'end' }}
            x={-tickOffset}
            dy=".32em"
          >
            {tickValue}
          </text>
        </g>
      ))
    }
  </>
)
