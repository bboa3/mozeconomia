
const ExchangeRates: React.FC = () =>  {

  return (
    <div 
      style={{width: '90%', left: '5%'}} 
      className="pb-6 pt-7 flex rounded absolute -bottom-1/3 bg-white shadow-xl"
    >
      <form className="w-2/4 ml-14 flex items-start flex-col">
        <label htmlFor="amount" className="font-bold text-gray-700">Montante</label>
        <input 
          type="number" 
          inputMode="decimal" 
          defaultValue="1.00"
          autoComplete="on" 
          required 
          className="w-2/3 mb-4 border-gray-300 rounded shadow-md focus:border-blue focus:ring-blue" 
        />
        
        <label htmlFor="from" className="font-bold text-gray-700">Moeda que tenho</label>
        <select name="from" id="from" className="w-2/3 mb-4 border-gray-300 rounded shadow-md focus:border-blue focus:ring-blue" >
          <option value="MZN">MZN</option>
          <option value="USD">USD</option>
          <option value="USE">USE</option>
        </select>
        <label htmlFor="to" className="font-bold text-gray-700">Moeda que quero</label>
        <select name="to" id="to-" className="w-2/3 mb-4 border-gray-300 rounded shadow-md focus:border-blue focus:ring-blue">
          <option value="VA">VA</option>
          <option value="USA">USA</option>
          <option value="MZN">MZN</option>
        </select>
      </form>
      
      <div className="w-2/4 mt-4 flex flex-col">
        <button type="button" className="w-2/3 h-10 mb-4 bg-blue hover:bg-blue-dark transition font-bold text-white rounded">Converter</button>
        <button type="button" className="w-2/3 h-10 mb-4 font-bold text-gray-700 bg-gray-200 hover:bg-gray-300 transition rounded">Gráfico</button>

        <div className="flex flex-col mt-9 ml-1">
          <span>3.00 Meticais moçambicano</span>
          <strong className="font-bold text-2xl">0.039660498 Euros</strong>
        </div>
      </div>
    </div>
    ) 
  }
  
export default ExchangeRates