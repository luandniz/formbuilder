export const addSuffix = (
  styleObj,
  suffix,
  excludeKeys = ["fontWeight", "opacity"]
) => {
  // console.log("ORIGINAL", styleObj);
  const novoObjeto = {};

  for (const chave in styleObj) {
    if (Object.prototype.hasOwnProperty.call(styleObj, chave)) {
      const valor = styleObj[chave];

      const shouldExclude = excludeKeys.includes(chave);

      // Verifica se o valor é uma string e contém '%'
      const isStringWithPercent =
        typeof valor === "string" && valor.includes("%");

      novoObjeto[chave] = shouldExclude
        ? valor
        : isStringWithPercent
        ? `${parseInt(valor)}%` // Se for string com '%', converte para número e adiciona o '%'
        : parseInt(valor) // Se for um número, adiciona o sufixo
        ? `${valor}${suffix}`
        : valor;
    }
  }

  // console.log("NOVO", novoObjeto);
  return novoObjeto;
};
