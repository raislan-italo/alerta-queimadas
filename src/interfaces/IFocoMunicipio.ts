// Interface com os tipos de dados retornados pela API
export default interface IFocoMunipio {
  municipio: string,
  focos: number,
  percentual: number,
  latitude: number;
  longitude: number
}