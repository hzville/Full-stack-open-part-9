interface TotalProps {
  exerciseAmount: number;
}

const Total = ({exerciseAmount}: TotalProps) => {
  return (
    <div>
      Number of exercises {exerciseAmount}
    </div>
  )
}

export default Total;