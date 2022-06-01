function solution(priorities, location) {
    let answer = 0;
    let maxPriority = 0;
    //변환되는 원래의 배열
    let usedPriorities = [...priorities]
    let orderOfWorkIndexByPriority = [];
    let pushedValue = 0;
    let maxPriorityIndex = 0;
    let targetWorkIndex = location ;
    let nowPrintedOrder = location + 1;
    let finishedWorkNumbers = 0;
    while(usedPriorities.length !== 0){
        
        //최고 우선순위 변경
        maxPriority = Math.max.apply(null, usedPriorities);
        
        for(let i=0; i<usedPriorities.length; i++){
            if(maxPriority>usedPriorities[i]){
                 pushedValue = usedPriorities[0];
                 usedPriorities.shift();
                 usedPriorities.push(pushedValue);
                if(nowPrintedOrder === 1){
                    targetWorkIndex === usedPriorities.length - 1
                    nowPrintedOrder === usedPriorities.length
                }else{
                    targetWorkIndex = targetWorkIndex - 1
                    nowPrintedOrder = nowPrintedOrder - 1
                }
            } else {
                usedPriorities.shift();
                finishedWorkNumbers = finishedWorkNumbers + 1
                nowPrintedOrder = nowPrintedOrder - 1
                targetWorkIndex = targetWorkIndex - 1
                if(nowPrintedOrder === 1){
                    answer = finishedWorkNumbers + nowPrintedOrder
                }
                break;
            
            }
        }
            return answer;
    }
    
}
