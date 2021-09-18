
const ExchangeRates: React.FC = () =>  {

  return (
    <div 
      style={{width: '90%', left: '5%'}} 
      className="h-2/4 rounded absolute -bottom-1/3 bg-white shadow-xl
      "
    >
      <div>
        <form className="w-2/4 flex items-center mt-11 flex-col">
          <input type="text" className="w-3/5 mb-4 border-gray-300 rounded shadow-lg" />
          <select name="from" id="from" className="w-3/5 mb-4 border-gray-300 rounded shadow-lg" >
            <option value="MZN"></option>
            <option value="USD"></option>
            <option value="USE"></option>
          </select>
          <select name="to" id="to" className="w-3/5 mb-4 border-gray-300 rounded shadow-lg">
            <option value="VA"></option>
            <option value="USA"></option>
            <option value="MZN"></option>
          </select>
        </form>
      </div>

      <div>

      </div>
    </div>
    ) 
  }
  
export default ExchangeRates