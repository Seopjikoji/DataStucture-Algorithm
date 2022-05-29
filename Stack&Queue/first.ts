function solution(progresses, speeds) {

    // let days = progresses.map((progress, index, array) => {
    //     const leftProgress = 100 - progresses[index];
    //     const remainderOfleftProgressDividedBySpeeds = leftProgress / speeds[index] % 1
    //     const leftDaysToFinishWork = leftProgress / speeds[index]

    //     let roundedOffleftDaysToFinishWork = 0

    //     if (remainderOfleftProgressDividedBySpeeds !== 0) {
    //         roundedOffleftDaysToFinishWork = Math.floor(leftDaysToFinishWork) + 1
    //         return roundedOffleftDaysToFinishWork
    //     } else {
    //         roundedOffleftDaysToFinishWork = leftProgress / speeds[index]
    //         return roundedOffleftDaysToFinishWork
    //     }
    // });

    //이렇게 간단하게 쓸 수 있음
    // let leftDaysWToFinishWorkList = progresses.map((progress, index) => {
    //     const leftProgress = 100 - progress
    //     const leftDayToFinishWork = Math.ceil(leftProgress / speeds[index])
    //     return leftDayToFinishWork
    // })

    // //한번에 배포할 작업 개수
    // let workToDeployAtOnce = 0
    // //배포 기준이 되는 날
    // let standardDayToDeploy = leftDaysWToFinishWorkList[0]
    // let answer = [0]
    // for(let i=0, j=0; i<leftDaysWToFinishWorkList.length; i++){
    //     if(leftDaysWToFinishWorkList[i]<=standardDayToDeploy){
            
    //         answer[j] = workToDeployAtOnce+=1
    //     }else{
    //         standardDayToDeploy = leftDaysWToFinishWorkList[i]
    //         j+=1
    //     }
    // }

    // return answer

    // function solution(progresses, speeds) {
        let leftDaysWToFinishWorkList = progresses.map((progress, index) => {
            const leftProgress = 100 - progress
            const leftDayToFinishWork = Math.ceil(leftProgress / speeds[index])
            return leftDayToFinishWork
        })
    
        // let workToDeployAtOnce = 0
        let standardDayToDeploy = leftDaysWToFinishWorkList[0]
        let answer = [0]
        for(let i=0, j=0; i<leftDaysWToFinishWorkList.length; i++){
            if(leftDaysWToFinishWorkList[i]<=standardDayToDeploy){
                
                // answer[j] = workToDeployAtOnce += 1
                
                answer[j] +=1
            }else{
                standardDayToDeploy = leftDaysWToFinishWorkList[i]
                answer[++j] = 1
                // workToDeployAtOnce = 1
                // 여기서 workToDeployAtOnce 초기화해주는 걸 놓침
            }
        }
    
        return answer
    // }

    // 작업완료까지 남은 일수 리스트
    // 한글로 쓰고 영어로 표현해도 괜찮은 것 같음.
    // leftDaysWToCompleteWork

    /////////////////////////////////////////////////////////

    //     let leftTimeToFinishList = []
    //     for(let i=0; i<progresses.length; i++){
    //         const leftProgresses = 100 - progresses[i];
    //         const leftToDeployTimeRemainder = leftProgresses % speeds[i]
    //         let leftTimeToFinish = 0

    //         if(leftToDeployTimeRemainder !== 0){
    //             leftTimeToFinish = Math.floor(leftProgresses/speeds[i]) + 1
    //         }else{
    //             leftTimeToFinish = leftProgresses/speeds[i]
    //         }

    //         leftTimeToFinishList.push(leftTimeToFinish)
    //     }

    //     progresses = [30, 20, 10, 15]
    //     speeds = [30, 30, 8, 7]

    //     // [3, 3, 12, 13]
    //     // let answer = [0];
    //     let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    //     days = [2, 2, 11, 12]
    //     let maxDay = days[0];

    //     // for(let i = 0, j = 0; i< days.length; i++){
    //     //     if(days[i] <= maxDay) {
    //     //         answer[j] += 1;
    //     //     } else {
    //     //         maxDay = days[i];
    //     //         answer[++j] = 1;
    //     //     }
    //     // }


    //     let answer = [];
    //     let answerListSum = 0;
    //     //배열 개수가 0이라 어차피 for문 실행 안됨.

    //     for(let i=0; i<leftTimeToFinishList.length; i++){
    //         if(leftTimeToFinishList[i]>leftTimeToFinishList[i+1]){
    //             let tmp = leftTimeToFinishList[i+1];
    //             leftTimeToFinishList[i+1] = leftTimeToFinishList[i];
    //             leftTimeToFinishList[i] = tmp
    //         }else{
    //             for (let j=0; j < answer.length; j++) {
    //                 answerListSum += answer[j]
    //             }
    //             const checkedElementNum = i+1
    //             answer.push(checkedElementNum - answerListSum)
    //         }
    //     }


    // //     for(let i=0; i<leftTimeToFinishList.legnth; i++){
    // //         if(testArray[i]<testArray[i+1]){
    // //             const targetIndex = testArray.findIndex((p)=>{
    // //            p > testArray[i] 
    // //             })
    // //             const lastValue = answer.length === 0 ? 0 : answer[answer.length - 1];
    // //             const pushedValue = targetIndex-lastValue
    // //             answer.push(pushedValue)

    // //         }else{
    // //             let tmp = testArray[i+1]
    // //             testArray[i+1]=testArray[i]
    // //             testArray[i] = tmp 
    // //         }
    // //     }

    //     return answer;

    function solution(progresses, speeds) {
        let answer = [0];
         let leftDaysWToFinishWorkList = progresses.map((progress, index) => {
            const leftProgress = 100 - progress
            const leftDayToFinishWork = Math.ceil(leftProgress / speeds[index])
                return leftDayToFinishWork
        })
    // let days = progresses.map((progress, index, array) => {
    //   const leftProgress = 100 - progresses[index];
    //   const remainderOfleftProgressDividedBySpeeds = leftProgress/speeds[index] % 1
    //   const leftDaysToFinishWork = leftProgress / speeds[index]
      
    //   let roundedOffleftDaysToFinishWork = 0
    
    //   if (remainderOfleftProgressDividedBySpeeds !== 0) {
    //     roundedOffleftDaysToFinishWork = Math.floor(leftDaysToFinishWork) + 1
    //     return roundedOffleftDaysToFinishWork
    //   } else {
    //     roundedOffleftDaysToFinishWork = leftProgress / speeds[index]
    //     return roundedOffleftDaysToFinishWork
    //   }
    // });
        // let maxDay = days[0];
    
        // for(let i = 0, j = 0; i< days.length; i++){
        //     if(days[i] <= maxDay) {
        //         answer[j] += 1;
        //     } else {
        //         maxDay = days[i];
        //         answer[++j] = 1;
        //     }
        // }
    
        // return answer;
    }
}