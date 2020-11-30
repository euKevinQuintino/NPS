function CalcularNPS(detratores, promotores, numeroDeRespostas) {
  return "NPS = " + String((promotores/numeroDeRespostas - detratores/numeroDeRespostas)*100);
}
