superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
// condition ? expression1 : expression2;
  // if result
  //   return result.year
  // else
  //   return undefined
  // end
}