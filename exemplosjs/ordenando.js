const itens = []

quant = () => console.log(itens.length);

swap = (vetor, pos1, pos2) => {//Trocar 2 elementos de posicoes dentro do vetor.
    let posicao1 = vetor[pos1]
    let posicao2 = vetor[pos2]
    vetor[pos1] = posicao2
    vetor[pos2] = posicao1
    return vetor
  } // CHECKED //

shuffle = (vetor, swaps) => {//Embaralhar elementos de um vetor.
    for (let i = 0; i < swaps; i++) {
    const pos1 = Math.floor(Math.random() * vetor.length);
    const pos2 = Math.floor(Math.random() * vetor.length);
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
    }
    return vetor
} // CHECKED //

bubble_sort = (vetor) => {//Ordenando um vetor de inteiros com Bubble_Sort.
    let n = vetor.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (vetor[j] > vetor[j+1]) {
                let temp = vetor[j]
                vetor[j] = vetor[j+1]
                vetor[j+1] = temp
            }
        }
    }
    return vetor
}// CHECKED //

selection_sort = (vetor) => {//Ordenar um vetor de inteiros com Selection_Sort.
    const n = vetor.length
    for (let i = 0; i < n - 1; i++) {
      let min = i
      for (let j = i + 1; j < n; j++) {
        if (vetor[j] < vetor[min]) {
          min = j
        }
      }
      if (min !== i) {
        [vetor[min], vetor[i]] = [vetor[i], vetor[min]]
      }
    }
    return vetor
  } // CHECKED //

const particionamento = (vetor, inicio, fim, pivot) => {//Apoio para a function Quick_sort.
    let esquerda = inicio
    let direita = fim
    while (esquerda <= direita) {
        while (vetor[esquerda] < pivot) {
        esquerda++
        }
        while (vetor[direita] > pivot) {
        direita--
        }
        if (esquerda <= direita) {
        [vetor[esquerda], vetor[direita]] = [vetor[direita], vetor[esquerda]]
        esquerda++
        direita--
        }
    }
return esquerda
} // CHECKED //

const quick_sort = (vetor, inicio = 0, fim = vetor.length - 1) => {//Ordenar os inteiros de um vetor com o algoritmo Quick_Sort
if (inicio < fim) {
    const pivot = vetor[Math.floor((inicio + fim) / 2)]
    const index = particionamento(vetor, inicio, fim, pivot)
    quick_sort(vetor, inicio, index - 1)
    quick_sort(vetor, index, fim)
}
return vetor;
} // CHECKED //

add = () => {
    const valor = document.getElementById("valor").value;
    if (valor != '') {
        document.getElementById("valor").value = '';
        const lista = document.getElementById("valores");
        var node = document.createElement('li');
        node.appendChild(document.createTextNode(valor));
        lista.appendChild(node);
    }
};

function ordenar() {
    const listaSelecao = document.getElementById('listSort');
    const listaValores = document.getElementById('valores');

    listaComoArray = [...listaValores.children];

    const listaArrayConvertidaInt = [];
    listaComoArray.map((item) => {
        listaArrayConvertidaInt.push(eval(item.innerHTML));
    });
    console.log(listaArrayConvertidaInt);

    const metodoSelecionado = listaSelecao.children[listaSelecao.selectedIndex].value;

    var novoVetor = [];

    switch (metodoSelecionado) {
        case "bubbleSort":
            novoVetor = bubble_sort(listaArrayConvertidaInt)
            break;
        case "selectionSort":
            novoVetor = selection_sort(listaArrayConvertidaInt)
            break;
        case "quickSort":
            novoVetor = quick_sort(listaArrayConvertidaInt, 0, listaArrayConvertidaInt.length -1  ) 
            break;
    }

    console.log(novoVetor);

    for (let index = 0; index < listaComoArray.length; index++) {
        const element = listaComoArray[index];
        element.innerHTML = novoVetor[index];
    }

}

function misturar() {
    console.log("misturar")
 
    const listaValores = document.getElementById('valores');

    listaComoArray = [...listaValores.children];

    const listaArrayConvertidaInt = [];
    listaComoArray.map((item) => {
        listaArrayConvertidaInt.push(eval(item.innerHTML));
    });
    console.log(listaArrayConvertidaInt);

    var novoVetor = [];

    novoVetor = shuffle(listaArrayConvertidaInt, 3)

    for (let index = 0; index < listaComoArray.length; index++) {
        const element = listaComoArray[index];
        element.innerHTML = novoVetor[index];
    }

}