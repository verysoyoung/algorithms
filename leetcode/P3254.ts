function resultsArray(nums: number[], k: number): number[] {
    const n = nums.length;
    const answer = new Array<number>(n - k + 1).fill(-1);
    
    let len = 1;
    for(let i = 0; i < n; i++){
        if(i > 0 && nums[i] === nums[i - 1] + 1){
            len++;
        }else{
            len = 1;
        }
        if(i >= k - 1){
            const start = i - k + 1;
            answer[start] = len >= k ? nums[i] : -1;
        }
    }
    return answer;
};
