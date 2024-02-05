export class CalculateDistanceUseCase {
    /* Fórmula para a distância Euclidiana (Distância entre dois pontos) */
    execute(point1: { x: number; y: number }, point2: { x: number; y: number }): number {
        // Calcula o quadrado da diferença entre as coordenas X dos dois pontos
        const squarePointX = (point1.x - point2.x) ** 2;
        // Calcula o quadrado da diferença entre as coordenas Y dos dois pontos
        const squarePointY = (point1.y - point2.y) ** 2;

        // Calcula a raiz quadrada da soma dos quadrados das diferenças.
        return Math.sqrt(squarePointX + squarePointY);
    }
}
