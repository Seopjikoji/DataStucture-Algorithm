function solution(priorities, location) {
    let answer = 0;
    let maxPriority = 0;
    //변환되는 원래의 배열
    let usedPriorities = [...priorities]
    let orderOfWorkIndexByPriority = [];
    let pushedValue = 0;
    let maxPriorityIndex = 0;
    while(usedPriorities.length !== 0){
        
        //최고 우선순위 변경
        maxPriority = Math.max.apply(null, usedPriorities);
        
        for(let i=0; i<usedPriorities.length; i++){
            if(maxPriority>usedPriorities[i]){
                pushedValue = usedPriorities[0];
                usedPriorities.shift();
                usedPriorities.push(pushedValue); 
            } else {
                const findMaxPriorityIndex = (e) =>  e = maxPriority
                
                if(i===0){
                    for(let j=0; j<usedPriorities.length; j++){
                        orderOfWorkIndexByPriority.push(maxPriorityIndex)
                    }
                }else{
                    //여기서 전략을 수정해야함.
                    //변경되는 인덱스 순서도 같이 저장하면 어떨까 ? 문서 개수가 100개 이하라..
                    maxPriorityIndex = priorities.findIndex(findMaxPriorityIndex);
                    usedPriorities.shift();
                    orderOfWorkIndexByPriority.push(maxPriorityIndex)
                    
                }
                
                break;
            }
        }
        
            const findIndexSameWithLocation = (e) => e = location
            answer = orderOfWorkIndexByPriority.findIndex(findIndexSameWithLocation) + 1
            return answer;
    }
    
}
