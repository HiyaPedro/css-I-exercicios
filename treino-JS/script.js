function calculaNota(ex, p1, p2) {
    const weightEx = ex * 1 
    const weightP1 = p1 * 2 
    const weightP2 = p2 * 3
    let sum = weightEx + weightP1 + weightP2
    console.log(sum)
    let weightedAverage = (sum / 6)
    //weightedAverage = Math.floor(weightedAverage)
    console.log(weightedAverage)
    
    if(weightedAverage >= 9){
      return "A"
    } else if(weightedAverage < 9 && weightedAverage >= 7.5) {
      return "B"
    } else if(weightedAverage < 7.5 && weightedAverage >= 6) {
       return "C"
    } else if(weightedAverage < 6) {
      return "D"
    }
    
  }
  const result = calculaNota(10, 5, 6)
  console.log(`The final grade according to the weighted average of the three test scores = ${result}`)