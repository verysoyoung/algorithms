function dailyTemperatures(temperatures: number[]): number[] {
    const n:number = temperatures.length;
    const answer:number[] = Array(n).fill(0);
    const stack:number[] = [];
    for(let i = 0; i < n; i++){
        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]){
            const j = stack.pop()!;
            if (j === undefined) throw new Error("empty stack"); 
            answer[j] = i - j;
        }
        stack.push(i)
    }
    return answer;
};
