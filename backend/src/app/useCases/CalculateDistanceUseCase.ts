export class CalculateDistanceUseCase {
    /* 
        Função para calcular a distancia Euclidiana entre dois pontos em um plano 
        bidimensional usando teorema de Pitágoras 
    */
    execute(
        point1: { coordinate_x: number; coordinate_y: number },
        point2: { coordinate_x: number; coordinate_y: number }
    ): number {
        const deltaX = point2.coordinate_x - point1.coordinate_x;
        const deltaY = point2.coordinate_y - point1.coordinate_y;

        return Math.sqrt(deltaX ** 2 + deltaY ** 2);
    }
}
