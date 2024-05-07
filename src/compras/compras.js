const calcularTotal = (ferramentas, comprar) => {
    let total = 0;

    if (ferramentas.length === 0 || comprar.length === 0) {
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }

    const verificarFerramentas = ferramentas.filter(ferramenta => comprar.includes(ferramenta.nome));

    if (verificarFerramentas.length !== comprar.length) {
        throw new Error("Nenhuma ferramenta desejada encontrada.");
    }

    verificarFerramentas.forEach(ferramenta => {
        total += ferramenta.preco;
    });

    return "O valor a pagar pelas ferramentas (UFT, TOSCA) é R$ " + total.toFixed(2);
}

module.exports = { calcularTotal } ;