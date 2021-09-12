import { ScaleTime, line, curveNatural } from "d3";

interface Props {
  xScale: ScaleTime<number, number, never>
  yScale: (d: any) => any
  xValue: (index: number) => Date
  yValue: number[]
  circleRadios: number
}

export const Marks: React.FC<Props> = ({
  xScale,
  yScale,
  xValue,
  yValue,
  circleRadios
}) => (
  <g className="marks">
    <path 
      d={
        line()
          .curve(curveNatural)
          .x((_, index) => xScale(xValue(index)))
          .y(d => yScale(d))(yValue as Iterable<[number, number]>)!
        } 
    />
    {
      yValue.map((d, index) => (
        <circle
          key={yValue[index]}
          cx={xScale(xValue(index))}
          cy={yScale(yValue[index])}
          r={circleRadios}
        >
          <title>{yValue[index].toFixed(2)}</title>
        </circle>
      ))
    }
  </g>
)
