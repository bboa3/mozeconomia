
const ExchangeRates: React.FC = () =>  {

  return (
    <div 
      style={{width: '90%', left: '5%'}} 
      className="pb-6 rounded absolute -bottom-1/3 bg-white shadow-xl"
    >
      <div>
        <form className="w-2/4 ml-14 flex items-start mt-7 flex-col">
          <label htmlFor="amount" className="font-bold text-gray-700">Montante</label>
          <input 
            type="number" 
            inputMode="decimal" 
            defaultValue="1.00"
            autoComplete="on" 
            required 
            className="w-3/5 mb-4 border-gray-300 rounded shadow-md focus:border-blue focus:ring-blue" 
          />

          <label htmlFor="from" className="font-bold text-gray-700">Moeda que tenho</label>
          <select name="from" id="from" className="w-3/5 mb-4 border-gray-300 rounded shadow-md focus:border-blue focus:ring-blue" >
            <option value="MZN">MZN</option>
            <option value="USD">USD</option>
            <option value="USE">USE</option>
          </select>
          <label htmlFor="to" className="font-bold text-gray-700">Moeda que quero</label>
          <select name="to" id="to-" className="w-3/5 mb-4 border-gray-300 rounded shadow-md focus:border-blue focus:ring-blue">
            <option value="VA">VA</option>
            <option value="USA">USA</option>
            <option value="MZN">MZN</option>
          </select>
        </form>
      </div>
    </div>
    ) 
  }
  
export default ExchangeRates