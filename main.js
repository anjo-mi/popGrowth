function nbYear(p0, percent, aug, p) {
    let years = 0  
    for (let i = 0 ; p0 < p ; i ++){
        p0 = Math.floor(p0 + p0 * percent/100 + aug)
        years = i
      }
    return years + 1
  }