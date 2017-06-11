import { Injectable } from '@angular/core';

@Injectable()
export class MathService {

  constructor() { }

  private mathregex: RegExp = /[\d\s+*-\/=?\.]+/g;

  public evaluateMathematicalExpression(expression: string): boolean {
    return eval(expression.replace('=', '=='));
  }

  // This service is used to check if it's an valid mathematical expression
  public isMathematicalExpression(expression: string): boolean {
    return expression.match(this.mathregex)[0].length == expression.length
  }

  public getExercice(module: string, id: number): string[] {
    // Promise<string[]>
    return [
      '1 + ? = 3',
      '? + 3 = 8',
      '3 + ? = 10',
      '1 + ? = 2',
      '1 + ? = 1',
      '1 + ? = 8'
    ]
  }

}
