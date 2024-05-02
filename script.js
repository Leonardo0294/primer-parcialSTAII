function createMatrix(matrixNum) {
    const rows = parseInt(document.getElementById(`rows${matrixNum}`).value);
    const cols = parseInt(document.getElementById(`cols${matrixNum}`).value);
    
    const matrixDiv = document.getElementById(`matrix${matrixNum}`);
    matrixDiv.innerHTML = ""; // Limpiar contenido anterior
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const input = document.createElement("input");
            input.type = "number";
            input.id = `matrix${matrixNum}-row${i}-col${j}`;
            input.min = "0";
            input.style.width = "60px";
            matrixDiv.appendChild(input);
        }
        matrixDiv.appendChild(document.createElement("br"));
    }
    
    document.getElementById("matrix-inputs").style.display = "block";
}

function multiplyMatrices() {
    const rows1 = parseInt(document.getElementById("rows1").value);
    const cols1 = parseInt(document.getElementById("cols1").value);
    const rows2 = parseInt(document.getElementById("rows2").value);
    const cols2 = parseInt(document.getElementById("cols2").value);
    
    if (cols1 !== rows2) {
        alert("El número de columnas de la Matriz 1 debe ser igual al número de filas de la Matriz 2.");
        return;
    }
    
    const matrix1 = [];
    const matrix2 = [];
    
    // Obtener valores de la Matriz 1
    for (let i = 0; i < rows1; i++) {
        matrix1[i] = [];
        for (let j = 0; j < cols1; j++) {
            matrix1[i][j] = parseFloat(document.getElementById(`matrix1-row${i}-col${j}`).value);
        }
    }
    
    // Obtener valores de la Matriz 2
    for (let i = 0; i < rows2; i++) {
        matrix2[i] = [];
        for (let j = 0; j < cols2; j++) {
            matrix2[i][j] = parseFloat(document.getElementById(`matrix2-row${i}-col${j}`).value);
        }
    }
    
    // Realizar multiplicación de matrices
    const resultMatrix = [];
    for (let i = 0; i < rows1; i++) {
        resultMatrix[i] = [];
        for (let j = 0; j < cols2; j++) {
            let sum = 0;
            for (let k = 0; k < cols1; k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            resultMatrix[i][j] = sum;
        }
    }
    
    // Mostrar resultado en tabla
    displayResultMatrix(resultMatrix);
}

function displayResultMatrix(matrix) {
    const resultTable = document.getElementById("resultMatrix");
    resultTable.innerHTML = ""; // Limpiar contenido anterior
    
    for (let i = 0; i < matrix.length; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < matrix[i].length; j++) {
            const cell = document.createElement("td");
            cell.textContent = matrix[i][j];
            row.appendChild(cell);
        }
        resultTable.appendChild(row);
    }
    
    document.getElementById("result").style.display = "block";
}
