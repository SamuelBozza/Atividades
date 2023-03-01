let lista = [132,61,123,71,1,724,81,123,6,71]

swap = (vetor, position1=0, position2=0) => {
    pos1 = vetor[position1]
    pos2 = vetor[position2]
    position1 = pos2
    position2 = pos1
    return vetor
}

console.log(swap(lista, 5, 8))