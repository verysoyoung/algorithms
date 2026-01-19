function nextGreaterElements(nums: number[]): number[] {
    const n = nums.length;
    const answer = Array<number>(n).fill(-1); 
    const stack:number[] = [];
    for(let i=0; i < n * 2; i++){
        const idx = i % n;
        while(stack.length > 0 && nums[idx] > nums[stack[stack.length - 1]]){
            const prevIdx = stack.pop();
            if(prevIdx === undefined) throw new Error('stack empty')
            answer[prevIdx] = nums[idx]
        }
        if(i<n){
            stack.push(i);
        }
    }
    return answer
};
